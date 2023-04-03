---
title: YeeOnlineJudge 接口文档
icon: repo
article: true
---

**文档编写中**

## 认证接口

::: tip
在请求除 AllowAny 和 IsAuthenticatedOrReadOnly 这两种权限的接口可以在 Header 部分不携带 Bearer Token，请求其余权限的接口请在 Header 中携带 Bearer Token。

```json
{
    ...
    Authorization: Bearer <access_token>,
    ...
}
```

否则会出现 `403 Forbidden` ，Token 中含有当前用户的信息，用于鉴权。

:::

::: info JWT-Token 获取 - AllowAny

`/api/login/` `POST`

::: details 接口使用

发送带有 `username` 和 `password` 的信息来获取 Access Token 用于验证和 Refresh Token 用于获取新 Token。

```json
{
    "username": "10010110",
    "password": "admin"
}
```

成功返回 `200 OK` 。

```json
{
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3OTQxMDY3NCwiaWF0IjoxNjc5MzI0Mjc0LCJqdGkiOiJiMzNiNDIyYjM2Njg0YmUyODc4ZGM2OWMxNWQ3MmI5ZiIsInVzZXJfaWQiOiIxMDAxMDExMCJ9.jY65pN2ER1e8PcKhxRqTX6FRFC6I_Kr7vvJ0l4wNU20",
    "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5NDEwNjc0LCJpYXQiOjE2NzkzMjQyNzQsImp0aSI6IjRiNDU4YmQ1MTA0ODQ2NjBhYzE4NWIyMzQ1ZDVhNjNiIiwidXNlcl9pZCI6IjEwMDEwMTEwIn0.Mg1kSMS-4bs_SVKi--LMXoK3iexcZIbiyFAQ1lC5o6M"
}
```

:::

::: info JWT-Token 刷新 - AllowAny

`/api/login/refresh/` `POST`

::: details 接口使用

发送带有 Refresh Token 的信息来获取新的 Access Token 用于验证和 Refresh Token 用于获取新 Token。

```json
{
    "refresh": "<refresh_token>"
}
```

成功返回 `200 OK` 。

```json
{
    "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5NDkwMTI1LCJpYXQiOjE2Nzk0MDM3MTcsImp0aSI6ImEwYTU1NjFjN2VhZjQxOWQ5NjhiNDQ3ZDMxMGQ5NzVlIiwidXNlcl9pZCI6IjEwMDEwMTEwIn0.nO_LWhNlmVDAlOqJr0TnorDrTw69d9f9PpftU4S7KTk",
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3OTQ5MDEyNSwiaWF0IjoxNjc5NDAzNzI1LCJqdGkiOiJmMGEyNTE1ZWRjNjE0YWMwODg4YWFhYmQ4MjA3OTk2NyIsInVzZXJfaWQiOiIxMDAxMDExMCJ9.cwUa060qLQrHrzYTJzaqIEu1pvIBUhk4nrWemGAIWMk"
}
```

:::

::: info JWT-Token 验证 - AllowAny

`/api/login/verify/` `POST`

::: details 接口使用

发送带有 Access Token 的信息来验证 Token 是否有效。

```json
{
    "token": "<access_token>"
}
```

成功返回 `200 OK` 。

```json
{}
```

:::

::: info JWT-Token 销毁 - AllowAny

`/api/login/blacklist/` `POST`

::: details 接口使用

发送带有 Refresh Token 的信息来销毁 Token。

```json
{
    "refresh": "<refresh_token>"
}
```

成功返回 `200 OK` 。

```json
{}
```

:::

## Query Parameter 和 Filter Parameter 的使用

:::tip

以**用户排名**为例：

在排名中查询 `username` 为 `10010110` 的用户。

```text
GET http://127.0.0.1:8000/api/org/rank?search=10010110
```

在排名中查询属于 `Group.name` 中含有 `te` 的用户。

```text
GET http://127.0.0.1:8000/api/org/rank?search=te
```

在排名中查询属于 `Group.name` 中含有 `te` 且 `username` 为 `1234567890000` 的用户。

```text
GET http://127.0.0.1:8000/api/org/rank?search=te,1234567890000
```

排名根据 `UserProfile.statistics.Accepted` 升序排序。

```text
GET http://127.0.0.1:8000/api/org/rank?ordering=profile__statistics__Accepted
```

排名根据 `UserProfile.statistics.Accepted` 倒序排序。

```text
GET http://127.0.0.1:8000/api/org/rank?ordering=-profile__statistics__Accepted
```

排名根据 `UserProfile.statistics.Accepted` 升序排序再按 `UserProfile.statistics.Commit` 倒序排序。

```text
GET http://127.0.0.1:8000/api/org/rank?ordering=profile__statistics__Accepted,-profile__statistics__Commit
```

在排名中查询属于 `Group.name` 中含有 `te` 且 `username` 为 `1234567890000` 的用户，根据 `UserProfile.statistics.Accepted` 升序排序再按 `UserProfile.statistics.Commit` 倒序排序。

```text
GET http://127.0.0.1:8000/api/org/rank?search=te,1234567890000&ordering=profile__statistics__Accepted,-profile__statistics__Commit
```

:::

## 前台接口

### Organization

#### 用户

::: info 用户注册 - AllowAny

`/api/org/register/` `POST`

::: details 接口使用

使用 `form-data` 按以下字段来创建用户。

| 字段名    | 样例参数           | 必填 | 说明           |
| --------- | ------------------ | ---- | -------------- |
| username  | 1234567890000      | 是   | 工号/学号      |
| nickname  | 先辈               | 是   | 昵称           |
| password  | test               | 是   | 密码           |
| real_name | 田所浩二           | 是   | 真名           |
| email     | example@qq.com     | 是   | 电子邮件       |
| group     | test               | 是   | 所在组（班级） |
| avatar    | FILE               | 否   | 头像文件       |
| bio       | WRRYYYYYYYYYYYYYY! | 否   | 格言           |

成功返回 `201 Created` 。

```json
{
    "username": "1234567890000",
    "nickname": "先辈",
    "real_name": "田所浩二",
    "email": "example@qq.com",
    "date_joined": "2023-03-21T21:49:01.970028",
    "profile": {
        "group": {
            "id": 2,
            "name": "test"
        },
        "statistics": {
            "Commit": 0,
            "Accepted": 0,
            "In Queue": 0,
            "Processing": 0,
            "Wrong Answer": 0,
            "Runtime Error": 0,
            "Internal Error": 0,
            "Compilation Error": 0,
            "Exec Format Error": 0,
            "Time Limit Exceeded": 0
        },
        "avatar": "/media/avatar/default.jpg",
        "bio": null
    }
}
```

::: danger

1. `username` 必须为 8-13 位数字。
2. `group` 的组必须存在。

:::

::: info 查看用户 - IsAuthenticatedOrReadOnly

`/api/org/user/{username}/` `GET`

::: details 接口使用

使用 `username` 来查看用户信息。

```text
GET http://127.0.0.1:8000/api/org/user/1234567890000/
```

成功返回 `200 OK` 。

```json
{
    "username": "1234567890000",
    "nickname": "先辈",
    "real_name": "田所浩二",
    "email": "example@qq.com",
    "date_joined": "2023-03-21T22:15:28.482492",
    "profile": {
        "group": {
            "id": 2,
            "name": "test"
        },
        "statistics": {
            "Commit": 0,
            "Accepted": 0,
            "In Queue": 0,
            "Processing": 0,
            "Wrong Answer": 0,
            "Runtime Error": 0,
            "Internal Error": 0,
            "Compilation Error": 0,
            "Exec Format Error": 0,
            "Time Limit Exceeded": 0
        },
        "avatar": "http://127.0.0.1:8000/media/avatar/default.jpg",
        "bio": null
    }
}
```

:::

::: info 修改当前用户 - IsAuthenticatedOrReadOnly

`/api/org/user/{username}/` `PUT`

::: details 接口使用

使用 `username` 来修改当前用户信息。

```text
PUT http://127.0.0.1:8000/api/org/user/1234567890000/
```

```json
{
    "nickname": "型最精彩",
    "real_name": "赵七",
    "email": "example@example.com",
    "profile": {
        "bio": "小子张o",
        "group": "test"
    }
}
```

成功返回 `200 OK` 。

```json
{
    "username": "1234567890000",
    "nickname": "型最精彩",
    "real_name": "赵七",
    "email": "example@example.com",
    "date_joined": "2023-03-21T22:49:26.753120",
    "profile": {
        "group": {
            "id": 2,
            "name": "test"
        },
        "statistics": {
            "Commit": 0,
            "Accepted": 0,
            "In Queue": 0,
            "Processing": 0,
            "Wrong Answer": 0,
            "Runtime Error": 0,
            "Internal Error": 0,
            "Compilation Error": 0,
            "Exec Format Error": 0,
            "Time Limit Exceeded": 0
        },
        "avatar": "http://127.0.0.1:8000/media/avatar/default.jpg",
        "bio": "小子张o"
    }
}
```

::: warning
1. 只能对当前用户修改
2. 修改密码和头像使用下方 `PATCH` 方式修改

:::

::: info 修改当前用户 - IsAuthenticatedOrReadOnly

`/api/org/user/{username}/` `PATCH`

::: details 接口使用

使用 `form-data` 按以下字段来修改密码和头像。

