---
title: YeeOnlineJudge 项目开发文档
icon: repo
article: true
---

**文档编写中**

记录 YeeOnlineJudge 后端开发

## 项目依赖

```shell
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

| 字段名称        | 字段类型      | 字段说明       |
| --------------- | ------------- | -------------- |
| username        | CharField     | 工号/学号      |
| nickname        | CharField     | 昵称           |
| is_staff        | BooleanField  | 是否工作人员   |
| is_active       | BooleanField  | 是否启用       |
| is_superuser    | BooleanField  | 是否超级管理员 |
| first_name      | CharField     | 名             |
| email           | EmailField    | 姓             |
| user_role       | CharField     | 用户角色       |
| user_permission | CharField     | 用户权限       |
| date_joined     | DateTimeField | 加入时间       |

##### UserProfile 模型

| 字段名称   | 字段类型      | 字段说明   |
| ---------- | ------------- | ---------- |
| user       | OneToOneField | 用户       |
| group      | ForeignKey    | 组（班级） |
| statistics | JSONField     | 题目数据   |
| avatar     | ImageField    | 头像       |
| bio        | CharField     | 格言       |

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

| 字段名称   | 字段类型        | 字段说明     |
| ---------- | --------------- | ------------ |
| stage | ManyToManyField   | 阶段     |
| ordering   | JSONField   | 顺序     |

##### TrainingRank 模型

| 字段名称   | 字段类型        | 字段说明     |
| ---------- | --------------- | ------------ |
| user | ForeignKey   | 用户     |
| training   | ForeignKey   | 比赛     |
| statistics   | JSONField   | 数据     |

### announcement 模块

#### 模型设计

##### Announcement 模型

| 字段名称   | 字段类型        | 字段说明     |
| ---------- | --------------- | ------------ |
| title | CharField   | 题目     |
| content   | TextField   | 内容     |
| created_time   | DateTimeField   | 创建时间     |
| last_update_time   | DateTimeField   | 最后更新日期     |
| training   | ForeignKey   | 比赛     |
| created_by   | ForeignKey   | 创建者     |
| visible   | BooleanField   | 是否可见     |
