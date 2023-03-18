---
title: YeeOnlineJudge 项目开发文档
icon: repo
article: true
---

此文档记录 YeeOnlineJudge 后端开发

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
| statistics | JSONField     | 提交数据   |
| avatar     | ImageField    | 头像       |
| bio        | CharField     | 格言       |

#### 功能设计

organization 模块主要负责：

1. 组（班级）管理
2. 用户管理
3. 用户资料管理
4. 认证与鉴权

在认证与鉴权方面，继承 Django 的 `AbstractBaseUser` 类，参照 Django 的 `AbstractUser` 类，更改与添加一些用户属性来更好的契合系统，继承 Django 的 `BaseUserManager`，自定义 UserManager 。

``` python
# organization/models.py

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

继承 Simple JWT 的 `TokenObtainPairView` 类，重写 `post` 方法来记录用户最后一次登录的IP地址，在顶层 `urlpatterns` 使用该类来完成认证与鉴权。

```python
# organization/views/admin.py

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


# YeeOnlineJudge/urls.py

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
| statistics       | JSONField       | 提交数据         |
| created_by       | ForeignKey      | 创建者           |

#### 功能设计

problem 模块主要负责：

1. 题目标签管理
2. 测试样例管理
3. 题目管理

在使用模版判题时使用如下模版进行判题，`//TEMPLATE BEGIN...//TEMPLATE END` 间为作答部分，在提交后与 `//PREPEND BEGIN...//PREPEND END` 和 `//APPEND BEGIN...//APPEND END` 这两部分结合交予判题机进行判题。

```java
//PREPEND BEGIN
import java.util.Scanner;
//PREPEND END

//TEMPLATE BEGIN
class Solution {
    public int add(int a, int b) {
        return _________;
    }
}
//TEMPLATE END

//APPEND BEGIN
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Solution solution = new Solution();
        while (scanner.hasNext()) {
            System.out.println(solution.add(scanner.nextInt(), scanner.nextInt()));
        }
    }
}
//APPEND END
```

后端在存储测试样例的分数使用如下 JSON 结构，当题目为 ACM 模式，分数默认计为100。

```json
[
    // test_case #1
    {
        "input_name": "1.in",
        "output_name": "1.out",
        "point": 50 // ignore in ACM mode
    },

    // test_case #2
    {
        "input_name": "2.in",
        "output_name": "2.out",
        "point": 50 // ignore in ACM mode
    }
]
```

此外，对题目的增改有对 `languages`、 `template`、 `test_case`、`point` 有如下验证。

```python
# problem/serializers.py

class BaseProblemSerializer(serializers.ModelSerializer):
    ...
    def validate(self, data):
        for i in data.get('languages'):
            if i not in get_languages().keys():
                raise serializers.ValidationError({"detail": "specify language does not support"})

        if template := data.get('template'):
            for key in template.keys():
                if int(key) not in data.get('languages'):
                    raise serializers.ValidationError({"detail": "specify language in template does not support"})

        if tc_id := data.get('test_case'):
            try:
                test_case = TestCase.objects.get(id=tc_id)
            except TestCase.DoesNotExist:
                raise serializers.ValidationError({"detail": "this test case does not exist"})
            data.update(test_case=test_case)
        elif self.instance:
            test_case = self.instance.test_case
        else:
            raise serializers.ValidationError({"detail": "test case cannot be null"})

        if self.instance and data.get('point') is None:
            return data

        tc_struct = test_case.struct
        if point := data.get('point'):
            if len(tc_struct) != len(point):
                raise serializers.ValidationError("point invalid")
            for ori, cmp in zip(tc_struct, point):
                if not (cmp.__contains__('input_name') and cmp.__contains__('output_name')):
                    raise serializers.ValidationError({"detail": "point invalid"})
                if data.get('mode') == 'OI' and (not cmp.__contains__('point')):
                    raise serializers.ValidationError({"detail": "point invalid"})
                if ori.get('input_name') != cmp.get('input_name'):
                    raise serializers.ValidationError({"detail": "point invalid"})
                if ori.get('output_name') != cmp.get('output_name'):
                    raise serializers.ValidationError({"detail": "point invalid"})
        else:
            raise serializers.ValidationError({"detail": "point is null"})
        return data
    ...
```

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