| 字段名         | 样例参数 | 必填                                 | 说明   |
| -------------- | -------- | ------------------------------------ | ------ |
| profile.avatar | FILE     | 否                                   | 头像   |
| password       | test     | 否                                   | 新密码 |
| old_pwd        | test123  | 如填写 `password` 则必填，否则非必填 | 旧密码 |

```text
PATCH http://127.0.0.1:8000/api/org/user/1234567890000/
```

成功返回 `200 OK` 。

```json
{
    "username": "1234567890000",
    "nickname": "型最精彩",
    "real_name": "赵七",
    "email": "example@example.com",
    "date_joined": "2023-03-21T22:49:26.753120",
    "profile": {
        "group": {
            "id": 2,
            "name": "test"
        },
        "statistics": {
            "Commit": 0,
            "Accepted": 0,
            "In Queue": 0,
            "Processing": 0,
            "Wrong Answer": 0,
            "Runtime Error": 0,
            "Internal Error": 0,
            "Compilation Error": 0,
            "Exec Format Error": 0,
            "Time Limit Exceeded": 0
        },
        "avatar": "http://127.0.0.1:8000/media/avatar/default.jpg",
        "bio": "小子张o"
    }
}
```

:::

::: info 用户排名 - IsAuthenticatedOrReadOnly

`/api/org/rank/` `GET`

::: details 接口使用

通过请求来获取用户排名。

```text
GET http://127.0.0.1:8000/api/org/rank/
```

**Query Parameter 支持参数**

| 参数   | 查询方式 | 对应实体字段  |
| ------ | -------- | ------------- |
| 用户名 | 精确查询 | User.username |
| 组名   | 模糊查询 | Group.name    |

**Filter Parameter 支持参数**

| 参数   | 对应实体字段                    | 排序字段                      |
| ------ | ------------------------------- | ----------------------------- |
| 正确量 | UserProfile.statistics.Accepted | profile__statistics__Accepted |
| 提交量 | UserProfile.statistics.Commit   | profile__statistics__Commit   |


成功返回 `200 OK` 。

```json
{
    "count": 3,  // 数据条目数量。
    "next": null, // 下一页链接。
    "previous": null,  // 上一页链接。
    "results": [  // 结果集。
        {
            "username": "10010110",
            "nickname": "",
            "profile": {
                "group": {
                    "id": 1,
                    "name": "管理组"
                },
                "avatar": "http://127.0.0.1:8000/media/avatar/default.jpg",
                "statistics": {
                    "Commit": 0,
                    "Accepted": 0,
                    "In Queue": 0,
                    "Processing": 0,
                    "Wrong Answer": 0,
                    "Runtime Error": 0,
                    "Internal Error": 0,
                    "Compilation Error": 0,
                    "Exec Format Error": 0,
                    "Time Limit Exceeded": 0
                }
            }
        },
        ...
    ]
}
```

:::

#### 组（班级）

::: info 查看组（班级）详情 - AllowAny

`/api/org/group/{id}/` `GET`

::: details 接口使用

使用 Group 的 `id` 来获取组（班级）详情。

```text
GET http://127.0.0.1:8000/api/org/group/2/
```

成功返回 `200 OK` 。

```json
{
    "id": 2,
    "users": [
        {
            "user": "1234567890000",
            "avatar": "http://127.0.0.1:8000/media/avatar/default.jpg"
        },
        ...
    ],
    "name": "test"
}
```

:::

### Problem

#### 题目

::: info 题目列表 - AllowAny

`/api/prm/problem/` `GET`

::: details 接口使用

通过请求来获取题目列表。

**Query Parameter 支持参数**

| 参数     | 查询方式 | 对应实体字段        |
| -------- | -------- | ------------------- |
| 难度     | 精确查询 | Problem.difficulty  |
| 题目     | 模糊查询 | Problem.title       |
| 标签名称 | 模糊查询 | ProblemTag.tag_name |

成功返回 `200 OK` 。

```json
{
    "count": 7,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "title": "循环",
            "difficulty": "Hard",
            "tags": [
                {
                    "id": 2,
                    "tag_name": "Test"
                },
                {
                    "id": 1,
                    "tag_name": "入门"
                }
            ],
            "statistics": {
                "Commit": 0,
                "Accepted": 0,
                "In Queue": 0,
                "Processing": 0,
                "Wrong Answer": 0,
                "Runtime Error": 0,
                "Internal Error": 0,
                "Compilation Error": 0,
                "Exec Format Error": 0,
                "Time Limit Exceeded": 0
            },
            "done": -1 // 是否做过：1 做对；0 做错；-1 没做过。
        },
        ...
    ]
}
```

:::

::: info 题目详情 - AllowAny

`/api/prm/problem/{id}/` `GET`

::: details 接口使用

使用 Problem 的 `id` 来获取题目详情。

```text
GET http://127.0.0.1:8000/api/prm/problem/1/
```

成功返回 `200 OK` 。

```json
{
    "id": 1,
    "title": "循环",
    "desc": "乐乐是一个聪明而又勤奋好学的孩子。他总喜欢探求事物的规律。一天，他突然对数的正整数次幂产生了兴趣。\n\n\n众所周知，$2$ 的正整数次幂最后一位数总是不断的在重复 $2,4,8,6,2,4,8,6…$ 我们说 $2$ 的正整数次幂最后一位的循环长度是 $4$（实际上 $4$ 的倍数都可以说是循环长度，但我们只考虑最小的循环长度）。类似的，其余的数字的正整数次幂最后一位数也有类似的循环现象：\n\n$$\n\\def\\arraystretch{1.5}\n\\begin{array}{c|c|c}\\hline\n\\textbf{数字}& \\textbf{循环} & \\textbf{循环长度} \\cr\\hline\\hline\n2 & 2,4,8,6 & 4\\cr\\hline\n3 & 3,9,7,1 & 4\\cr\\hline\n4 & 4,6 & 2\\cr\\hline\n5 & 5 &  1\\cr\\hline\n6 & 6 & 1\\cr\\hline\n7 & 7,9,3,1 & 4\\cr\\hline\n8 & 8,4,2,6 & 4\\cr\\hline\n9 & 9,1 & 2\\cr\\hline\n\\end{array}\n$$\n\n这时乐乐的问题就出来了：是不是只有最后一位才有这样的循环呢？对于一个整数 $n$ 的正整数次幂来说，它的后k位是否会发生循环？如果循环的话，循环长度是多少呢？\n\n注意：\n\n1. 如果 $n$ 的某个正整数次幂的位数不足 $k$，那么不足的高位看做是 $0$。\n2. 如果循环长度是 $L$，那么说明对于任意的正整数 $a$，$n$ 的 $a$ 次幂和 $a+L$ 次幂的最后 $k$ 位都相同。\n",
    "input_desc": "共一行，包含 $2$ 个整数 $n$ 和 $k$。$n$ 和 $k$ 之间用一个空格隔开，表示要求 $n$ 的正整数次幂的最后 $k$ 位的循环长度。",
    "output_desc": "一个整数，表示循环长度。如果循环不存在，输出 $-1$。",
    "sample": [
        {
            "input": "32 2",
            "output": "4"
        }
    ],
    "template": {
        "50": "int add(int a, int b) {\n  // Please fill this blank\n  return ___________;\n}\n",
        "62": "class Solution {\n    public int add(int a, int b) {\n        return _________;\n    }\n}\n"
    },
    "hint": "**【数据范围】**\n\n对于 $30 \\%$ 的数据，满足 $k \\le 4$；  \n对于$100 \\%$ 的数据，满足 $1 \\le n < {10}^{100}$，$1 \\le k \\le 100$。\n\n**【题目来源】**\n\nNOIP 2005 普及组第四题",
    "languages": [
        50,
        54,
        60,
        62,
        71
    ],
    "time_limit": 4096,
    "point": [
        {
            "point": "100",
            "input_name": "1.in",
            "output_name": "1.out"
        },
        {
            "point": "100",
            "input_name": "2.in",
            "output_name": "2.out"
        }
    ],
    "memory_limit": 48,
    "difficulty": "Hard",
    "tags": [
        {
            "id": 2,
            "tag_name": "Test"
        },
        {
            "id": 1,
            "tag_name": "入门"
        }
    ],
    "source": "YeeOnlineJudge",
    "statistics": {
        "Commit": 0,
        "Accepted": 0,
        "In Queue": 0,
        "Processing": 0,
        "Wrong Answer": 0,
        "Runtime Error": 0,
        "Internal Error": 0,
        "Compilation Error": 0,
        "Exec Format Error": 0,
        "Time Limit Exceeded": 0
    }
}
```

:::

#### 题目标签

::: info 题目标签列表 - AllowAny

`/api/prm/tag/` `GET`

::: details 接口使用

通过请求来获取题目标签列表。

成功返回 `200 OK` 。

```json
[
    {
        "id": 2,
        "tag_name": "Test"
    },
    ...
]
```

:::

::: info 题目标签详情 - AllowAny

`/api/prm/tag/{id}/` `GET`

::: details 接口使用

使用 ProblemTag 的 `id` 来获取题目标签详情。

```text
GET http://127.0.0.1:8000/api/prm/tag/1/
```

成功返回 `200 OK` 。

```json
{
    "id": 1,
    "tag_name": "入门"
}
```

:::

### Training

#### 比赛训练

