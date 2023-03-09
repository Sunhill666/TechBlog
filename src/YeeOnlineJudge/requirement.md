---
title: YeeOnlineJudge 项目需求文档
icon: repo
article: true
---

## 项目概述

### 文档简介

本文档主要描述YeeOnlineJudge的功能需求点及其结构流程信息，目的在于清晰地定义各模块的需求细节及逻辑流程

### 需求清单

#### C端部分

| 序号 | 需求名称           | 需求描述                       |
| :--- | :----------------- | :----------------------------- |
| 1    | 注册/登录          | 用户使用学号/工号进行登录/注册 |
| 2    | 用户管理           | 查看和修改个人信息和账号的设置 |
| 3    | 题目、练习和竞赛   | 题目、练习和竞赛的列表与详情   |
| 4    | 判题               | 对于提交的题目进行判题         |
| 5    | 支持提交的判题语言 | 包括不限于 C、C++和 Java       |
| 6    | 排名               | 全局排名                       |
| 7    | 判题状态           | 全局判题状态                   |
| 8    | 公告               | 公告列表与详情                 |

#### A端部分

| 序号 | 需求名称       | 需求描述                                             |
| :--- | :------------- | :--------------------------------------------------- |
| 1    | 用户管理       | 用户的增删改查以及权限角色设置                       |
| 2    | 批量导入用户   | 通过 CSV 导入用户                                    |
| 3    | 批量生成用户   | 自定义前后缀，开始、结束号码和密码长度来批量生成用户 |
| 4    | 公告管理       | 公告的增删改查                                       |
| 5    | 题目管理       | 题目的列表与增删改查以及导入导出                     |
| 6    | 测试用例的管理 | 测试用例的列表和删除                                 |
| 7    | 练习与比赛管理 | 练习与比赛的列表和增删改查                           |

### 功能列表

#### C端

| 功能模块     | 功能点              | 功能描述                                                                                                         |
| :----------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| 注册/登录    | 系统账号的注册/登录 | 用户在创建账号时只可以对自己的个人信息进行填写，不能填写权限信息，通过学号/工号进行注册，分为教师和学生两种角色  |
| 个人信息模块 | 个人信息修改        | 可对自己的名字、密码、邮箱等与系统安全无关的信息进行修改                                                         |
| ^^           | 题量信息统计        | 可查看个人题目提交量、正确量和正确题目列表                                                                       |
| 题目         | 题目信息            | 有题目列表、可以查看题目信息，包括题目描述、输入描述、输出描述、输入输出样例、题源、难易度、标签、时间和内存限制 |
| ^^           | 排名                | 对注册用户的答题正确量进行排名                                                                                   |
| ^^           | 题目信息统计        | 统计某一题目的提交量、正确量，以及它们与总量的百分比，还可以查看该题目的提交列表                                 |
| ^^           | 判题                | 可提交的语言包括不限于 C、C++、Java 和 Python，对于各种提交有状态描述、管理员可对提交进行重判                    |
| ^^           | 练习和比赛          | 要有一个概述摘要、公告、题目、提交信息、排名、详细信息（例：重判、AC时间等）和比赛限制                           |
| 公告         | 公告功能            | 公告列表与详情展示在首页                                                                                         |

#### A端

| 功能模块 | 功能点       | 功能描述                                         |
| :------- | :----------- | :----------------------------------------------- |
| 后台信息 | 后台信息罗列 | 对于用户数量、题目相关信息统计、和比赛的信息罗列 |
| 管理     | 用户管理     | 用户的增删改查，批量导入，批量生成，修改用户权限 |
| ^^       | 公告管理     | 公告的增删改查                                   |
| ^^       | 题目管理     | 题目的增删改查，批量导入导出                     |
| ^^       | 比赛练习管理 | 比赛练习的增删改查                               |

### 其他说明

列表在展示应具有分页、搜索和筛选功能

## 项目架构

### 功能流程

#### 总体流程图

@startuml
!theme materia-outline
start
:游客进入;
if (是否有账号？) then (是)
    while (忘记密码) is (是)
        :修改密码;
    endwhile (否)
else (否)
    if (随便逛逛) then (是)
        stop
    else (否)
        :注册;
    endif
endif
:登录;
switch(进入首页)
case(查看公告)
    :查看公告列表和详情;
case(做题)
    label sp_lab0
    label sp_lab1
    label lab
    :查看题目列表和题目详情;
    while (提交代码) is (错误)
        :修改代码;
    endwhile (提交正确)
case(参加竞赛或练习)
    if (参加权限) then (是)
        label sp_lab2
        goto lab
    else (否)
        :查看竞赛或练习列表和详情;
    endif
case(查看提交状态)
    :查看提交状态列表和详情;
case(查看排名)
    :查看排名列表;
endswitch
:退出;
stop
@enduml

### 信息结构

@startuml
!theme materia-outline
object Group{
    组名
}

package 用户 {
    object User {
        工号/学号
        密码
        昵称
        是否工作人员
        是否启用
        是否超级管理员
        真名
        电子邮件
        用户角色
        用户权限
        加入时间
        最后登陆时间
        最后登陆IP
    }

    object UserProfile {
        用户
        组
        题目数据
        头像
        格言
    }

    map UserRole {
        TEC => 老师
        STU => 学生
    }

    map Permission {
        NONE => 无权限
        SELF => 个人权限
        ALL => 所有权限
    }
}