| 字段名称   | 字段类型   | 字段说明     |
| ---------- | ---------- | ------------ |
| user       | ForeignKey | 用户         |
| training   | ForeignKey | 比赛         |
| statistics | JSONField  | 训练比赛数据 |

#### 功能设计

training 模块主要负责：

1. 题集管理
2. 训练比赛管理
3. 学习计划管理
4. 训练比赛排名

`TrainingBase` 为抽象模型，`Training` 和 `LearningPlan` 去继承该类实现实体模型，因为 `Training` 和 `LearningPlan` 继承该类的 `created_by` 字段，导致在后续进行反向查询时会有非唯一结果，所以需要在 `related_name` 使用 `%(class)s_creator` 来获取唯一的结果。

```python
# training/models.py

class TrainingBase(models.Model):
    title = models.CharField(_("title"), max_length=25)
    description = models.TextField(_("description"), max_length=100)
    created_time = models.DateTimeField(_("created time"), auto_now_add=True)
    is_open = models.BooleanField(_("open whether or not"), default=False)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='%(class)s_creator')

    def __str__(self):
        return self.title

    class Meta:
        abstract = True
        ordering = ['-created_time']
```

训练比赛有三种参赛方式，分别是：

1. 组
2. 用户
3. 密码

以上三种为或关系，满足一项即可参赛。

```python
# training/models.py

class Training(TrainingBase):
    ...
    group = models.ManyToManyField(Group, related_name='train_groups')
    user = models.ManyToManyField(User, related_name='train_users')
    password = models.CharField(_("password"), max_length=128, null=True)
    ...
```

参赛时会对以上三项进行验证，验证通过后会将验证信息存入缓存以供读取。

```python
# training/views/normal.py

@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def training_verify(request):
    try:
        if not request.data.get('id'):
            return Response({"detail": "id为空"}, status=status.HTTP_400_BAD_REQUEST)

        training = Training.objects.filter(is_open=True).get(pk=request.data.get('id'))
    except Training.DoesNotExist:
        return Response({"detail": "比赛不存在"}, status=status.HTTP_404_NOT_FOUND)

    training_verify_set = cache.get('training_verify_' + str(request.data.get('id')), set())

    if request.data.get('password') and \
            training.password and \
            check_password(request.data.get('password'), training.password):
        training_verify_set.add(request.user.username)
        cache.set('training_verify_' + str(request.data.get('id')), training_verify_set, None)
        return Response({"detail": "ok"}, status=status.HTTP_200_OK)

    # 无密码使用身份认证参加，如登录用户在比赛所允许的用户或组内，即可认证成功
    try:
        user_group = request.user.profile.group
        if training.user.get(username=request.user.username) or training.group.get(pk=user_group.id):
            training_verify_set.add(request.user.username)
            cache.set('training_verify_' + str(request.data.get('id')), training_verify_set, None)
            return Response({"detail": "ok"}, status=status.HTTP_200_OK)
    except ObjectDoesNotExist:
        return Response({"detail": "failed"}, status=status.HTTP_403_FORBIDDEN)
```

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

#### 功能设计

submission 模块主要负责：

1. 提交管理
2. 结合 organization、 problem、 training 模块实现 OJ 的主要功能

因为要对每个测试样例的对错进行记录以方便信息统计，所以在模型设计上存储了该提交所对应的题目的每个测试样例的提交 Token。

```python
# submission/models.py

class Submission(models.Model):
    ...
    token = models.JSONField(_("submission token"), default=list)
    ...
```

在进行提交时，首先提交的问题中有 `template` 存在且提交的语言为 `template` 支持的语言，则把提交的代码与 `template` 结合起来提交；其次记录提交的IP地址；如请求字段中有 `stdin` 则作为测试提交，只交由判题，不做数据统计，反之则提交并进行数据统计；对于一个用户的首次训练比赛提交，为其创建训练比赛排名信息进行数据记录。