::: info 比赛练习列表 - IsAuthenticatedOrReadOnly

`/api/train/training/` `GET`

::: details 接口使用

通过请求来获取比赛练习列表。

**Query Parameter 支持参数**

| 参数 | 查询方式 | 对应实体字段   |
| ---- | -------- | -------------- |
| 标题 | 模糊查询 | Training.title |

**Filter Parameter 支持参数**

| 参数     | 对应实体字段        | 排序字段   |
| -------- | ------------------- | ---------- |
| 开始时间 | Training.start_time | start_time |

成功返回 `200 OK` 。

```json
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "title": "比赛#1",
            "created_time": "2023-03-22T22:45:04.658970",
            "is_open": true,
            "start_time": "2023-03-02T12:00:00",
            "end_time": "2023-04-01T12:00:00",
            "mode": "OI",
            "created_by": "10010110",
            "problems": [
                25,
                26,
                27,
                28,
                29
            ],
            "group": [], // 可免验证参加的组（班级）。
            "user": [] // 可免验证参加的用户。
        },
        ...
    ]
}
```

:::

::: info 比赛练习详情 - IsAuthenticatedOrReadOnly

`/api/train/training/{id}/` `GET`

::: details 接口使用

使用 Training 的 `id` 来获取比赛练习详情。

```text
GET http://127.0.0.1:8000/api/train/training/1/
```

成功返回 `200 OK` 。

```json
{
    "id": 1,
    "group": [],
    "user": [],
    "title": "比赛#1",
    "description": "比赛#1比赛#1比赛#1",
    "created_time": "2023-03-22T22:45:04.658970",
    "is_open": true,
    "start_time": "2023-03-02T12:00:00",
    "end_time": "2023-04-01T12:00:00",
    "mode": "OI",
    "created_by": "10010110",
    "problems": [
        {
            "id": 25,
            "title": "靶形数独",
            "difficulty": "Hard",
            "tags": [
                {
                    "id": 2,
                    "tag_name": "Test"
                },
                {
                    "id": 1,
                    "tag_name": "入门"
                }
            ],
            "statistics": {
                "Commit": 0,
                "Accepted": 0,
                "In Queue": 0,
                "Processing": 0,
                "Wrong Answer": 0,
                "Runtime Error": 0,
                "Internal Error": 0,
                "Compilation Error": 0,
                "Exec Format Error": 0,
                "Time Limit Exceeded": 0
            },
            "done": -1
        },
        ...
    ],
    "announcement": []
}
```

:::

::: info 参加比赛练习 - IsAuthenticated

`/api/train/training/verify/` `POST`

::: details 接口使用

使用带有 Training ID 和密码的请求即 `id` 和 `password` 来获取参赛权限。

```json
{
    "id": 1,
    "password": "123456"
}
```

成功返回 `200 OK` 。

```json
{
    "detail": "ok"
}
```

:::

::: info 比赛排名 - IsAuthenticated

`/api/train/rank/{training_id}/` `GET`

::: details 接口使用

获取该训练比赛的排名情况。

```text
GET http://127.0.0.1:8000/api/train/rank/1/
```

**Filter Parameter 支持参数**

| 参数                                       | 对应实体字段            | 排序字段                         |
| ------------------------------------------ | ----------------------- | -------------------------------- |
| statistics 字段中的 score                  | TrainingRank.statistics | statistics__score                |
| statistics 字段中的 statistics 下 Accepted | TrainingRank.statistics | statistics__statistics__Accepted |
| statistics 字段中的 statistics 下 Commit   | TrainingRank.statistics | statistics__statistics__Commit   |

成功返回 `200 OK` 。

```json
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "user": "root admin",
            "statistics": {
                "25": {
                    "0": true,
                    "1": true
                },
                "score": 200,
                "statistics": {
                    "Commit": 1,
                    "Accepted": 1,
                    "In Queue": 0,
                    "Processing": 0,
                    "Wrong Answer": 0,
                    "Runtime Error": 0,
                    "Internal Error": 0,
                    "Compilation Error": 0,
                    "Exec Format Error": 0,
                    "Time Limit Exceeded": 0
                }
            },
            "training": 1
        },
        ...
    ]
}
```

:::

::: info 比赛提交列表 - IsAuthenticated

`/api/train/sub/{training_id}/` `GET`

::: details 接口使用

获取该训练比赛的提交情况。

```text
GET http://127.0.0.1:8000/api/train/sub/1/
```

**Query Parameter 支持参数**

| 参数     | 查询方式 | 对应实体字段          |
| -------- | -------- | --------------------- |
| 创建者   | 模糊查询 | Submission.created_by |
| 问题题目 | 模糊查询 | Problem.title         |

**Filter Parameter 支持参数**

| 参数     | 对应实体字段            | 排序字段     |
| -------- | ----------------------- | ------------ |
| 提交时间 | Submission.created_time | created_time |

成功返回 `200 OK` 。

```json
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "created_by": "root admin",
            "language_id": 71,
            "status": "Accepted",
            "created_time": "2023-03-24T22:06:42.013440",
            "problem": {
                "id": 25,
                "title": "靶形数独"
            },
            "training": 1
        },
        ...
    ]
}
```

:::

#### 学习计划

::: info 学习计划列表 - IsAuthenticatedOrReadOnly

`/api/train/plan/` `GET`

::: details 接口使用

请求返回学习计划列表。

**Query Parameter 支持参数**

| 参数         | 查询方式 | 对应实体字段       |
| ------------ | -------- | ------------------ |
| 学习计划标题 | 模糊查询 | LearningPlan.title |

**Filter Parameter 支持参数**

| 参数     | 对应实体字段              | 排序字段     |
| -------- | ------------------------- | ------------ |
| 创建时间 | LearningPlan.created_time | created_time |

成功返回 `200 OK` 。

```json
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "title": "C语言学习",
            "description": "C语言学习，好好学习",
            "created_time": "2023-03-26T20:13:16.650457",
            "is_open": true,
            "ordering": [
                2,
                1
            ],
            "created_by": null,
            "stage": [
                {
                    "id": 1,
                    "title": "C循环",
                    "problems": [
                        {
                            "id": 1,
                            "title": "循环",
                            "difficulty": "Hard",
                            "tags": [
                                {
                                    "id": 2,
                                    "tag_name": "Test"
                                },
                                {
                                    "id": 1,
                                    "tag_name": "入门"
                                }
                            ],
                            "statistics": {
                                "Commit": 0,
                                "Accepted": 0,
                                "In Queue": 0,
                                "Processing": 0,
                                "Wrong Answer": 0,
                                "Runtime Error": 0,
                                "Internal Error": 0,
                                "Compilation Error": 0,
                                "Exec Format Error": 0,
                                "Time Limit Exceeded": 0
                            },
                            "done": -1
                        },
                        ...
                    ]
                },
                ...
            ]
        }
    ]
}
```

:::

::: info 学习计划详情 - IsAuthenticatedOrReadOnly

`/api/train/plan/{id}/` `GET`

::: details 接口使用

请求返回该学习计划详情。

```text
GET http://127.0.0.1:8000/api/train/plan/1/
```

成功返回 `200 OK` 。

```json
{
    "id": 1,
    "title": "C语言学习",
    "description": "C语言学习，好好学习",
    "created_time": "2023-03-26T20:13:16.650457",
    "is_open": true,
    "ordering": [
        2,
        1
    ],
    "created_by": null,
    "stage": [
        {
            "id": 1,
            "title": "C循环",
            "problems": [
                {
                    "id": 1,
                    "title": "循环",
                    "difficulty": "Hard",
                    "tags": [
                        {
                            "id": 2,
                            "tag_name": "Test"
                        },
                        {
                            "id": 1,
                            "tag_name": "入门"
                        }
                    ],
                    "statistics": {
                        "Commit": 0,
                        "Accepted": 0,
                        "In Queue": 0,
                        "Processing": 0,
                        "Wrong Answer": 0,
                        "Runtime Error": 0,
                        "Internal Error": 0,
                        "Compilation Error": 0,
                        "Exec Format Error": 0,
                        "Time Limit Exceeded": 0
                    },
                    "done": -1
                },
                ...
            ]
        },
        ...
    ]
}
```

:::

### Submission

::: info 支持语言列表 - AllowAny

`/api/sub/language/` `GET`

::: details 接口使用

请求返回 OnlineJudge 所支持的提交语言。

成功返回 `200 OK` 。