package 题目 {
    object Problem {
        题目标题
        题目描述
        输入描述
        输出描述
        输入输出样例
        模版
        提示
        可提交的语言
        时间限制
        内存限制
        难度
        模式
        测试样例
        分数
        前台用户是否可见
        题目标签
        题源
        工作人员是否可见
        创建时间
        最后更新时间
        题目数据
        创建者
    }

    object ProblemTag {
        标签名称
    }

    object TestCase {
        测试样例文件
        创建日期
        测试样例结构
    }

    map Difficulty {
        Easy => 简单
        Medium => 中等
        Hard => 困难
    }
}

package 提交 {
    object Submission {
        提交题目
        每个测试样例提交到 Judge0 的 Token
        提交代码
        提交语言ID
        比赛或练习ID
        提交状态
        提交时间
        提交者
        提交IP
    }

    map Status {
        In Queue => 队列中
        Processing => 运行中
        Accepted => 正确
        Wrong Answer => 答案错误
        Time Limit Exceeded => 超时
        Compilation Error => 编译错误
        Runtime Error => 运行错误
        Internal Error => 内部错误
        Exec Format Error => 运行格式错误
    }
}

object ProblemSet {
    题集名称
    题集所包含题目
}

object TrainingBase {
    标题
    描述
    创建时间
    是否开启
    创建者
}

object Training {
    起始时间
    结束时间
    题目
    模式
    可参加的组
    可参加的用户
    密码
}

object LearningPlan {
    阶段
    顺序
}

object TrainingRank {
    用户
    比赛
    数据
}

object Announcement {
    标题
    内容
    创建时间
    最后更新日期
    比赛
    创建者
    是否可见
}

map Mode {
    OI => OI 模式
    ACM => ACM 模式
}

diamond 创建者
diamond 引用题目
diamond 引用比赛
diamond 模式

Group *-- 用户 : 1-n

User::用户角色 ..> UserRole
User::用户权限 ..> Permission
UserProfile::用户 --> User : 1-1

Problem::难度 ..> Difficulty
Problem::模式 ..> 模式
Problem::测试样例 --> TestCase : 1-n
Problem::题目标签 --> ProblemTag : n-n
Problem::创建者 --> 创建者

ProblemSet --> 引用题目 : n-n

TrainingBase::创建者 --> 创建者

Training --|> TrainingBase
Training --> 引用题目 : n-n
Training::模式 ..> 模式
Training::可参加的组 ..> Group
Training::可参加的用户 ..> 创建者

LearningPlan --|> TrainingBase
LearningPlan o-- ProblemSet : n-n

TrainingRank::用户 ..> 引用比赛
TrainingRank::比赛 ..> Training

Submission::提交题目 --> 引用题目
Submission::比赛或练习ID ..> 引用比赛
Submission::提交状态 ..> Status
提交 --> 创建者

Announcement::比赛 ..> 引用比赛
Announcement::创建者 --> 创建者

创建者 --> 用户
引用题目 --> 题目
引用比赛 --> Training
模式 --> Mode

@enduml

### 用例图

#### C端用户用例图

@startuml
!theme materia-outline
left to right direction
(查看题目列表) as TM
(查看练习或比赛列表) as LB
(查看排名列表) as PM
(查看个人信息) as GR
(查看提交状态) as TJ
:用户: as RU

(题目详细信息) as TMXS
(答题) as DT
(查看其他用户信息) as QTUS
(个人答题信息) as GRDT

RU --> TM
RU --> LB
RU --> PM
RU -up-> (查看公告)
RU --> GR
RU --> TJ

TM ..> TMXS : <<include>>
TM ..> DT : <<include>>

LB <.. (练习比赛或详细信息) : <<extend>>
LB ..> TMXS : <<include>>
LB ..> DT : <<include>>
PM ..> QTUS : <<include>>

GR <.. (修改个人信息) : <<extend>>
GR <.. (修改密码) : <<extend>>
GR <.. GRDT : <<extend>>
GRDT ..> TMXS : <<include>>

TJ ..> TMXS : <<include>>
TJ ..> QTUS : <<include>>
@enduml

#### A端用户用例图

@startuml
!theme materia-outline
left to right direction
:管理员: as AM
:超级管理员: as SA

(C端用户行为) as CD

(查看题目列表) as TM
(查看练习或比赛列表) as LB
(查看个人信息) as GR
(查看公告) as GG

CD <|-- AM
CD <|--SA

AM --> TM
SA --> TM
TM <.. (新增题目)  : <<extend>>
TM <.. (删除题目)  : <<extend>>
TM <.. (修改题目)  : <<extend>>
TM <.. (导入导出题目)  : <<extend>>

LB <-- AM
LB <-- SA
(修改练习或比赛) as BS
(新增练习或比赛) ..> LB : <<extend>>
(删除练习或比赛) ..> LB : <<extend>>
BS ..> LB : <<extend>>
(比赛公告增删改查) .> BS : <<extend>>

GR <-- SA
(（批量）新增用户) ..> GR : <<extend>>
(删除用户) ..> GR : <<extend>>
(修改用户) ..> GR : <<extend>>

SA --> GG
GG <.. (发布公告) : <<extend>>
GG <.. (删除公告) : <<extend>>
GG <.. (修改公告) : <<extend>>

@enduml