```python
# submission/views/normal.py

class SubmissionListCreateView(generics.ListCreateAPIView):
    ...
    def create(self, request, *args, **kwargs):
        if template := Problem.objects.get(pk=request.data.get('problem')).template:
            if request.data.get('language_id') in [int(i) for i in template.keys()]:
                prased = prase_template(template.get(str(request.data.get('language_id'))))
                request.data.update({
                    "code": f"{prased.get('prepend')}\n{request.data.get('code')}\n{prased.get('append')}"
                })

        if x_forwarded_for := request.META.get('HTTP_X_FORWARDED_FOR'):
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')

        if request.data.get('stdin'):
            expected_output = request.data.get('expected_output')
            problem = Problem.objects.get(pk=request.data.get('problem'))
            sub = submission.submit(
                source_code=bytes(request.data.get('code'), 'utf-8'),
                language=request.data.get('language_id'),
                stdin=bytes(request.data.get('stdin'), 'utf-8'),
                expected_output=None if not expected_output else bytes(expected_output, 'utf-8'),
                cpu_time_limit=problem.time_limit / 1000,
                memory_limit=problem.memory_limit * 1024,
                wait=True
            )
            return Response(sub, status=status.HTTP_200_OK)
        else:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            submit = serializer.save(created_by=request.user, status=Submission.Status.IQ, submit_ip=ip)
            headers = self.get_success_headers(serializer.data)
            to_judge.delay(
                code=request.data.get('code'),
                language_id=request.data.get('language_id'),
                problem_id=request.data.get('problem'),
                submission_id=submit.id,
                training=request.data.get('training')
            )

        if training := request.data.get('training'):
            try:
                TrainingRank.objects.get(user=request.user, training_id=training)
            except TrainingRank.DoesNotExist:
                TrainingRank.objects.create(user=request.user, training_id=training,
                                            statistics={
                                                "statistics": default_statistics(),
                                                "score": 0
                                            })

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    ...
```

后交由验证提交是否为题目支持的语言，是否具有参赛权限等。

```python
# submission/serializers.py

class BaseSubmissionSerializers(serializers.ModelSerializer):
    ...
    def validate(self, attrs):
        problem = attrs.get("problem")

        if attrs.get('language_id') not in problem.languages:
            raise serializers.ValidationError({"detail": "language does not support"})

        if training := attrs.get('training'):
            training_verify_set = cache.get('training_verify_' + str(self.context.get('request').data.get('training')),
                                            set())
            if self.context.get('request').user.username not in training_verify_set:
                raise serializers.ValidationError({"detail": "you do not have permission to access this training"})
            if datetime.now() > training.end_time:
                raise serializers.ValidationError({"detail": "training has expired"})
            if datetime.now() < training.start_time:
                raise serializers.ValidationError({"detail": "training has not started"})

            try:
                training.problems.get(pk=problem.id)
            except Problem.DoesNotExist:
                raise serializers.ValidationError({"detail": "problem not in this training"})

        return attrs
    ...
```

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

#### 功能设计

announcement 模块主要负责：

1. 公告管理
2. 训练比赛公告管理

## Celery 异步任务

### 功能设计

首先对在待判题队列的提交进行处理，即将提交所对应的题目的测试样例一一送至判题机进行判题，保留返回 Token 并存储，并根据返回状态对提交状态的更新，完成以上任务后将进行训练比赛的排名更新和用户、题目、比赛数据的更新。