```json
{
    // "language_id": "language_name"
    "45": "Assembly (NASM 2.14.02)",
    "46": "Bash (5.0.0)",
    "47": "Basic (FBC 1.07.1)",
    "75": "C (Clang 7.0.1)",
    "76": "C++ (Clang 7.0.1)",
    "48": "C (GCC 7.4.0)",
    "52": "C++ (GCC 7.4.0)",
    "49": "C (GCC 8.3.0)",
    "53": "C++ (GCC 8.3.0)",
    "50": "C (GCC 9.2.0)",
    "54": "C++ (GCC 9.2.0)",
    "86": "Clojure (1.10.1)",
    "51": "C# (Mono 6.6.0.161)",
    "77": "COBOL (GnuCOBOL 2.2)",
    "55": "Common Lisp (SBCL 2.0.0)",
    "56": "D (DMD 2.089.1)",
    "57": "Elixir (1.9.4)",
    "58": "Erlang (OTP 22.2)",
    "44": "Executable",
    "87": "F# (.NET Core SDK 3.1.202)",
    "59": "Fortran (GFortran 9.2.0)",
    "60": "Go (1.13.5)",
    "88": "Groovy (3.0.3)",
    "61": "Haskell (GHC 8.8.1)",
    "62": "Java (OpenJDK 13.0.1)",
    "63": "JavaScript (Node.js 12.14.0)",
    "78": "Kotlin (1.3.70)",
    "64": "Lua (5.3.5)",
    "89": "Multi-file program",
    "79": "Objective-C (Clang 7.0.1)",
    "65": "OCaml (4.09.0)",
    "66": "Octave (5.1.0)",
    "67": "Pascal (FPC 3.0.4)",
    "85": "Perl (5.28.1)",
    "68": "PHP (7.4.1)",
    "43": "Plain Text",
    "69": "Prolog (GNU Prolog 1.4.5)",
    "70": "Python (2.7.17)",
    "71": "Python (3.8.1)",
    "80": "R (4.0.0)",
    "72": "Ruby (2.7.0)",
    "73": "Rust (1.40.0)",
    "81": "Scala (2.13.2)",
    "82": "SQL (SQLite 3.27.2)",
    "83": "Swift (5.2.3)",
    "74": "TypeScript (3.7.4)",
    "84": "Visual Basic.Net (vbnc 0.0.0.5943)"
}
```

:::

::: info 创建提交 - IsAuthenticatedOrReadOnly

`/api/sub/submission/` `POST`

::: details 接口使用

通过以下请求数据来创建提交。

```json
{
    "problem": 25,
    "code": "while True:\n    try:\n        A = list(map(int, input().split(\" \")))\n        print(sum(A))\n    except:\n        break",
    "language_id": 71,
    "training": 1, // 如提交此字段，则为训练比赛提交，值为 Training 的 `id` ，非必填。
}
```

成功返回 `201 Created` 。

```json
{
    "id": 2,
    "created_by": "root admin",
    "token": [],
    "code": "while True:\n    try:\n        A = list(map(int, input().split(\" \")))\n        print(sum(A))\n    except:\n        break",
    "language_id": 71,
    "status": "In Queue",
    "created_time": "2023-03-27T22:06:21.736644",
    "submit_ip": "39.154.0.251",
    "problem": {
        "id": 25,
        "title": "靶形数独"
    },
    "training": null
}
```

:::

::: info 提交列表 - IsAuthenticatedOrReadOnly

`/api/sub/submission/` `GET`

::: details 接口使用

请求返回不属于任何训练比赛的提交列表。

**Query Parameter 支持参数**

| 参数                | 查询方式 | 对应实体字段  |
| ------------------- | -------- | ------------- |
| 提交者的 `username` | 模糊查询 | User.username |
| 题目标题            | 模糊查询 | Problem.title |

**Filter Parameter 支持参数**

| 参数     | 对应实体字段            | 排序字段     |
| -------- | ----------------------- | ------------ |
| 提交时间 | Submission.created_time | created_time |

成功返回 `200 OK` 。

```json
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 2,
            "created_by": "root admin",
            "language_id": 71,
            "status": "Accepted",
            "created_time": "2023-03-27T22:06:21.736644",
            "problem": {
                "id": 25,
                "title": "靶形数独"
            },
            "training": null
        },
        ...
    ]
}
```

:::

::: info 提交详情 - IsAuthenticatedOrReadOnly

`/api/sub/submission/{sub_id}/` `GET`

::: details 接口使用

请求返回不属于任何训练比赛的提交详情。

```text
GET http://127.0.0.1:8000/api/sub/submission/2/
```

成功返回 `200 OK` 。

```json
{
    "id": 2,
    "created_by": "root admin",
    "token": [
        "940254f7-58e9-4ae3-8cda-ed13b3a14ea3",
        "10ed2967-bc99-462a-b44d-600c7a311965"
    ],// 测试样例提交到 Judger 的 Token
    "code": "while True:\n    try:\n        A = list(map(int, input().split(\" \")))\n        print(sum(A))\n    except:\n        break",
    "language_id": 71,
    "status": "Accepted",
    "created_time": "2023-03-27T22:06:21.736644",
    "submit_ip": "39.154.0.251",
    "problem": {
        "id": 25,
        "title": "靶形数独"
    },
    "training": null
}
```

:::

### Announcement

::: info 公告列表 - AllowAny

`/api/ann/` `GET`

::: details 接口使用

请求返回不属于任何训练比赛的公告列表。

**Query Parameter 支持参数**

| 参数     | 查询方式 | 对应实体字段         |
| -------- | -------- | -------------------- |
| 公告标题 | 模糊查询 | Announcement.title   |
| 公告内容 | 模糊查询 | Announcement.content |

**Filter Parameter 支持参数**

| 参数         | 对应实体字段              | 排序字段     |
| ------------ | ------------------------- | ------------ |
| 公告创建时间 | Announcement.created_time | created_time |

成功返回 `200 OK` 。

```json
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 2,
            "title": "比赛测试公告",
            "content": "比赛测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告",
            "created_time": "2023-03-26T19:43:22.762877",
            "last_update_time": "2023-03-26T19:43:22.762891",
            "training": null,
            "created_by": "10010110"
        },
        ...
    ]
}
```

:::

::: info 公告详情 - IsAuthenticated

`/api/ann/{id}/` `GET`

::: details 接口使用

请求返回不属于任何训练比赛的公告详情。

```text
GET http://127.0.0.1:8000/api/ann/2/
```

成功返回 `200 OK` 。

```json
{
    "id": 2,
    "title": "比赛测试公告",
    "content": "比赛测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告",
    "created_time": "2023-03-26T19:43:22.762877",
    "last_update_time": "2023-03-26T19:43:22.762891",
    "training": null,
    "created_by": "10010110"
}
```

:::

## 后台接口

### Organization

#### 用户

::: info 添加用户 - IsSuperAdmin

`/api/org/admin/user/` `POST`

::: details 接口使用

通过以下请求数据来添加用户。

```json
{
    "username": "12345678",
    "password": "12345678",
    "nickname": "Pose站抽",
    "email": "example@example.cn",
    "user_role": "STU",
    "user_permission": "NONE",
    "is_staff": false,
    "is_active": true,
    "is_superuser": false,
    "first_name": "四",
    "last_name": "马",
    "real_name": "马四",
    "profile": {
        "group": "test",
        "bio": "在卡西餐"
    }
}
```

成功返回 `201 Created` 。

```json
{
    "username": "12345678",
    "profile": {
        "group": {
            "id": 2,
            "name": "test"
        },
        "statistics": {
            "Commit": 0,
            "In Queue": 0,
            "Processing": 0,
            "Accepted": 0,
            "Wrong Answer": 0,
            "Time Limit Exceeded": 0,
            "Compilation Error": 0,
            "Runtime Error": 0,
            "Internal Error": 0,
            "Exec Format Error": 0
        },
        "avatar": "http://127.0.0.1:8000/media/avatar/default.jpg",
        "bio": "在卡西餐"
    },
    "last_login": null,
    "nickname": "Pose站抽",
    "is_staff": false,
    "is_active": true,
    "is_superuser": false,
    "real_name": "马四",
    "email": "example@example.cn",
    "user_role": "STU",
    "user_permission": "NONE",
    "date_joined": "2023-03-28T21:27:59.820464",
    "last_login_ip": null
}
```

:::

::: info 用户列表 - IsSuperAdmin

`/api/org/admin/user/` `GET`

::: details 接口使用

请求返回用户列表。

**Query Parameter 支持参数**

| 参数         | 查询方式 | 对应实体字段      |
| ------------ | -------- | ----------------- |
| 用户名       | 模糊查询 | User.username     |
| 昵称         | 模糊查询 | User.nickname     |
| 电子邮件     | 模糊查询 | User.email        |
| 用户角色     | 模糊查询 | User.user_role    |
| 是否工作人员 | 模糊查询 | User.is_staff     |
| 是否超管     | 模糊查询 | User.is_superuser |

**Filter Parameter 支持参数**

| 参数     | 对应实体字段      | 排序字段    |
| -------- | ----------------- | ----------- |
| 用户名   | User.username     | username    |
| 创建日期 | User.created_time | date_joined |

成功返回 `200 OK` 。

```json
{
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "username": "10010110",
            "nickname": "",
            "email": "admin@moorlands.cn",
            "user_role": "TEC",
            "is_staff": true,
            "is_superuser": true,
            "profile": {
                "group": {
                    "id": 1,
                    "name": "管理组"
                },
                "avatar": "http://127.0.0.1:8000/media/avatar/default.jpg"
            }
        },
        ...
    ]
}
```

:::

::: info 用户详情 - IsSuperAdmin

`/api/org/admin/user/{username}/` `GET`

::: details 接口使用

请求返回用户详情。

```text
GET http://127.0.0.1:8000/api/org/admin/user/10010110/
```

成功返回 `200 OK` 。

