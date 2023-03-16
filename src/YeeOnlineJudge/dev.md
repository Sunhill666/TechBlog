---
title: YeeOnlineJudge 项目开发文档
icon: repo
article: true
---

**文档编写中**

记录 YeeOnlineJudge 后端开发

## 项目依赖

```shell
Python 3.9.15

# requirements.txt

celery==5.2.7
Django==4.0
django-celery-beat==2.3.0
django-filter==22.1
django-redis==5.2.0
djangorestframework==3.13.1
djangorestframework-simplejwt==5.2.0
Markdown==3.4.1
Pillow==9.3.0
psycopg2-binary==2.9.5
requests==2.28.1
```

### 安装依赖

```shell
pip install -r requirements.txt
```

## 模块功能设计

### organization 模块

#### 模型设计

| 模型        | 描述           |
| ----------- | -------------- |
| Group       | 组（班级）模型 |
| User        | 用户模型       |
| UserProfile | 用户资料模型   |

##### Group 模型

| 字段名称 | 字段类型  | 字段说明       |
| -------- | --------- | -------------- |
| name     | CharField | 组（班级）名称 |

##### User 模型 （*继承 `AbstractBaseUser` 类*）

| 字段名称        | 字段类型              | 字段说明       |
| --------------- | --------------------- | -------------- |
| username        | CharField             | 工号/学号      |
| nickname        | CharField             | 昵称           |
| is_staff        | BooleanField          | 是否工作人员   |
| is_active       | BooleanField          | 是否启用       |
| is_superuser    | BooleanField          | 是否超级管理员 |
| real_name       | CharField             | 真名           |
| email           | EmailField            | 电子邮件       |
| user_role       | CharField             | 用户角色       |
| user_permission | CharField             | 用户权限       |
| date_joined     | DateTimeField         | 加入时间       |
| last_login_ip   | GenericIPAddressField | 最后登陆IP     |

##### UserProfile 模型

| 字段名称   | 字段类型      | 字段说明   |
| ---------- | ------------- | ---------- |
| user       | OneToOneField | 用户       |
| group      | ForeignKey    | 组（班级） |
| statistics | JSONField     | 题目数据   |
| avatar     | ImageField    | 头像       |
| bio        | CharField     | 格言       |

#### 功能设计

organization 模块主要负责：
1. 组（班级）管理
2. 用户管理
3. 用户资料管理
4. 认证与鉴权

在认证与鉴权方面，继承 Django 的 `AbstractBaseUser` 类，参照 Django 的 `AbstractUser` 类，更改与添加一些用户属性来更好的契合系统，继承 Django 的 `BaseUserManager`，自定义 UserManager

``` python
# organization.models
class CustomUserManager(BaseUserManager):
    def _create_user(self, username, email, password, **extra_fields):
        if not username:
            raise ValueError('The given username must be set')
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.password = make_password(password)
        user.save()
        return user

    def create_user(self, username, email=None, password=None, **extra_fields):
        if extra_fields.get('user_role', None) == 'TEC':
            extra_fields.setdefault('is_staff', True)
            extra_fields.setdefault('user_permission', 'SELF')
        else:
            extra_fields.setdefault('user_role', 'STU')
            extra_fields.setdefault('is_staff', False)
            extra_fields.setdefault('user_permission', 'NONE')
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username, email, password, **extra_fields)

    def create_superuser(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault('user_role', 'TEC')
        extra_fields.setdefault('user_permission', 'ALL')
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self._create_user(username, email, password, **extra_fields)
```

继承 Simple JWT 的 `TokenObtainPairView` 类，重写 `post` 方法来记录用户最后一次登录的IP地址，在顶层 urlpatterns 使用该类来完成认证与鉴权

```python
# organization.views.admin
class MyTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        resp = super().post(request, *args, **kwargs)
        user = User.objects.get(username=request.data.get('username'))
        if x_forwarded_for := request.META.get('HTTP_X_FORWARDED_FOR'):
            user.last_login_ip = x_forwarded_for.split(',')[0]
        else:
            user.last_login_ip = request.META.get('REMOTE_ADDR')
        user.save()
        return resp


# YeeOnlineJudge.urls
urlpatterns = [
    ...
    path('api/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
```

### problem 模块

#### 模型设计

| 模型       | 描述     |
| ---------- | -------- |
| ProblemTag | 题目标签 |
| TestCase   | 测试样例 |
| Problem    | 问题     |

##### ProblemTag 模型

| 字段名称 | 字段类型  | 字段说明 |
| -------- | --------- | -------- |
| tag_name | CharField | 标签名称 |

##### TestCase 模型

