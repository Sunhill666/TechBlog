---
title: YeeOnlineJudge 文档首页
icon: repo
article: false
---

**文档处于编写中**

# 项目介绍

本项目在设计之初参考和借鉴了 [QingdaoU/OnlineJudge](https://github.com/QingdaoU/OnlineJudge)，在此对前辈们表达深深敬意。

YeeOnlineJudge 的后端基于Django 4，配合PostgreSQL、Redis、Celery和Django REST Framework实现 Restful API。

## 功能

- [x] OnlineJudge的基本功能
- [x] 代码提交预览
- [x] 班级（组）的管理
- [x] 函数式题目与判题
- [ ] 博客功能
- [ ] ……

## 后端是如何工作的？

后端主要使用 Django 来完成主要业务逻辑，使用 Redis 和 Celery 完成异步任务，Django REST Framework 实现 RESTfulAPI。