```json
{
    "username": "10010110",
    "profile": {
        "group": {
            "id": 1,
            "name": "管理组"
        },
        "statistics": {
            "Commit": 2,
            "Accepted": 1,
            "In Queue": 0,
            "Processing": 0,
            "Wrong Answer": 0,
            "Runtime Error": 0,
            "Internal Error": 0,
            "Compilation Error": 0,
            "Exec Format Error": 0,
            "Time Limit Exceeded": 0
        },
        "avatar": "http://127.0.0.1:8000/media/avatar/default.jpg",
        "bio": null
    },
    "last_login": "2023-03-27T22:06:19.280161",
    "nickname": "",
    "is_staff": true,
    "is_active": true,
    "is_superuser": true,
    "real_name": "root admin",
    "email": "admin@moorlands.cn",
    "user_role": "TEC",
    "user_permission": "ALL",
    "date_joined": "2023-03-05T16:49:23.074555",
    "last_login_ip": "39.154.0.251"
}
```

:::

::: info 修改用户 - IsSuperAdmin

`/api/org/admin/user/{username}/` `PUT`

::: details 接口使用

使用 `username` 来修改用户信息。

```text
PUT http://127.0.0.1:8000/api/org/admin/user/12345678/
```

```json
{
    "username": "12345678",
    "password": "123456789",
    "profile": {
        "group": "test",
        "bio": "指南资讯"
    },
    "nickname": "最新跟单",
    "is_staff": false,
    "is_active": true,
    "is_superuser": false,
    "first_name": "五",
    "last_name": "王",
    "real_name": "王五",
    "email": "examples@example.cn",
    "user_role": "STU",
    "user_permission": "NONE"
}
```

成功返回 `200 OK` 。

```json
{
    "username": "12345678",
    "profile": {
        "group": {
            "id": 2,
            "name": "test"
        },
        "statistics": {
            "Commit": 0,
            "Accepted": 0,
            "In Queue": 0,
            "Processing": 0,
            "Wrong Answer": 0,
            "Runtime Error": 0,
            "Internal Error": 0,
            "Compilation Error": 0,
            "Exec Format Error": 0,
            "Time Limit Exceeded": 0
        },
        "avatar": "http://127.0.0.1:8000/media/avatar/default.jpg",
        "bio": "指南资讯"
    },
    "last_login": null,
    "nickname": "最新跟单",
    "is_staff": false,
    "is_active": true,
    "is_superuser": false,
    "real_name": "王五",
    "email": "examples@example.cn",
    "user_role": "STU",
    "user_permission": "NONE",
    "date_joined": "2023-03-28T21:27:59.820464",
    "last_login_ip": null
}
```

:::

::: info 修改用户 - IsSuperAdmin

`/api/org/admin/user/{username}/` `PATCH`

::: details 接口使用

使用 `username` 来部分修改用户信息。

```text
PATCH http://127.0.0.1:8000/api/org/admin/user/12345678/
```

```json
{
    "password": "test1234321"
}
```

成功返回 `200 OK` 。

```json
{
    "username": "12345678",
    "profile": {
        "group": {
            "id": 2,
            "name": "test"
        },
        "statistics": {
            "Commit": 0,
            "Accepted": 0,
            "In Queue": 0,
            "Processing": 0,
            "Wrong Answer": 0,
            "Runtime Error": 0,
            "Internal Error": 0,
            "Compilation Error": 0,
            "Exec Format Error": 0,
            "Time Limit Exceeded": 0
        },
        "avatar": "http://127.0.0.1:8000/media/avatar/default.jpg",
        "bio": "指南资讯"
    },
    "last_login": "2023-03-28T21:47:06.693061",
    "nickname": "最新跟单",
    "is_staff": false,
    "is_active": true,
    "is_superuser": false,
    "real_name": "王五",
    "email": "examples@example.cn",
    "user_role": "STU",
    "user_permission": "NONE",
    "date_joined": "2023-03-28T21:27:59.820464",
    "last_login_ip": "220.195.74.195"
}
```

:::

::: info 删除用户 - IsSuperAdmin

`/api/org/admin/user/{username}/` `DELETE`

::: details 接口使用

请求来删除用户。

```text
DELETE http://127.0.0.1:8000/api/org/admin/user/12345678/
```

成功返回 `204 No Content` 。

:::

::: info 批量添加用户 - IsSuperAdmin

`/api/org/admin/userbatch/` `POST`

::: details 接口使用

通过以下请求数据来批量添加用户。

```json
{
    "prefix": "v12",
    "suffix": "q",
    "user_num": 10,
    "group": "BatchUser", // 不用提前创建
    "output_file": true // 为 true 则返回 CSV 文件，反之返回 json 数据
}
```

成功返回返回 CSV 文件或返回 json 数据。

```json
{
    "detail": {
        "v12_PIq9AOt_q": "n6GU1dxJSLJ3WxMo",
        "v12_H3k7tMa_q": "RiwCurPsWJAEw1f8",
        "v12_mGWf9Fd_q": "PifZySateUJelUb9",
        "v12_75UnkUw_q": "tvTaQ0TeEcxIZvFh",
        "v12_lqem1BD_q": "YuaFTcvkBzmHBR78",
        "v12_KZaUhZq_q": "EOnaQtgWUkDROt7m",
        "v12_Jw2K3qq_q": "M4TCUgt89QZkYMHC",
        "v12_EOiOYSk_q": "HB8nkkwGmCLcOil3",
        "v12_AU7zqdu_q": "ZIKPK6v4IEI48p1p",
        "v12_Ir3Eq2R_q": "gW6Tc7McXVXHCRrN"
    }
}
```

:::

#### 组（班级）

::: info 创建组（班级） - IsSuperAdmin

`/api/org/admin/group/` `POST`

::: details 接口使用

通过以下请求数据来创建组（班级）。

```json
{
    "name": "test"
}
```

成功返回 `201 Created` 。

```json
{
    "id": 2,
    "users": [],
    "name": "test"
}
```

:::

::: info 组（班级）列表 - IsSuperAdmin

`/api/org/admin/group/` `GET`

::: details 接口使用

请求返回组（班级）列表。

**Query Parameter 支持参数**

| 参数           | 查询方式 | 对应实体字段  |
| -------------- | -------- | ------------- |
| 组（班级）名称 | 模糊查询 | Group.name    |
| 用户名         | 模糊查询 | User.username |

成功返回 `200 OK` 。

```json
{
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        ...
        {
            "id": 3,
            "users": [
                {
                    "user": "v12_PIq9AOt_q",
                    "avatar": "http://127.0.0.1:8000/media/avatar/default.jpg"
                },
                ...
            ],
            "name": "BatchUser"
        },
        ...
    ]
}
```

:::

::: info 组（班级）详情 - IsSuperAdmin

`/api/org/admin/group/{id}/` `GET`

::: details 接口使用

请求返回组（班级）详情。

```text
GET http://127.0.0.1:8000/api/org/admin/group/3/
```

成功返回 `200 OK` 。

```json
{
    "id": 3,
    "users": [
        {
            "user": "v12_PIq9AOt_q",
            "avatar": "http://127.0.0.1:8000/media/avatar/default.jpg"
        },
        ...
    ],
    "name": "BatchUser"
}
```

:::

::: info 修改组（班级） - IsSuperAdmin

`/api/org/admin/group/{id}/` `PUT`

::: details 接口使用

使用 Group 的 `id` 来修改组（班级）信息。

```text
PUT http://127.0.0.1:8000/api/org/admin/group/3/
```

```json
{
    "name": "批量产生"
}
```

成功返回 `200 OK` 。

```json
{
    "id": 3,
    "users": [
        {
            "user": "v12_PIq9AOt_q",
            "avatar": "http://127.0.0.1:8000/media/avatar/default.jpg"
        },
        ...
    ],
    "name": "批量产生"
}
```

:::

::: info 删除组（班级） - IsSuperAdmin

`/api/org/admin/group/{id}/` `DELETE`

::: details 接口使用

请求来删除组（班级）。

```text
DELETE http://127.0.0.1:8000/api/org/admin/group/3/
```

成功返回 `204 No Content` 。

::: warning 删除的组（班级）下存在用户则无法删除。
:::

### Problem

#### 测试样例

::: info 上传测试样例 - IsStaff

`/api/prm/admin/test_case/` `POST`

::: details 接口使用

使用 `form-data` 按以下字段来上传测试样例。

| 字段名 | 样例参数 | 必填 | 说明         |
| ------ | -------- | ---- | ------------ |
| file   | FILE     | 是   | 测试样例文件 |

成功返回 `201 Created` 。

```json
{
    "id": 2,
    "file": "http://127.0.0.1:8000/media/test_case/add-example1_aL2SWau.zip",
    "created_time": "2023-03-29T21:58:58.072573",
    "struct": [
        {
            "input_name": "1.in",
            "output_name": "1.out"
        },
        {
            "input_name": "2.in",
            "output_name": "2.out"
        }
    ]
}
```

::: warning

请按以下目录结构打包测试样例，否则会验证错误，一个 `in` 对应一个 `out` 。

```text
add-example1
├── 1.in
├── 1.out
├── 2.in
└── 2.out
```

:::

::: info 测试样例列表 - IsStaff

`/api/prm/admin/test_case/` `GET`

::: details 接口使用

请求返回测试样例列表。

成功返回 `200 OK` 。

```json
{
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "file": "http://127.0.0.1:8000/media/test_case/add-example1.zip",
            "created_time": "2023-03-05T16:51:15.161915",
            "struct": [
                {
                    "input_name": "1.in",
                    "output_name": "1.out"
                },
                {
                    "input_name": "2.in",
                    "output_name": "2.out"
                }
            ]
        },
        ...
    ]
}
```