```python
# YeeOnlineJudge/tasks.py

@shared_task
def to_judge(code, language_id, problem_id, submission_id, training=None):
    submit = Submission.objects.get(pk=submission_id)
    submit.status = Submission.Status.PROCESSING
    submit.save()

    problem = Problem.objects.get(pk=problem_id)

    test_case = problem.test_case.file
    stdin_list, expected_output_list = read_test_case(test_case)
    token_list = list()
    wrong_flag = False
    if training:
        train = submit.training
        user = submit.created_by
        statistics = train.trainingrank_set.get(user=user).statistics
        test_case_status = statistics.get(str(problem_id), {})
    else:
        statistics = {}
        test_case_status = {}
    # 将一道题目中的每个测试样例和提交的代码送去判题机
    for index, val in enumerate(zip(stdin_list, expected_output_list)):
        stdin = val[0]
        expected_output = val[1]
        sub = submission.submit(
            source_code=bytes(code, 'utf-8'),
            language=language_id,
            stdin=bytes(stdin, 'utf-8'),
            expected_output=None if not expected_output else bytes(expected_output, 'utf-8'),
            cpu_time_limit=problem.time_limit / 1000,
            memory_limit=problem.memory_limit * 1024,
            wait=True
        )
        token_list.append(sub.token)
        index = str(index)
        if problem.mode == 'OI' and (not wrong_flag):
            submit.status = Submission.translate_status(sub.status)

        # 提交的状态id大于3即为出错，对于ACM模式直接停止判题并记录提交状态。对于OI模式则继续，但不会继续更新此提交的状态
        if sub.status.get('id') > 3:
            # 之前做对不更新
            if not test_case_status.get(index):
                test_case_status.update({index: False})
            wrong_flag = True
        elif sub.status.get('id') == 3:
            test_case_status.update({index: True})
        else:
            if not test_case_status.get(index):
                test_case_status.update({index: None})

        if problem.mode == 'ACM':
            submit.status = Submission.translate_status(sub.status)
            if wrong_flag:
                break

    submit.token = token_list
    submit.save()

    statistics.update({str(problem_id): test_case_status})

    if training:
        work = process_training.delay(submission_id, statistics)
        # 等待排名更新操作完成
        while not work.ready():
            sleep(0.1)
        process_statistics.delay(submission_id, "Training", training)
    else:
        process_statistics.delay(submission_id, "Problem")
        process_statistics.delay(submission_id, "User")
    return submit.id, submit.status, statistics
```

更新数据操作的流程为对所有的提交进行过滤以及统计，把得到的数据再进行更新处理。

```python
# YeeOnlineJudge/tasks.py

@shared_task
def process_statistics(submission_id, process_type, training=None):
    submit = Submission.objects.get(pk=submission_id)
    creator_profile = submit.created_by.profile
    problem = submit.problem

    # 更新题目或用户数据
    if process_type == "User":
        statistics = creator_profile.statistics
        statistics.update(Commit=Submission.objects.filter(created_by=creator_profile.user_id).count())
        statistics.update({
            submit.status: Submission.objects.filter(
                Q(status=submit.status) &
                Q(created_by=creator_profile.user_id)
            ).distinct("problem").count()
        })
        creator_profile.statistics = statistics
        creator_profile.save()
    elif process_type == "Problem":
        statistics = problem.statistics
        statistics.update(Commit=Submission.objects.filter(problem_id=problem.id).count())
        statistics.update({
            submit.status: Submission.objects.filter(
                Q(problem_id=problem.id) &
                Q(status=submit.status)
            ).distinct("created_by").count()
        })
        problem.statistics = statistics
        problem.save()
    elif process_type == "Training":
        train = submit.training
        train_rank = train.trainingrank_set.get(user=submit.created_by)
        statistics = train_rank.statistics.get("statistics")
        statistics.update(Commit=Submission.objects.
                          filter(Q(created_by=submit.created_by) & Q(training=training)).count())
        statistics.update({
            submit.status: Submission.objects.filter(
                Q(training=training) &
                Q(status=submit.status)
            ).distinct("problem").count()
        })
        train_rank.statistics.update(statistics=statistics)
        train_rank.save()
    else:
        return "process_type 有误"
    return {process_type: statistics}
```

训练比赛的排名更新则是根据提交状态来叠加测试样例的分数和对提交状态的更新。

```python
# YeeOnlineJudge/tasks.py

@shared_task
def process_training(submission_id, new_statistics):
    submit = Submission.objects.get(pk=submission_id)
    user = submit.created_by
    train = submit.training
    train_rank = train.trainingrank_set.get(user=user)
    old_statistics = train_rank.statistics
    old_statistics.update(new_statistics)
    score = 0
    # 计算分数
    for key, val in old_statistics.items():
        if key == "score" or key == "statistics":
            continue
        problem = Problem.objects.get(pk=int(key))
        point = problem.point
        for order, status in val.items():
            cur_point = point[int(order)]
            if status:
                score += int(cur_point.get('point'))
    old_statistics.update(score=score)
    train_rank.statistics = old_statistics
    train_rank.save()
    return old_statistics
```

## 结束