| 字段名称     | 字段类型      | 字段说明     |
| ------------ | ------------- | ------------ |
| file         | FileField     | 测试样例文件 |
| created_time | DateTimeField | 创建日期     |
| struct       | JSONField     | 测试样例结构 |

##### Problem 模型

| 字段名称         | 字段类型        | 字段说明         |
| ---------------- | --------------- | ---------------- |
| title            | CharField       | 题目标题         |
| desc             | TextField       | 题目描述         |
| input_desc       | TextField       | 输入描述         |
| output_desc      | TextField       | 输出描述         |
| sample           | JSONField       | 输入输出样例     |
| template         | JSONField       | 模版             |
| hint             | TextField       | 提示             |
| languages        | JSONField       | 可提交的语言     |
| time_limit       | IntegerField    | 时间限制         |
| memory_limit     | IntegerField    | 内存限制         |
| difficulty       | CharField       | 难度             |
| mode             | CharField       | 模式             |
| test_case        | ForeignKey      | 测试样例         |
| point            | JSONField       | 分数             |
| is_public        | BooleanField    | 前台用户是否可见 |
| tags             | ManyToManyField | 题目标签         |
| source           | CharField       | 题源             |
| visible          | BooleanField    | 工作人员是否可见 |
| created_time     | DateTimeField   | 创建时间         |
| last_update_time | DateTimeField   | 最后更新时间     |
| statistics       | JSONField       | 题目数据         |
| created_by       | ForeignKey      | 创建者           |

### submission 模块

#### 模型设计

| 模型       | 描述 |
| ---------- | ---- |
| Submission | 提交 |

##### Submission 模型

| 字段名称     | 字段类型              | 字段说明                           |
| ------------ | --------------------- | ---------------------------------- |
| problem      | ForeignKey            | 提交题目                           |
| token        | JSONField             | 每个测试样例提交到 Judge0 的 Token |
| code         | TextField             | 提交代码                           |
| language_id  | IntegerField          | 提交语言ID                         |
| training     | ForeignKey            | 比赛或练习ID                       |
| status       | CharField             | 提交状态                           |
| created_time | DateTimeField         | 提交时间                           |
| created_by   | ForeignKey            | 提交者                             |
| submit_ip    | GenericIPAddressField | 提交IP                             |

### training 模块

#### 模型设计

| 模型         | 描述                   |
| ------------ | ---------------------- |
| ProblemSet   | 题集                   |
| TrainingBase | 比赛训练基类（抽象类） |
| Training     | 比赛训练               |
| LearningPlan | 学习计划               |
| TrainingRank | 比赛训练排名           |

##### ProblemSet 模型

| 字段名称 | 字段类型        | 字段说明       |
| -------- | --------------- | -------------- |
| title    | CharField       | 题集名称       |
| problems | ManyToManyField | 题集所包含题目 |

##### TrainingBase 模型 （*抽象类*）

| 字段名称     | 字段类型      | 字段说明 |
| ------------ | ------------- | -------- |
| title        | CharField     | 标题     |
| description  | TextField     | 描述     |
| created_time | DateTimeField | 创建时间 |
| is_open      | BooleanField  | 是否开启 |
| created_by   | ForeignKey    | 创建者   |

##### Training 模型 （*继承 `TrainingBase` 类*）

| 字段名称   | 字段类型        | 字段说明     |
| ---------- | --------------- | ------------ |
| start_time | DateTimeField   | 起始时间     |
| end_time   | DateTimeField   | 结束时间     |
| problems   | ManyToManyField | 题目         |
| mode       | CharField       | 模式         |
| group      | ManyToManyField | 可参加的组   |
| user       | ManyToManyField | 可参加的用户 |
| password   | CharField       | 密码         |

##### LearningPlan 模型 （*继承 `TrainingBase` 类*）

| 字段名称 | 字段类型        | 字段说明 |
| -------- | --------------- | -------- |
| stage    | ManyToManyField | 阶段     |
| ordering | JSONField       | 顺序     |

##### TrainingRank 模型

| 字段名称   | 字段类型   | 字段说明 |
| ---------- | ---------- | -------- |
| user       | ForeignKey | 用户     |
| training   | ForeignKey | 比赛     |
| statistics | JSONField  | 数据     |

### announcement 模块

#### 模型设计

| 模型         | 描述 |
| ------------ | ---- |
| Announcement | 公告 |

##### Announcement 模型

| 字段名称         | 字段类型      | 字段说明     |
| ---------------- | ------------- | ------------ |
| title            | CharField     | 标题         |
| content          | TextField     | 内容         |
| created_time     | DateTimeField | 创建时间     |
| last_update_time | DateTimeField | 最后更新日期 |
| training         | ForeignKey    | 比赛         |
| created_by       | ForeignKey    | 创建者       |
| visible          | BooleanField  | 是否可见     |