:::

::: info 删除测试样例 - IsStaff

`/api/prm/admin/test_case/{id}/` `DELETE`

::: details 接口使用

请求来删除测试样例。

```text
DELETE http://127.0.0.1:8000/api/prm/admin/test_case/2/
```

成功返回 `204 No Content` 。

::: warning 删除的测试样例有被题目所引用则无法删除。
:::

#### 题目标签

::: info 添加题目标签 - IsStaff

`/api/prm/admin/tag/` `POST`

::: details 接口使用

通过以下请求数据来添加题目标签。

```json
{
    "tag_name": "入门"
}
```

成功返回 `201 Created` 。

```json
{
    "id": 1,
    "tag_name": "入门"
}
```

:::

::: info 题目标签列表 - IsStaff

`/api/prm/admin/tag/` `GET`

::: details 接口使用

请求返回题目标签列表。

成功返回 `200 OK` ，默认按照 `tag_name` 排序。

```json
[
    {
        "id": 2,
        "tag_name": "Test"
    },
    {
        "id": 3,
        "tag_name": "Tt"
    },
    {
        "id": 1,
        "tag_name": "入门"
    }
]
```

:::

::: info 题目标签详情 - IsStaff

`/api/prm/admin/tag/{id}/` `GET`

::: details 接口使用

请求返回题目标签详情。

```text
GET http://127.0.0.1:8000/api/prm/admin/tag/1/
```

成功返回 `200 OK` 。

```json
{
    "id": 1,
    "tag_name": "入门"
}
```

:::

::: info 修改题目标签 - IsStaff

`/api/prm/admin/tag/{id}/` `PUT`

::: details 接口使用

使用 ProblemTag 的 `id` 来修改题目标签。

```text
PUT http://127.0.0.1:8000/api/prm/admin/tag/3/
```

```json
{
    "tag_name": "balabala"
}
```

成功返回 `200 OK` 。

```json
{
    "id": 3,
    "tag_name": "balabala"
}
```

:::

::: info 删除题目标签 - IsStaff

`/api/prm/admin/tag/{id}/` `DELETE`

::: details 接口使用

请求来删除题目标签。

```text
DELETE http://127.0.0.1:8000/api/prm/admin/tag/3/
```

成功返回 `204 No Content` 。

:::

#### 题目

::: info 添加题目 - IsStaff

`/api/prm/admin/problem/` `POST`

::: details 接口使用

通过以下请求数据来添加题目。

```json
{
    "title": "求A+B的和",
    "desc": "入门题目，给定a和b，求a+b的值",
    "input_desc": "a为整数，b为整数",
    "output_desc": "输出a+b的值",
    "sample": [
        {"input": "1 2\n3 4\n", "output": "3\n7\n"}, 
        {"input": "0 2\n-1 4\n", "output": "2\n3\n"}
    ],
    "hint": "……",
    "languages": [50, 54, 60, 62, 71],
    "template": {
        "62": "//PREPEND BEGIN\nimport java.util.Scanner;\n//PREPEND END\n\n//TEMPLATE BEGIN\nclass Solution {\n    public int add(int a, int b) {\n        return _________;\n    }\n}\n//TEMPLATE END\n\n//APPEND BEGIN\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        Solution solution = new Solution();\n        while (scanner.hasNext()) {\n            System.out.println(solution.add(scanner.nextInt(), scanner.nextInt()));\n        }\n    }\n}\n//APPEND END"
    },
    "time_limit": 4096,
    "memory_limit": 48,
    "difficulty": "Easy",
    "mode": "OI",
    "is_public": true,
    "tags": [3, 2],
    "source": "YeeOnlineJudge",
    "visible": true,
    "test_case": 1,
    "point": [
        {
            "input_name": "1.in",
            "output_name": "1.out",
            "point": "100"
        },
        {
            "input_name": "2.in",
            "output_name": "2.out",
            "point": "100"
        }
    ]
}
```

成功返回 `201 Created` 。

```json
{
    "id": 50,
    "tags": [
        {
            "id": 2,
            "tag_name": "Test"
        },
        {
            "id": 3,
            "tag_name": "balabala"
        }
    ],
    "title": "求A+B的和",
    "desc": "入门题目，给定a和b，求a+b的值",
    "input_desc": "a为整数，b为整数",
    "output_desc": "输出a+b的值",
    "sample": [
        {
            "input": "1 2\n3 4\n",
            "output": "3\n7\n"
        },
        {
            "input": "0 2\n-1 4\n",
            "output": "2\n3\n"
        }
    ],
    "template": {
        "62": "//PREPEND BEGIN\nimport java.util.Scanner;\n//PREPEND END\n\n//TEMPLATE BEGIN\nclass Solution {\n    public int add(int a, int b) {\n        return _________;\n    }\n}\n//TEMPLATE END\n\n//APPEND BEGIN\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        Solution solution = new Solution();\n        while (scanner.hasNext()) {\n            System.out.println(solution.add(scanner.nextInt(), scanner.nextInt()));\n        }\n    }\n}\n//APPEND END"
    },
    "hint": "……",
    "languages": [
        50,
        54,
        60,
        62,
        71
    ],
    "time_limit": 4096,
    "memory_limit": 48,
    "difficulty": "Easy",
    "mode": "ACM",
    "point": [
        {
            "input_name": "1.in",
            "output_name": "1.out",
            "point": "100"
        },
        {
            "input_name": "2.in",
            "output_name": "2.out",
            "point": "100"
        }
    ],
    "is_public": true,
    "source": "YeeOnlineJudge",
    "visible": true,
    "created_time": "2023-04-03T21:50:48.850798",
    "last_update_time": "2023-04-03T21:50:48.850813",
    "statistics": {
        "Commit": 0,
        "In Queue": 0,
        "Processing": 0,
        "Accepted": 0,
        "Wrong Answer": 0,
        "Time Limit Exceeded": 0,
        "Compilation Error": 0,
        "Runtime Error": 0,
        "Internal Error": 0,
        "Exec Format Error": 0
    },
    "test_case": 1,
    "created_by": "10010110"
}
```

:::

::: info 题目列表 - IsStaff

`/api/prm/admin/problem/` `GET`

::: details 接口使用

请求返回题目列表。

**Query Parameter 支持参数**

| 参数     | 查询方式 | 对应实体字段        |
| -------- | -------- | ------------------- |
| 难度     | 精确查询 | Problem.difficulty  |
| 题目标题 | 模糊查询 | Problem.title       |
| 题目标签 | 模糊查询 | ProblemTag.tag_name |

成功返回 `200 OK` 。

```json
{
    "count": 50,
    "next": "http://127.0.0.1:8000/api/prm/admin/problem/?page=2",
    "previous": null,
    "results": [
        ...
        {
            "id": 2,
            "title": "谁拿了最多奖学金",
            "difficulty": "Easy",
            "tags": [
                {
                    "id": 2,
                    "tag_name": "Test"
                },
                {
                    "id": 1,
                    "tag_name": "入门"
                }
            ],
            "statistics": {
                "Commit": 0,
                "Accepted": 0,
                "In Queue": 0,
                "Processing": 0,
                "Wrong Answer": 0,
                "Runtime Error": 0,
                "Internal Error": 0,
                "Compilation Error": 0,
                "Exec Format Error": 0,
                "Time Limit Exceeded": 0
            },
            "done": -1
        },
        ...
    ]
}
```

:::

::: info 题目列表(简洁) - IsStaff

`/api/prm/admin/problem/all/` `GET`

::: details 接口使用

请求返回题目列表的简洁信息。

成功返回 `200 OK` 。

```json
[
    ...
    {
        "id": 2,
        "title": "谁拿了最多奖学金"
    },
    ...
]
```

:::

::: info 题目详情 - IsStaff

`/api/prm/admin/problem/{id}/` `GET`

::: details 接口使用

请求返回题目详情。

```text
GET http://127.0.0.1:8000/api/prm/admin/problem/1/
```

成功返回 `200 OK` 。

