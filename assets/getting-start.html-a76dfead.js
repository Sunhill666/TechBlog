import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as r,a as n,b as e,e as a,f as t}from"./app-50cbe7c2.js";const c={},o=n("h2",{id:"准备工作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),e(" 准备工作")],-1),v={href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"},p=t(`<h2 id="部署判题机" tabindex="-1"><a class="header-anchor" href="#部署判题机" aria-hidden="true">#</a> 部署判题机</h2><ol><li><p>下载并解压判题机 Compose 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/judge0/judge0/releases/download/v1.13.0/judge0-v1.13.0.zip
<span class="token function">unzip</span> judge0-v1.13.0.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> judge0-v1.13.0
<span class="token function">vim</span> judge0.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改数据库和 Redis 配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>################################################################################
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
REDIS_PASSWORD=&lt;your-redis-password&gt;

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
POSTGRES_PASSWORD=&lt;DB-password&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（可选）修改认证授权配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>################################################################################
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（可选）文档作为首页</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># If true the documentation page will be used as a homepage, otherwise, the
# homepage will be empty. You can always access the documentation page via /docs.
# Default: false
USE_DOCS_AS_HOMEPAGE=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他可依据个人自行配置</p></li><li><p>运行判题机服务并等待片刻使判题机初始化</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> db redis
<span class="token function">sleep</span> 10s
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
<span class="token function">sleep</span> 5s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行成功后判题机默认监听 <code>http://&lt;your-server-ip-address&gt;:2358</code>，访问 <code>http://&lt;your-server-ip-address&gt;</code> 查看判题机文档</p></li></ol><h2 id="docker-compose-部署-推荐" tabindex="-1"><a class="header-anchor" href="#docker-compose-部署-推荐" aria-hidden="true">#</a> Docker Compose 部署（推荐）</h2><ol><li><p>Clone 项目到本地</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/Sunhill666/YeeOnlineJudge.git
<span class="token builtin class-name">cd</span> ./YeeOnlineJudge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置环境变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># yeeoj.conf
AUTHN_HEADER=&lt;judge0-AUTHN_HEADER&gt;
AUTHN_TOKEN=&lt;judge0-AUTHN_TOKEN&gt; # 无则移除
AUTHZ_HEADER=&lt;judge0-AUTHZ_HEADER&gt;
AUTHZ_TOKEN=&lt;judge0-AUTHZ_TOKEN&gt; # 无则移除
CURRENT_ENV=prod
JUDGE_HOST=&lt;JUDGE_HOST&gt; # 默认填判题机 \`docker-compose.yml\` 服务名称，即 \`server\`
JUDGE_PORT=&lt;JUDGE_PORT&gt;
JUDGE_SSL=true # 是否使用 https 与判题机通信
POSTGRES_DB=&lt;db-name&gt;
POSTGRES_HOST=&lt;db-host&gt;
POSTGRES_PASSWORD=&lt;db-password&gt;
POSTGRES_PORT=&lt;db-port&gt;
POSTGRES_USER=&lt;db-user&gt;
REDIS_HOST=&lt;redis-host&gt;
REDIS_PORT=&lt;redis-port&gt;
REDIS_PASSWORD=&lt;redis-password&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>AUTHN_HEADER=X-Auth-Token
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>部署 YeeOnlineJudge 后端服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如修改了判题机所在的 Docker Network，务必修改 YeeOnlineJudge 中 <code>docker-compose.yml</code> 的 <code>network</code> 配置项。</p></div></li><li><p>启动成功后服务端监听 <code>8000</code> 端口，使用 <code>docker ps -a</code> 查看容器运行状况</p></li></ol><h2 id="手动部署" tabindex="-1"><a class="header-anchor" href="#手动部署" aria-hidden="true">#</a> 手动部署</h2><ol><li><p>Clone 项目到本地</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/Sunhill666/YeeOnlineJudge.git
<span class="token builtin class-name">cd</span> ./YeeOnlineJudge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用 Docker 运行 PostgreSQL 和 Redis</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--env</span><span class="token operator">=</span>POSTGRES_USER<span class="token operator">=</span><span class="token operator">&lt;</span>db-user<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
            <span class="token parameter variable">--env</span><span class="token operator">=</span>POSTGRES_PASSWORD<span class="token operator">=</span><span class="token operator">&lt;</span>db-password<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
            <span class="token parameter variable">--env</span><span class="token operator">=</span>POSTGRES_DB<span class="token operator">=</span><span class="token operator">&lt;</span>db-name<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
            <span class="token parameter variable">--volume</span><span class="token operator">=</span><span class="token operator">&lt;</span>your-db-data-volume<span class="token operator">&gt;</span>:/var/lib/postgresql/data <span class="token punctuation">\\</span>
            <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token operator">&lt;</span>container_name<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
            <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>db-port<span class="token operator">&gt;</span>:5432 <span class="token punctuation">\\</span>
            <span class="token parameter variable">-itd</span> postgres:14.5-alpine
<span class="token function">docker</span> run <span class="token parameter variable">--volume</span><span class="token operator">=</span><span class="token operator">&lt;</span>your-redis-data-volume<span class="token operator">&gt;</span>:/data <span class="token punctuation">\\</span>
            <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>redis-port<span class="token operator">&gt;</span>:6379 <span class="token punctuation">\\</span>
            <span class="token parameter variable">-itd</span> redis:7.0-alpine <span class="token parameter variable">--requirepass</span> <span class="token string">&quot;&lt;redis-password&gt;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改项目设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> YeeOnlineJudge/settings.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>配置环境变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>AUTHN_HEADER=&lt;judge0-AUTHN_HEADER&gt;
AUTHN_TOKEN=&lt;judge0-AUTHN_TOKEN&gt;
AUTHZ_HEADER=&lt;judge0-AUTHZ_HEADER&gt;
AUTHZ_TOKEN=&lt;judge0-AUTHZ_TOKEN&gt;
CURRENT_ENV=prod
DJANGO_SETTINGS_MODULE=YeeOnlineJudge.settings
JUDGE_HOST=&lt;JUDGE_HOST&gt;
JUDGE_PORT=&lt;JUDGE_PORT&gt;
JUDGE_SSL=true # 是否使用 https 与判题机通信
POSTGRES_DB=&lt;db-name&gt;
POSTGRES_HOST=&lt;db-host&gt;
POSTGRES_PASSWORD=&lt;db-password&gt;
POSTGRES_PORT=&lt;db-port&gt;
POSTGRES_USER=&lt;db-user&gt;
REDIS_HOST=&lt;redis-host&gt;
REDIS_PORT=&lt;redis-port&gt;
REDIS_PASSWORD=&lt;redis-password&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动 Django</span>
python manage.py makemigrations <span class="token operator">&amp;&amp;</span> python manage.py migrate
python manage.py inital_user
python manage.py runserver <span class="token number">0.0</span>.0.0:8000

<span class="token comment"># 启动 Celery</span>
Celery <span class="token parameter variable">-A</span> YeeOnlineJudge worker <span class="token parameter variable">-l</span> INFO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动成功后服务端监听 <code>http://&lt;your-server-ip-address&gt;:8000</code></p></li></ol><h2 id="结束" tabindex="-1"><a class="header-anchor" href="#结束" aria-hidden="true">#</a> 结束</h2>`,7);function m(b,g){const s=l("ExternalLinkIcon");return d(),r("div",null,[o,n("p",null,[e("安装 "),n("a",v,[e("Docker Engine"),a(s)]),e(" 或 "),n("a",u,[e("Docker Desktop"),a(s)])]),p])}const E=i(c,[["render",m],["__file","getting-start.html.vue"]]);export{E as default};
