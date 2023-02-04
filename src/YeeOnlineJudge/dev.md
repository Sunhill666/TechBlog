---
title: YeeOnlineJudge 项目开发文档
icon: repo
article: true
---

**文档编写中**

记录 YeeOnlineJudge 后端开发的心路历程，以及过程中的踩坑点以示后人

## 项目依赖

```shell
# pip list

Package                       Version
----------------------------- ---------
amqp                          5.1.1
asgiref                       3.5.2
async-timeout                 4.0.2
billiard                      3.6.4.0
celery                        5.2.7
certifi                       2022.9.24
charset-normalizer            2.1.1
click                         8.1.3
click-didyoumean              0.3.0
click-plugins                 1.1.1
click-repl                    0.2.0
colorama                      0.4.6
Django                        3.2.14
django-celery-beat            2.3.0
django-redis                  5.2.0
django-timezone-field         5.0
djangorestframework           3.13.1
djangorestframework-simplejwt 5.2.0
idna                          3.4
kombu                         5.2.4
packaging                     21.3
pip                           22.2.2
prompt-toolkit                3.0.33
psycopg2                      2.9.3
PyJWT                         2.6.0
pyparsing                     3.0.9
python-crontab                2.6.0
python-dateutil               2.8.2
pytz                          2022.6
redis                         4.3.5
requests                      2.28.1
setuptools                    63.2.0
six                           1.16.0
sqlparse                      0.4.3
tzdata                        2022.6
urllib3                       1.26.13
vine                          5.0.0
wcwidth                       0.2.5
```

### 安装依赖

```shell
pip install -r requirements.txt
```

## 模块设计

### organization 模块

#### 模型设计

| 模型        | 描述             |
| ----------- | ---------------- |
| User        | 用户基本模型     |
| Group       | 组（班级）模型   |
| UserProfile | 用户详细资料模型 |

##### User 模型 *继承 AbstractUser 类*

| 字段名称        | 字段类型      | 字段说明         |
| --------------- | ------------- | ---------------- |
| username        | CharField     | 工号/学号        |
| user_role       | CharField     | 用户角色         |
| user_permission | CharField     | 用户权限         |
| first_name      | CharField     | 名               |
| last_name       | CharField     | 姓               |

##### Group 模型

| 字段名称 | 字段类型   | 字段说明       |
| -------- | --------- | ------------- |
| name     | CharField | 组（班级）名称 |

##### UserProfile 模型

| 字段名称     | 字段类型      | 字段说明   |
| ------------ | ------------- | ---------- |
| user         | OneToOneField | 用户       |
| group        | ForeignKey    | 组（班级） |
| statistics   | JSONField     | 题目数据   |
| avatar       | ImageField    | 头像       |
| bio          | CharField     | 格言       |