```json
{
    "id": 1,
    "tags": [
        {
            "id": 2,
            "tag_name": "Test"
        },
        {
            "id": 1,
            "tag_name": "入门"
        }
    ],
    "title": "循环",
    "desc": "乐乐是一个聪明而又勤奋好学的孩子。他总喜欢探求事物的规律。一天，他突然对数的正整数次幂产生了兴趣。\n\n\n众所周知，$2$ 的正整数次幂最后一位数总是不断的在重复 $2,4,8,6,2,4,8,6…$ 我们说 $2$ 的正整数次幂最后一位的循环长度是 $4$（实际上 $4$ 的倍数都可以说是循环长度，但我们只考虑最小的循环长度）。类似的，其余的数字的正整数次幂最后一位数也有类似的循环现象：\n\n$$\n\\def\\arraystretch{1.5}\n\\begin{array}{c|c|c}\\hline\n\\textbf{数字}& \\textbf{循环} & \\textbf{循环长度} \\cr\\hline\\hline\n2 & 2,4,8,6 & 4\\cr\\hline\n3 & 3,9,7,1 & 4\\cr\\hline\n4 & 4,6 & 2\\cr\\hline\n5 & 5 &  1\\cr\\hline\n6 & 6 & 1\\cr\\hline\n7 & 7,9,3,1 & 4\\cr\\hline\n8 & 8,4,2,6 & 4\\cr\\hline\n9 & 9,1 & 2\\cr\\hline\n\\end{array}\n$$\n\n这时乐乐的问题就出来了：是不是只有最后一位才有这样的循环呢？对于一个整数 $n$ 的正整数次幂来说，它的后k位是否会发生循环？如果循环的话，循环长度是多少呢？\n\n注意：\n\n1. 如果 $n$ 的某个正整数次幂的位数不足 $k$，那么不足的高位看做是 $0$。\n2. 如果循环长度是 $L$，那么说明对于任意的正整数 $a$，$n$ 的 $a$ 次幂和 $a+L$ 次幂的最后 $k$ 位都相同。\n",
    "input_desc": "共一行，包含 $2$ 个整数 $n$ 和 $k$。$n$ 和 $k$ 之间用一个空格隔开，表示要求 $n$ 的正整数次幂的最后 $k$ 位的循环长度。",
    "output_desc": "一个整数，表示循环长度。如果循环不存在，输出 $-1$。",
    "sample": [
        {
            "input": "32 2",
            "output": "4"
        }
    ],
    "template": {
        "50": "//PREPEND BEGIN\n#include <stdio.h>\n//PREPEND END\n\n//TEMPLATE BEGIN\nint add(int a, int b) {\n  // Please fill this blank\n  return ___________;\n}\n//TEMPLATE END\n\n//APPEND BEGIN\nint main() {\n  printf(\"%d\", add(1, 2));\n  return 0;\n}\n//APPEND END",
        "62": "//PREPEND BEGIN\nimport java.util.Scanner;\n//PREPEND END\n\n//TEMPLATE BEGIN\nclass Solution {\n    public int add(int a, int b) {\n        return _________;\n    }\n}\n//TEMPLATE END\n\n//APPEND BEGIN\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        Solution solution = new Solution();\n        while (scanner.hasNext()) {\n            System.out.println(solution.add(scanner.nextInt(), scanner.nextInt()));\n        }\n    }\n}\n//APPEND END"
    },
    "hint": "**【数据范围】**\n\n对于 $30 \\%$ 的数据，满足 $k \\le 4$；  \n对于$100 \\%$ 的数据，满足 $1 \\le n < {10}^{100}$，$1 \\le k \\le 100$。\n\n**【题目来源】**\n\nNOIP 2005 普及组第四题",
    "languages": [
        50,
        54,
        60,
        62,
        71
    ],
    "time_limit": 4096,
    "memory_limit": 48,
    "difficulty": "Hard",
    "mode": "ACM",
    "point": [
        {
            "point": "100",
            "input_name": "1.in",
            "output_name": "1.out"
        },
        {
            "point": "100",
            "input_name": "2.in",
            "output_name": "2.out"
        }
    ],
    "is_public": true,
    "source": "YeeOnlineJudge",
    "visible": true,
    "created_time": "2023-03-05T16:51:16.126009",
    "last_update_time": "2023-03-05T16:51:16.126024",
    "statistics": {
        "Commit": 0,
        "Accepted": 0,
        "In Queue": 0,
        "Processing": 0,
        "Wrong Answer": 0,
        "Runtime Error": 0,
        "Internal Error": 0,
        "Compilation Error": 0,
        "Exec Format Error": 0,
        "Time Limit Exceeded": 0
    },
    "test_case": 1,
    "created_by": "10010110"
}
```

:::

::: info 修改题目 - IsStaff

`/api/prm/admin/problem/{id}/` `PUT`

::: details 接口使用

使用 Problem 的 `id` 来修改题目。

```text
PUT http://127.0.0.1:8000/api/prm/admin/problem/50/
```

```json
{
    "id": "50",
    "tags": [1, 2],
    "title": "循环",
    "desc": "乐乐是一个聪明而又勤奋好学的孩子。他总喜欢探求事物的规律。一天，他突然对数的正整数次幂产生了兴趣。\n\n\n众所周知，$2$ 的正整数次幂最后一位数总是不断的在重复 $2,4,8,6,2,4,8,6…$ 我们说 $2$ 的正整数次幂最后一位的循环长度是 $4$（实际上 $4$ 的倍数都可以说是循环长度，但我们只考虑最小的循环长度）。类似的，其余的数字的正整数次幂最后一位数也有类似的循环现象：\n\n$$\n\\def\\arraystretch{1.5}\n\\begin{array}{c|c|c}\\hline\n\\textbf{数字}& \\textbf{循环} & \\textbf{循环长度} \\cr\\hline\\hline\n2 & 2,4,8,6 & 4\\cr\\hline\n3 & 3,9,7,1 & 4\\cr\\hline\n4 & 4,6 & 2\\cr\\hline\n5 & 5 &  1\\cr\\hline\n6 & 6 & 1\\cr\\hline\n7 & 7,9,3,1 & 4\\cr\\hline\n8 & 8,4,2,6 & 4\\cr\\hline\n9 & 9,1 & 2\\cr\\hline\n\\end{array}\n$$\n\n这时乐乐的问题就出来了：是不是只有最后一位才有这样的循环呢？对于一个整数 $n$ 的正整数次幂来说，它的后k位是否会发生循环？如果循环的话，循环长度是多少呢？\n\n注意：\n\n1. 如果 $n$ 的某个正整数次幂的位数不足 $k$，那么不足的高位看做是 $0$。\n2. 如果循环长度是 $L$，那么说明对于任意的正整数 $a$，$n$ 的 $a$ 次幂和 $a+L$ 次幂的最后 $k$ 位都相同。\n",
    "input_desc": "共一行，包含 $2$ 个整数 $n$ 和 $k$。$n$ 和 $k$ 之间用一个空格隔开，表示要求 $n$ 的正整数次幂的最后 $k$ 位的循环长度。",
    "output_desc": "一个整数，表示循环长度。如果循环不存在，输出 $-1$。",
    "sample": [
        {
            "input": "32 2",
            "output": "4"
        }
    ],
    "template": {
        "50": "……",
        "54": "……",
        "62": "……"
    },
    "hint": "**【数据范围】**\n\n对于 $30 \\%$ 的数据，满足 $k \\le 4$；  \n对于$100 \\%$ 的数据，满足 $1 \\le n < {10}^{100}$，$1 \\le k \\le 100$。\n\n**【题目来源】**\n\nNOIP 2005 普及组第四题",
    "languages": [
        50,
        54,
        60,
        62,
        71
    ],
    "time_limit": 4096,
    "memory_limit": 48,
    "difficulty": "Hard",
    "mode": "ACM",
    "point": [
        {
            "input_name": "1.in",
            "output_name": "1.out",
            "point": "100"
        },
        {
            "input_name": "2.in",
            "output_name": "2.out",
            "point": "100"
        }
    ],
    "is_public": true,
    "source": "YeeOnlineJudge",
    "visible": true,
    "test_case": 1
}
```

成功返回 `200 OK` 。

```json
{
    "id": 50,
    "tags": [
        {
            "id": 2,
            "tag_name": "Test"
        },
        {
            "id": 1,
            "tag_name": "入门"
        }
    ],
    "title": "循环",
    "desc": "乐乐是一个聪明而又勤奋好学的孩子。他总喜欢探求事物的规律。一天，他突然对数的正整数次幂产生了兴趣。\n\n\n众所周知，$2$ 的正整数次幂最后一位数总是不断的在重复 $2,4,8,6,2,4,8,6…$ 我们说 $2$ 的正整数次幂最后一位的循环长度是 $4$（实际上 $4$ 的倍数都可以说是循环长度，但我们只考虑最小的循环长度）。类似的，其余的数字的正整数次幂最后一位数也有类似的循环现象：\n\n$$\n\\def\\arraystretch{1.5}\n\\begin{array}{c|c|c}\\hline\n\\textbf{数字}& \\textbf{循环} & \\textbf{循环长度} \\cr\\hline\\hline\n2 & 2,4,8,6 & 4\\cr\\hline\n3 & 3,9,7,1 & 4\\cr\\hline\n4 & 4,6 & 2\\cr\\hline\n5 & 5 &  1\\cr\\hline\n6 & 6 & 1\\cr\\hline\n7 & 7,9,3,1 & 4\\cr\\hline\n8 & 8,4,2,6 & 4\\cr\\hline\n9 & 9,1 & 2\\cr\\hline\n\\end{array}\n$$\n\n这时乐乐的问题就出来了：是不是只有最后一位才有这样的循环呢？对于一个整数 $n$ 的正整数次幂来说，它的后k位是否会发生循环？如果循环的话，循环长度是多少呢？\n\n注意：\n\n1. 如果 $n$ 的某个正整数次幂的位数不足 $k$，那么不足的高位看做是 $0$。\n2. 如果循环长度是 $L$，那么说明对于任意的正整数 $a$，$n$ 的 $a$ 次幂和 $a+L$ 次幂的最后 $k$ 位都相同。\n",
    "input_desc": "共一行，包含 $2$ 个整数 $n$ 和 $k$。$n$ 和 $k$ 之间用一个空格隔开，表示要求 $n$ 的正整数次幂的最后 $k$ 位的循环长度。",
    "output_desc": "一个整数，表示循环长度。如果循环不存在，输出 $-1$。",
    "sample": [
        {
            "input": "32 2",
            "output": "4"
        }
    ],
    "template": {
        "50": "……",
        "54": "……",
        "62": "……"
    },
    "hint": "**【数据范围】**\n\n对于 $30 \\%$ 的数据，满足 $k \\le 4$；  \n对于$100 \\%$ 的数据，满足 $1 \\le n < {10}^{100}$，$1 \\le k \\le 100$。\n\n**【题目来源】**\n\nNOIP 2005 普及组第四题",
    "languages": [
        50,
        54,
        60,
        62,
        71
    ],
    "time_limit": 4096,
    "memory_limit": 48,
    "difficulty": "Hard",
    "mode": "ACM",
    "point": [
        {
            "input_name": "1.in",
            "output_name": "1.out",
            "point": "100"
        },
        {
            "input_name": "2.in",
            "output_name": "2.out",
            "point": "100"
        }
    ],
    "is_public": true,
    "source": "YeeOnlineJudge",
    "visible": true,
    "created_time": "2023-04-03T21:50:48.850798",
    "last_update_time": "2023-04-03T22:20:57.642325",
    "statistics": {
        "Commit": 0,
        "Accepted": 0,
        "In Queue": 0,
        "Processing": 0,
        "Wrong Answer": 0,
        "Runtime Error": 0,
        "Internal Error": 0,
        "Compilation Error": 0,
        "Exec Format Error": 0,
        "Time Limit Exceeded": 0
    },
    "test_case": 1,
    "created_by": "10010110"
}
```

