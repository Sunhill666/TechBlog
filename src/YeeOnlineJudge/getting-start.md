---
title: YeeOnlineJudge Getting Start
icon: guide
article: true
---

## 准备工作

安装 [Docker Engine](https://docs.docker.com/engine/install/) 或 [Docker Desktop](https://docs.docker.com/engine/install/)

## 部署判题机

1. 下载并解压判题机 Compose 文件

    ```shell
    wget https://github.com/judge0/judge0/releases/download/v1.13.0/judge0-v1.13.0.zip
    unzip judge0-v1.13.0.zip
    ```

2. 修改配置文件

    ```shell
    cd judge0-v1.13.0
    vim judge0.conf
    ```
    
    修改数据库和 Redis 配置

    ```text
    ################################################################################
    # Redis Configuration
    ################################################################################
    # Specify Redis host
    # Default: localhost
    REDIS_HOST=redis

    # Specify Redis port.
    # Default: 6379
    REDIS_PORT=

    # Specify Redis password. Cannot be blank.
    # Default: NO DEFAULT! MUST BE SET!
    REDIS_PASSWORD=<your-redis-password>

    ################################################################################
    # PostgreSQL Configuration
    ################################################################################
    # Specify Postgres host.
    # Default: localhost
    POSTGRES_HOST=db

    # Specify Postgres port.
    # Default: 5432
    POSTGRES_PORT=

    # Name of the database to use. Used only in production.
    # Default: postgres
    POSTGRES_DB=judge0

    # User who can access this database. Used only in production.
    # Default: postgres
    POSTGRES_USER=judge0

    # Password of the user. Cannot be blank. Used only in production.
    # Default: NO DEFAULT, YOU MUST SET YOUR PASSWORD
    POSTGRES_PASSWORD=<DB-password>
    ```

    （可选）修改认证授权配置

    ```text
    ################################################################################
    # Judge0 Authentication Configuration
    ################################################################################
    # You can protect your API with (AUTHN_HEADER, AUTHN_TOKEN) pair.
    # Each request then needs to have this pair either in headers or
    # query parameters. For example let AUTHN_HEADER=X-Judge0-Token and
    # AUTHN_TOKEN=mySecretToken. Then user should authenticate by sending this
    # in headers or query parameters in each request, e.g.:
    # https://api.judge0.com/system_info?X-Judge0-Token=mySecretToken

    # Specify authentication header name.
    # Default: X-Auth-Token
    AUTHN_HEADER=

    # Specify valid authentication tokens.
    # Default: empty - authentication is disabled
    AUTHN_TOKEN=


    ################################################################################
    # Judge0 Authorization Configuration
    ################################################################################
    # Protected API calls can be issued with (AUTHZ_HEADER, AUTHZ_TOKEN) pair.
    # To see exactly which API calls are protected with authorization tokens
    # please read the docs at https://api.judge0.com.
    # API authorization ensures that only specified users call protected API calls.
    # For example let AUTHZ_HEADER=X-Judge0-User and AUTHZ_TOKEN=mySecretToken.
    # Then user should authorize be sending this in headers or query parameters in
    # each request, e.g.: https://api.judge0.com/system_info?X-Judge0-User=mySecretToken
    # Note that if you enabled authentication, then user should also send valid
    # authentication token.

    # Specify authorization header name.
    # Default: X-Auth-User
    AUTHZ_HEADER=

    # Specify valid authorization tokens.
    # Default: empty - authorization is disabled, protected API calls cannot be issued
    AUTHZ_TOKEN=
    ```

    （可选）文档作为首页
    ```text
    # If true the documentation page will be used as a homepage, otherwise, the
    # homepage will be empty. You can always access the documentation page via /docs.
    # Default: false
    USE_DOCS_AS_HOMEPAGE=true
    ```

    其他可依据个人自行配置

3. 运行判题机服务并等待片刻使判题机初始化

    ```shell
    docker-compose up -d db redis
    sleep 10s
    docker-compose up -d
    sleep 5s
    ```

4. 运行成功后判题机默认监听 `http://<your-server-ip-address>:2358`，访问 `http://<your-server-ip-address>` 查看判题机文档

## Docker Compose 部署（推荐）

1. Clone 项目到本地

    ```shell
    git clone https://github.com/Sunhill666/YeeOnlineJudge.git
    cd ./YeeOnlineJudge
    ```

2. 配置环境变量

    ```text
    # yeeoj.conf
    AUTHN_HEADER=<judge0-AUTHN_HEADER>
    AUTHN_TOKEN=<judge0-AUTHN_TOKEN> # 无则移除
    AUTHZ_HEADER=<judge0-AUTHZ_HEADER>
    AUTHZ_TOKEN=<judge0-AUTHZ_TOKEN> # 无则移除
    CURRENT_ENV=prod
    JUDGE_HOST=<JUDGE_HOST> # 默认填判题机 `docker-compose.yml` 服务名称，即 `server`
    JUDGE_PORT=<JUDGE_PORT>
    JUDGE_SSL=true # 是否使用 https 与判题机通信
    POSTGRES_DB=<db-name>
    POSTGRES_HOST=<db-host>
    POSTGRES_PASSWORD=<db-password>
    POSTGRES_PORT=<db-port>
    POSTGRES_USER=<db-user>
    REDIS_HOST=<redis-host>
    REDIS_PORT=<redis-port>
    REDIS_PASSWORD=<redis-password>
    ```

    参考

    ```text
    AUTHN_HEADER=X-Auth-Token
    AUTHN_TOKEN=your-authn-token
    AUTHZ_HEADER=X-Auth-User
    AUTHZ_TOKEN=your-authz-token
    CURRENT_ENV=prod
    JUDGE_HOST=server
    JUDGE_PORT=2358
    JUDGE_SSL=false
    POSTGRES_DB=oj_db
    POSTGRES_HOST=oj_postgres
    POSTGRES_PASSWORD=your-db-password
    POSTGRES_PORT=5432
    POSTGRES_USER=your-db-user
    REDIS_HOST=oj_redis
    REDIS_PASSWORD=your-redis-password
    REDIS_PORT=6379
    ```

3. 部署 YeeOnlineJudge 后端服务

    ```shell
    docker-compose up -d
    ```

    ::: warning
    如修改了判题机所在的 Docker Network，务必修改 YeeOnlineJudge 中 `docker-compose.yml` 的 `network` 配置项。
    :::

4. 启动成功后服务端监听 `8000` 端口，使用 `docker ps -a` 查看容器运行状况

## 手动部署

1. Clone 项目到本地

    ```shell
    git clone https://github.com/Sunhill666/YeeOnlineJudge.git
    cd ./YeeOnlineJudge
    ```

2. 安装依赖

    ```shell
    pip install -r requirements.txt
    ```

3. 使用 Docker 运行 PostgreSQL 和 Redis

    ```shell
    docker run --env=POSTGRES_USER=<db-user> \
                --env=POSTGRES_PASSWORD=<db-password> \
                --env=POSTGRES_DB=<db-name> \
                --volume=<your-db-data-volume>:/var/lib/postgresql/data \
                --name=<container_name> \
                -p <db-port>:5432 \
                -itd postgres:14.5-alpine
    docker run --volume=<your-redis-data-volume>:/data \
                -p <redis-port>:6379 \
                -itd redis:7.0-alpine --requirepass "<redis-password>"
    ```

4. 修改项目设置

    ```shell
    vim YeeOnlineJudge/settings.py
    ```

5. 配置环境变量

    ```text
    AUTHN_HEADER=<judge0-AUTHN_HEADER>
    AUTHN_TOKEN=<judge0-AUTHN_TOKEN>
    AUTHZ_HEADER=<judge0-AUTHZ_HEADER>
    AUTHZ_TOKEN=<judge0-AUTHZ_TOKEN>
    CURRENT_ENV=prod
    DJANGO_SETTINGS_MODULE=YeeOnlineJudge.settings
    JUDGE_HOST=<JUDGE_HOST>
    JUDGE_PORT=<JUDGE_PORT>
    JUDGE_SSL=true # 是否使用 https 与判题机通信
    POSTGRES_DB=<db-name>
    POSTGRES_HOST=<db-host>
    POSTGRES_PASSWORD=<db-password>
    POSTGRES_PORT=<db-port>
    POSTGRES_USER=<db-user>
    REDIS_HOST=<redis-host>
    REDIS_PORT=<redis-port>
    REDIS_PASSWORD=<redis-password>
    ```

6. 启动服务

    ```shell
    # 启动 Django
    python manage.py makemigrations && python manage.py migrate
    python manage.py inital_user
    python manage.py runserver 0.0.0.0:8000

    # 启动 Celery
    Celery -A YeeOnlineJudge worker -l INFO
    ```

7. 启动成功后服务端监听 `http://<your-server-ip-address>:8000`


## 结束