:::

::: info 修改题目 - IsStaff

`/api/prm/admin/problem/{id}/` `PATCH`

::: details 接口使用

使用 Problem 的 `id` 来修改题目。

```text
PATCH http://127.0.0.1:8000/api/prm/admin/problem/50/
```

```json
{
    "mode": "OI",
    "point": [
        {
            "input_name": "1.in",
            "output_name": "1.out",
            "point": "50"
        },
        {
            "input_name": "2.in",
            "output_name": "2.out",
            "point": "50"
        }
    ]
}
```

成功返回 `200 OK` 。

```json
{
    "id": 50,
    "tags": [
        {
            "id": 2,
            "tag_name": "Test"
        },
        {
            "id": 1,
            "tag_name": "入门"
        }
    ],
    "title": "循环",
    "desc": "乐乐是一个聪明而又勤奋好学的孩子。他总喜欢探求事物的规律。一天，他突然对数的正整数次幂产生了兴趣。\n\n\n众所周知，$2$ 的正整数次幂最后一位数总是不断的在重复 $2,4,8,6,2,4,8,6…$ 我们说 $2$ 的正整数次幂最后一位的循环长度是 $4$（实际上 $4$ 的倍数都可以说是循环长度，但我们只考虑最小的循环长度）。类似的，其余的数字的正整数次幂最后一位数也有类似的循环现象：\n\n$$\n\\def\\arraystretch{1.5}\n\\begin{array}{c|c|c}\\hline\n\\textbf{数字}& \\textbf{循环} & \\textbf{循环长度} \\cr\\hline\\hline\n2 & 2,4,8,6 & 4\\cr\\hline\n3 & 3,9,7,1 & 4\\cr\\hline\n4 & 4,6 & 2\\cr\\hline\n5 & 5 &  1\\cr\\hline\n6 & 6 & 1\\cr\\hline\n7 & 7,9,3,1 & 4\\cr\\hline\n8 & 8,4,2,6 & 4\\cr\\hline\n9 & 9,1 & 2\\cr\\hline\n\\end{array}\n$$\n\n这时乐乐的问题就出来了：是不是只有最后一位才有这样的循环呢？对于一个整数 $n$ 的正整数次幂来说，它的后k位是否会发生循环？如果循环的话，循环长度是多少呢？\n\n注意：\n\n1. 如果 $n$ 的某个正整数次幂的位数不足 $k$，那么不足的高位看做是 $0$。\n2. 如果循环长度是 $L$，那么说明对于任意的正整数 $a$，$n$ 的 $a$ 次幂和 $a+L$ 次幂的最后 $k$ 位都相同。\n",
    "input_desc": "共一行，包含 $2$ 个整数 $n$ 和 $k$。$n$ 和 $k$ 之间用一个空格隔开，表示要求 $n$ 的正整数次幂的最后 $k$ 位的循环长度。",
    "output_desc": "一个整数，表示循环长度。如果循环不存在，输出 $-1$。",
    "sample": [
        {
            "input": "32 2",
            "output": "4"
        }
    ],
    "template": {
        "50": "……",
        "54": "……",
        "62": "……"
    },
    "hint": "**【数据范围】**\n\n对于 $30 \\%$ 的数据，满足 $k \\le 4$；  \n对于$100 \\%$ 的数据，满足 $1 \\le n < {10}^{100}$，$1 \\le k \\le 100$。\n\n**【题目来源】**\n\nNOIP 2005 普及组第四题",
    "languages": [
        50,
        54,
        60,
        62,
        71
    ],
    "time_limit": 4096,
    "memory_limit": 48,
    "difficulty": "Hard",
    "mode": "OI",
    "point": [
        {
            "input_name": "1.in",
            "output_name": "1.out",
            "point": "50"
        },
        {
            "input_name": "2.in",
            "output_name": "2.out",
            "point": "50"
        }
    ],
    "is_public": true,
    "source": "YeeOnlineJudge",
    "visible": true,
    "created_time": "2023-04-03T21:50:48.850798",
    "last_update_time": "2023-04-03T22:38:59.827720",
    "statistics": {
        "Commit": 0,
        "Accepted": 0,
        "In Queue": 0,
        "Processing": 0,
        "Wrong Answer": 0,
        "Runtime Error": 0,
        "Internal Error": 0,
        "Compilation Error": 0,
        "Exec Format Error": 0,
        "Time Limit Exceeded": 0
    },
    "test_case": 1,
    "created_by": "10010110"
}
```

:::

::: info 删除题目 - IsStaff

`/api/prm/admin/problem/{id}/` `DELETE`

::: details 接口使用

请求来删除题目。

```text
DELETE http://127.0.0.1:8000/api/prm/admin/problem/50/
```

成功返回 `204 No Content` 。

:::

### Training

#### 题集

::: info 创建题集 - IsStaff

`/api/train/admin/problem_set/` `POST`

::: details 接口使用

通过以下请求数据来创建题集。

```json
{
    "title": "C循环",
    "problems": [1, 2, 3] // 题目 ID，需要为空时使用 [] 代替
}
```

成功返回 `201 Created` 。

```json
{
    "id": 1,
    "title": "C循环",
    "problems": [
        {
            "id": 1,
            "title": "循环",
            "difficulty": "Hard",
            "tags": [
                {
                    "id": 2,
                    "tag_name": "Test"
                },
                {
                    "id": 1,
                    "tag_name": "入门"
                }
            ],
            "statistics": {
                "Commit": 0,
                "Accepted": 0,
                "In Queue": 0,
                "Processing": 0,
                "Wrong Answer": 0,
                "Runtime Error": 0,
                "Internal Error": 0,
                "Compilation Error": 0,
                "Exec Format Error": 0,
                "Time Limit Exceeded": 0
            },
            "done": -1
        },
        ...
    ]
}
```

:::

#### 比赛训练

#### 学习计划

::: info 创建学习计划 - IsStaff

`/api/train/admin/plan/` `POST`

::: details 接口使用

通过以下请求数据来创建学习计划。

```json
{
    "title": "C语言学习",
    "description": "C语言学习，好好学习",
    "is_open": true,
    "stage": [1, 2], // 题集 ID
    "ordering": [2, 1] // 题集顺序
}
```

成功返回 `201 Created` 。

```json
{
    "id": 1,
    "title": "C语言学习",
    "description": "C语言学习，好好学习",
    "created_time": "2023-03-26T20:13:16.650457",
    "is_open": true,
    "ordering": [
        2,
        1
    ],
    "created_by": null,
    "stage": [
        {
            "id": 1,
            "title": "C循环",
            "problems": [
                {
                    "id": 1,
                    "title": "循环",
                    "difficulty": "Hard",
                    "tags": [
                        {
                            "id": 2,
                            "tag_name": "Test"
                        },
                        {
                            "id": 1,
                            "tag_name": "入门"
                        }
                    ],
                    "statistics": {
                        "Commit": 0,
                        "Accepted": 0,
                        "In Queue": 0,
                        "Processing": 0,
                        "Wrong Answer": 0,
                        "Runtime Error": 0,
                        "Internal Error": 0,
                        "Compilation Error": 0,
                        "Exec Format Error": 0,
                        "Time Limit Exceeded": 0
                    },
                    "done": -1
                },
                ...
            ]
        },
        ...
    ]
}
```

:::

### Announcement

::: info 创建公告 - IsStaff

`/api/ann/admin/` `POST`

::: details 接口使用

通过以下请求数据来创建公告。

```json
{
    "title": "比赛测试公告",
    "content": "比赛测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告",
    "visible": true,
    "training": 1 // 归属于哪个训练比赛的公告，非必填
}
```

成功返回 `201 Created` 。

```json
{
    "id": 3,
    "title": "比赛测试公告",
    "content": "比赛测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告",
    "created_time": "2023-03-26T19:53:58.807143",
    "last_update_time": "2023-03-26T19:53:58.807158",
    "visible": true,
    "training": 1,
    "created_by": "10010110"
}
```

:::
