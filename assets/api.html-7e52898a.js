import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as l,a as n,b as a,e as p,f as s}from"./app-c4da404f.js";const c={},u=s(`<h2 id="认证接口" tabindex="-1"><a class="header-anchor" href="#认证接口" aria-hidden="true">#</a> 认证接口</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在请求除 AllowAny 和 IsAuthenticatedOrReadOnly 这两种权限的接口可以在 Header 部分不携带 Bearer Token，请求其余权限的接口请在 Header 中携带 Bearer Token。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    ...
    Authorization<span class="token operator">:</span> Bearer &lt;access_token&gt;<span class="token punctuation">,</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>否则会出现 <code>403 Forbidden</code> ，Token 中含有当前用户的信息，用于鉴权。</p></div><div class="hint-container info"><p class="hint-container-title">JWT-Token 获取 - AllowAny</p><p><code>/api/login/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>发送带有 <code>username</code> 和 <code>password</code> 的信息来获取 Access Token 用于验证和 Refresh Token 用于获取新 Token。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;refresh&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3OTQxMDY3NCwiaWF0IjoxNjc5MzI0Mjc0LCJqdGkiOiJiMzNiNDIyYjM2Njg0YmUyODc4ZGM2OWMxNWQ3MmI5ZiIsInVzZXJfaWQiOiIxMDAxMDExMCJ9.jY65pN2ER1e8PcKhxRqTX6FRFC6I_Kr7vvJ0l4wNU20&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5NDEwNjc0LCJpYXQiOjE2NzkzMjQyNzQsImp0aSI6IjRiNDU4YmQ1MTA0ODQ2NjBhYzE4NWIyMzQ1ZDVhNjNiIiwidXNlcl9pZCI6IjEwMDEwMTEwIn0.Mg1kSMS-4bs_SVKi--LMXoK3iexcZIbiyFAQ1lC5o6M&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">JWT-Token 刷新 - AllowAny</p><p><code>/api/login/refresh/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>发送带有 Refresh Token 的信息来获取新的 Access Token 用于验证和 Refresh Token 用于获取新 Token。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;refresh&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;refresh_token&gt;&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5NDkwMTI1LCJpYXQiOjE2Nzk0MDM3MTcsImp0aSI6ImEwYTU1NjFjN2VhZjQxOWQ5NjhiNDQ3ZDMxMGQ5NzVlIiwidXNlcl9pZCI6IjEwMDEwMTEwIn0.nO_LWhNlmVDAlOqJr0TnorDrTw69d9f9PpftU4S7KTk&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;refresh&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3OTQ5MDEyNSwiaWF0IjoxNjc5NDAzNzI1LCJqdGkiOiJmMGEyNTE1ZWRjNjE0YWMwODg4YWFhYmQ4MjA3OTk2NyIsInVzZXJfaWQiOiIxMDAxMDExMCJ9.cwUa060qLQrHrzYTJzaqIEu1pvIBUhk4nrWemGAIWMk&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">JWT-Token 验证 - AllowAny</p><p><code>/api/login/verify/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>发送带有 Access Token 的信息来验证 Token 是否有效。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;access_token&gt;&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">JWT-Token 销毁 - AllowAny</p><p><code>/api/login/blacklist/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>发送带有 Refresh Token 的信息来销毁 Token。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;refresh&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;refresh_token&gt;&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details></div><h2 id="query-parameter-和-filter-parameter-的使用" tabindex="-1"><a class="header-anchor" href="#query-parameter-和-filter-parameter-的使用" aria-hidden="true">#</a> Query Parameter 和 Filter Parameter 的使用</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>以<strong>用户排名</strong>为例：</p><p>在排名中查询 <code>username</code> 为 <code>10010110</code> 的用户。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/org/rank?search=10010110
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在排名中查询属于 <code>Group.name</code> 中含有 <code>te</code> 的用户。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/org/rank?search=te
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在排名中查询属于 <code>Group.name</code> 中含有 <code>te</code> 且 <code>username</code> 为 <code>1234567890000</code> 的用户。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/org/rank?search=te,1234567890000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>排名根据 <code>UserProfile.statistics.Accepted</code> 升序排序。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/org/rank?ordering=profile__statistics__Accepted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>排名根据 <code>UserProfile.statistics.Accepted</code> 倒序排序。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/org/rank?ordering=-profile__statistics__Accepted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>排名根据 <code>UserProfile.statistics.Accepted</code> 升序排序再按 <code>UserProfile.statistics.Commit</code> 倒序排序。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/org/rank?ordering=profile__statistics__Accepted,-profile__statistics__Commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在排名中查询属于 <code>Group.name</code> 中含有 <code>te</code> 且 <code>username</code> 为 <code>1234567890000</code> 的用户，根据 <code>UserProfile.statistics.Accepted</code> 升序排序再按 <code>UserProfile.statistics.Commit</code> 倒序排序。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/org/rank?search=te,1234567890000&amp;ordering=profile__statistics__Accepted,-profile__statistics__Commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="前台接口" tabindex="-1"><a class="header-anchor" href="#前台接口" aria-hidden="true">#</a> 前台接口</h2><h3 id="organization" tabindex="-1"><a class="header-anchor" href="#organization" aria-hidden="true">#</a> Organization</h3><h4 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h4><div class="hint-container info"><p class="hint-container-title">用户注册 - AllowAny</p><p><code>/api/org/register/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 <code>form-data</code> 按以下字段来创建用户。</p><table><thead><tr><th>字段名</th><th>样例参数</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>username</td><td>1234567890000</td><td>是</td><td>工号/学号</td></tr><tr><td>nickname</td><td>先辈</td><td>是</td><td>昵称</td></tr><tr><td>password</td><td>test</td><td>是</td><td>密码</td></tr><tr><td>real_name</td><td>田所浩二</td><td>是</td><td>真名</td></tr><tr><td>email</td><td><a href="mailto:example@qq.com">example@qq.com</a></td><td>是</td><td>电子邮件</td></tr><tr><td>group</td><td>test</td><td>是</td><td>所在组（班级）</td></tr><tr><td>avatar</td><td>FILE</td><td>否</td><td>头像文件</td></tr><tr><td>bio</td><td>WRRYYYYYYYYYYYYYY!</td><td>否</td><td>格言</td></tr></tbody></table><p>成功返回 <code>201 Created</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;先辈&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;real_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;田所浩二&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example@qq.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;date_joined&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-21T21:49:01.970028&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/media/avatar/default.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bio&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container danger"><p class="hint-container-title">警告</p><ol><li><code>username</code> 必须为 8-13 位数字。</li><li><code>group</code> 的组必须存在。</li></ol></div></details></div><div class="hint-container info"><p class="hint-container-title">查看用户 - IsAuthenticatedOrReadOnly</p><p><code>/api/org/user/{username}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 <code>username</code> 来查看用户信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/org/user/1234567890000/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;先辈&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;real_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;田所浩二&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example@qq.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;date_joined&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-21T22:15:28.482492&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/avatar/default.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bio&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改当前用户 - IsAuthenticatedOrReadOnly</p><p><code>/api/org/user/{username}/</code> <code>PUT</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 <code>username</code> 来修改当前用户信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT http://127.0.0.1:8000/api/org/user/1234567890000/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;型最精彩&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;real_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;赵七&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;bio&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小子张o&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;型最精彩&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;real_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;赵七&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;date_joined&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-21T22:49:26.753120&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/avatar/default.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bio&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小子张o&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><ol><li>只能对当前用户修改</li><li>修改密码和头像使用下方 <code>PATCH</code> 方式修改</li></ol></div></details></div><div class="hint-container info"><p class="hint-container-title">修改当前用户 - IsAuthenticatedOrReadOnly</p><p><code>/api/org/user/{username}/</code> <code>PATCH</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 <code>form-data</code> 按以下字段来修改密码和头像。</p><table><thead><tr><th>字段名</th><th>样例参数</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>profile.avatar</td><td>FILE</td><td>否</td><td>头像</td></tr><tr><td>password</td><td>test</td><td>否</td><td>新密码</td></tr><tr><td>old_pwd</td><td>test123</td><td>如填写 <code>password</code> 则必填，否则非必填</td><td>旧密码</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PATCH http://127.0.0.1:8000/api/org/user/1234567890000/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;型最精彩&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;real_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;赵七&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;date_joined&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-21T22:49:26.753120&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/avatar/default.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bio&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小子张o&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div>`,15),r={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"用户排名 - IsAuthenticatedOrReadOnly",-1),k=n("p",null,[n("code",null,"/api/org/rank/"),a(),n("code",null,"GET")],-1),v={class:"hint-container details"},m=n("summary",null,"接口使用",-1),q=n("p",null,"通过请求来获取用户排名。",-1),b=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`GET http://127.0.0.1:8000/api/org/rank/
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),y=n("p",null,[n("strong",null,"Query Parameter 支持参数")],-1),g=n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"查询方式"),n("th",null,"对应实体字段")])],-1),h=n("tr",null,[n("td",null,"用户名"),n("td",null,"精确查询"),n("td",null,"User.username")],-1),_=n("td",null,"组名",-1),x=n("td",null,"模糊查询",-1),E={href:"http://Group.name",target:"_blank",rel:"noopener noreferrer"},f=s(`<p><strong>Filter Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>对应实体字段</th><th>排序字段</th></tr></thead><tbody><tr><td>正确量</td><td>UserProfile.statistics.Accepted</td><td>profile__statistics__Accepted</td></tr><tr><td>提交量</td><td>UserProfile.statistics.Commit</td><td>profile__statistics__Commit</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>  <span class="token comment">// 数据条目数量。</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 下一页链接。</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>  <span class="token comment">// 上一页链接。</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>  <span class="token comment">// 结果集。</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;管理组&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/avatar/default.jpg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),j=s(`<h4 id="组-班级" tabindex="-1"><a class="header-anchor" href="#组-班级" aria-hidden="true">#</a> 组（班级）</h4><div class="hint-container info"><p class="hint-container-title">查看组（班级）详情 - AllowAny</p><p><code>/api/org/group/{id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 Group 的 <code>id</code> 来获取组（班级）详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/org/group/2/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890000&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/avatar/default.jpg&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><h3 id="problem" tabindex="-1"><a class="header-anchor" href="#problem" aria-hidden="true">#</a> Problem</h3><h4 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h4><div class="hint-container info"><p class="hint-container-title">题目列表 - AllowAny</p><p><code>/api/prm/problem/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>通过请求来获取题目列表。</p><p><strong>Query Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>查询方式</th><th>对应实体字段</th></tr></thead><tbody><tr><td>难度</td><td>精确查询</td><td>Problem.difficulty</td></tr><tr><td>题目</td><td>模糊查询</td><td>Problem.title</td></tr><tr><td>标签名称</td><td>模糊查询</td><td>ProblemTag.tag_name</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;循环&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hard&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span> <span class="token comment">// 是否做过：1 做对；0 做错；-1 没做过。</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">题目详情 - AllowAny</p><p><code>/api/prm/problem/{id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 Problem 的 <code>id</code> 来获取题目详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/prm/problem/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;循环&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;乐乐是一个聪明而又勤奋好学的孩子。他总喜欢探求事物的规律。一天，他突然对数的正整数次幂产生了兴趣。\\n\\n\\n众所周知，$2$ 的正整数次幂最后一位数总是不断的在重复 $2,4,8,6,2,4,8,6…$ 我们说 $2$ 的正整数次幂最后一位的循环长度是 $4$（实际上 $4$ 的倍数都可以说是循环长度，但我们只考虑最小的循环长度）。类似的，其余的数字的正整数次幂最后一位数也有类似的循环现象：\\n\\n$$\\n\\\\def\\\\arraystretch{1.5}\\n\\\\begin{array}{c|c|c}\\\\hline\\n\\\\textbf{数字}&amp; \\\\textbf{循环} &amp; \\\\textbf{循环长度} \\\\cr\\\\hline\\\\hline\\n2 &amp; 2,4,8,6 &amp; 4\\\\cr\\\\hline\\n3 &amp; 3,9,7,1 &amp; 4\\\\cr\\\\hline\\n4 &amp; 4,6 &amp; 2\\\\cr\\\\hline\\n5 &amp; 5 &amp;  1\\\\cr\\\\hline\\n6 &amp; 6 &amp; 1\\\\cr\\\\hline\\n7 &amp; 7,9,3,1 &amp; 4\\\\cr\\\\hline\\n8 &amp; 8,4,2,6 &amp; 4\\\\cr\\\\hline\\n9 &amp; 9,1 &amp; 2\\\\cr\\\\hline\\n\\\\end{array}\\n$$\\n\\n这时乐乐的问题就出来了：是不是只有最后一位才有这样的循环呢？对于一个整数 $n$ 的正整数次幂来说，它的后k位是否会发生循环？如果循环的话，循环长度是多少呢？\\n\\n注意：\\n\\n1. 如果 $n$ 的某个正整数次幂的位数不足 $k$，那么不足的高位看做是 $0$。\\n2. 如果循环长度是 $L$，那么说明对于任意的正整数 $a$，$n$ 的 $a$ 次幂和 $a+L$ 次幂的最后 $k$ 位都相同。\\n&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;input_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;共一行，包含 $2$ 个整数 $n$ 和 $k$。$n$ 和 $k$ 之间用一个空格隔开，表示要求 $n$ 的正整数次幂的最后 $k$ 位的循环长度。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;output_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一个整数，表示循环长度。如果循环不存在，输出 $-1$。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sample&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;32 2&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;50&quot;</span><span class="token operator">:</span> <span class="token string">&quot;int add(int a, int b) {\\n  // Please fill this blank\\n  return ___________;\\n}\\n&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;62&quot;</span><span class="token operator">:</span> <span class="token string">&quot;class Solution {\\n    public int add(int a, int b) {\\n        return _________;\\n    }\\n}\\n&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;**【数据范围】**\\n\\n对于 $30 \\\\%$ 的数据，满足 $k \\\\le 4$；  \\n对于$100 \\\\%$ 的数据，满足 $1 \\\\le n &lt; {10}^{100}$，$1 \\\\le k \\\\le 100$。\\n\\n**【题目来源】**\\n\\nNOIP 2005 普及组第四题&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;languages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token number">54</span><span class="token punctuation">,</span>
        <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token number">62</span><span class="token punctuation">,</span>
        <span class="token number">71</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;time_limit&quot;</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
    <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.out&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.out&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;memory_limit&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
    <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hard&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YeeOnlineJudge&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><h4 id="题目标签" tabindex="-1"><a class="header-anchor" href="#题目标签" aria-hidden="true">#</a> 题目标签</h4><div class="hint-container info"><p class="hint-container-title">题目标签列表 - AllowAny</p><p><code>/api/prm/tag/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>通过请求来获取题目标签列表。</p><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    ...
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">题目标签详情 - AllowAny</p><p><code>/api/prm/tag/{id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 ProblemTag 的 <code>id</code> 来获取题目标签详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/prm/tag/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><h3 id="training" tabindex="-1"><a class="header-anchor" href="#training" aria-hidden="true">#</a> Training</h3><h4 id="比赛训练" tabindex="-1"><a class="header-anchor" href="#比赛训练" aria-hidden="true">#</a> 比赛训练</h4><div class="hint-container info"><p class="hint-container-title">比赛练习列表 - IsAuthenticatedOrReadOnly</p><p><code>/api/train/training/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>通过请求来获取比赛练习列表。</p><p><strong>Query Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>查询方式</th><th>对应实体字段</th></tr></thead><tbody><tr><td>标题</td><td>模糊查询</td><td>Training.title</td></tr></tbody></table><p><strong>Filter Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>对应实体字段</th><th>排序字段</th></tr></thead><tbody><tr><td>开始时间</td><td>Training.start_time</td><td>start_time</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-22T22:45:04.658970&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-02T12:00:00&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-01T12:00:00&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OI&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token number">25</span><span class="token punctuation">,</span>
                <span class="token number">26</span><span class="token punctuation">,</span>
                <span class="token number">27</span><span class="token punctuation">,</span>
                <span class="token number">28</span><span class="token punctuation">,</span>
                <span class="token number">29</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 可免验证参加的组（班级）。</span>
            <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 可免验证参加的用户。</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">比赛练习详情 - IsAuthenticatedOrReadOnly</p><p><code>/api/train/training/{id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 Training 的 <code>id</code> 来获取比赛练习详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/train/training/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1比赛#1比赛#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-22T22:45:04.658970&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-02T12:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-01T12:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OI&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;靶形数独&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hard&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;announcement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">参加比赛练习 - IsAuthenticated</p><p><code>/api/train/training/verify/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用带有 Training ID 和密码的请求即 <code>id</code> 和 <code>password</code> 来获取参赛权限。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;detail&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">比赛排名 - IsAuthenticated</p><p><code>/api/train/rank/{training_id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>获取该训练比赛的排名情况。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/train/rank/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Filter Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>对应实体字段</th><th>排序字段</th></tr></thead><tbody><tr><td>statistics 字段中的 score</td><td>TrainingRank.statistics</td><td>statistics__score</td></tr><tr><td>statistics 字段中的 statistics 下 Accepted</td><td>TrainingRank.statistics</td><td>statistics__statistics__Accepted</td></tr><tr><td>statistics 字段中的 statistics 下 Commit</td><td>TrainingRank.statistics</td><td>statistics__statistics__Commit</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root admin&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;25&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
                <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">比赛提交列表 - IsAuthenticated</p><p><code>/api/train/sub/{training_id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>获取该训练比赛的提交情况。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/train/sub/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Query Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>查询方式</th><th>对应实体字段</th></tr></thead><tbody><tr><td>创建者</td><td>模糊查询</td><td>Submission.created_by</td></tr><tr><td>问题题目</td><td>模糊查询</td><td>Problem.title</td></tr></tbody></table><p><strong>Filter Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>对应实体字段</th><th>排序字段</th></tr></thead><tbody><tr><td>提交时间</td><td>Submission.created_time</td><td>created_time</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root admin&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;language_id&quot;</span><span class="token operator">:</span> <span class="token number">71</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Accepted&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-24T22:06:42.013440&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;problem&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;靶形数独&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><h4 id="学习计划" tabindex="-1"><a class="header-anchor" href="#学习计划" aria-hidden="true">#</a> 学习计划</h4><div class="hint-container info"><p class="hint-container-title">学习计划列表 - IsAuthenticatedOrReadOnly</p><p><code>/api/train/plan/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回学习计划列表。</p><p><strong>Query Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>查询方式</th><th>对应实体字段</th></tr></thead><tbody><tr><td>学习计划标题</td><td>模糊查询</td><td>LearningPlan.title</td></tr></tbody></table><p><strong>Filter Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>对应实体字段</th><th>排序字段</th></tr></thead><tbody><tr><td>创建时间</td><td>LearningPlan.created_time</td><td>created_time</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习，好好学习&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T20:13:16.650457&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ordering&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token number">1</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stage&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C循环&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;循环&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hard&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">]</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        ...
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                ...
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">学习计划详情 - IsAuthenticatedOrReadOnly</p><p><code>/api/train/plan/{id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回该学习计划详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/train/plan/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习，好好学习&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T20:13:16.650457&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ordering&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token number">1</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stage&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C循环&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;循环&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hard&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                ...
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><h3 id="submission" tabindex="-1"><a class="header-anchor" href="#submission" aria-hidden="true">#</a> Submission</h3><div class="hint-container info"><p class="hint-container-title">支持语言列表 - AllowAny</p><p><code>/api/sub/language/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回 OnlineJudge 所支持的提交语言。</p><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// &quot;language_id&quot;: &quot;language_name&quot;</span>
    <span class="token property">&quot;45&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Assembly (NASM 2.14.02)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;46&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bash (5.0.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;47&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Basic (FBC 1.07.1)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;75&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C (Clang 7.0.1)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;76&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C++ (Clang 7.0.1)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;48&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C (GCC 7.4.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;52&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C++ (GCC 7.4.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;49&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C (GCC 8.3.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;53&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C++ (GCC 8.3.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;50&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C (GCC 9.2.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;54&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C++ (GCC 9.2.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;86&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Clojure (1.10.1)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;51&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C# (Mono 6.6.0.161)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;77&quot;</span><span class="token operator">:</span> <span class="token string">&quot;COBOL (GnuCOBOL 2.2)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;55&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Common Lisp (SBCL 2.0.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;56&quot;</span><span class="token operator">:</span> <span class="token string">&quot;D (DMD 2.089.1)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;57&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Elixir (1.9.4)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;58&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Erlang (OTP 22.2)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;44&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Executable&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;87&quot;</span><span class="token operator">:</span> <span class="token string">&quot;F# (.NET Core SDK 3.1.202)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;59&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Fortran (GFortran 9.2.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;60&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Go (1.13.5)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;88&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Groovy (3.0.3)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;61&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Haskell (GHC 8.8.1)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;62&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Java (OpenJDK 13.0.1)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;63&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaScript (Node.js 12.14.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;78&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Kotlin (1.3.70)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;64&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Lua (5.3.5)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;89&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Multi-file program&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;79&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Objective-C (Clang 7.0.1)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;65&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OCaml (4.09.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;66&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Octave (5.1.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;67&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pascal (FPC 3.0.4)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;85&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Perl (5.28.1)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;68&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PHP (7.4.1)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;43&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Plain Text&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;69&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Prolog (GNU Prolog 1.4.5)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;70&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Python (2.7.17)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;71&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Python (3.8.1)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;80&quot;</span><span class="token operator">:</span> <span class="token string">&quot;R (4.0.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;72&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ruby (2.7.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;73&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Rust (1.40.0)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;81&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Scala (2.13.2)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;82&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SQL (SQLite 3.27.2)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;83&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Swift (5.2.3)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;74&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TypeScript (3.7.4)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;84&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Visual Basic.Net (vbnc 0.0.0.5943)&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">创建提交 - IsAuthenticatedOrReadOnly</p><p><code>/api/sub/submission/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>通过以下请求数据来创建提交。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;problem&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;while True:\\n    try:\\n        A = list(map(int, input().split(\\&quot; \\&quot;)))\\n        print(sum(A))\\n    except:\\n        break&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;language_id&quot;</span><span class="token operator">:</span> <span class="token number">71</span>
    <span class="token comment">/*
    &quot;stdin&quot;: &quot;1 2&quot;,
    &quot;expected_output&quot;: &quot;3&quot;, // 此两项为测试提交，不计入提交列表，用于测试，都为非必填。
    &quot;training&quot;: 1, // 如提交此字段，则为训练比赛提交，值为 Training 的 \`id\` ，非必填。
    */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>201 Created</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root admin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;while True:\\n    try:\\n        A = list(map(int, input().split(\\&quot; \\&quot;)))\\n        print(sum(A))\\n    except:\\n        break&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;language_id&quot;</span><span class="token operator">:</span> <span class="token number">71</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;In Queue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-27T22:06:21.736644&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;submit_ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;39.154.0.251&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problem&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;靶形数独&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">提交列表 - IsAuthenticatedOrReadOnly</p><p><code>/api/sub/submission/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回不属于任何训练比赛的提交列表。</p><p><strong>Query Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>查询方式</th><th>对应实体字段</th></tr></thead><tbody><tr><td>提交者的 <code>username</code></td><td>模糊查询</td><td>User.username</td></tr><tr><td>题目标题</td><td>模糊查询</td><td>Problem.title</td></tr></tbody></table><p><strong>Filter Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>对应实体字段</th><th>排序字段</th></tr></thead><tbody><tr><td>提交时间</td><td>Submission.created_time</td><td>created_time</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root admin&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;language_id&quot;</span><span class="token operator">:</span> <span class="token number">71</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Accepted&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-27T22:06:21.736644&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;problem&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;靶形数独&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">提交详情 - IsAuthenticatedOrReadOnly</p><p><code>/api/sub/submission/{sub_id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回不属于任何训练比赛的提交详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/sub/submission/2/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root admin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;940254f7-58e9-4ae3-8cda-ed13b3a14ea3&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;10ed2967-bc99-462a-b44d-600c7a311965&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">// 测试样例提交到 Judger 的 Token</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;while True:\\n    try:\\n        A = list(map(int, input().split(\\&quot; \\&quot;)))\\n        print(sum(A))\\n    except:\\n        break&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;language_id&quot;</span><span class="token operator">:</span> <span class="token number">71</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Accepted&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-27T22:06:21.736644&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;submit_ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;39.154.0.251&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problem&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;靶形数独&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><h3 id="announcement" tabindex="-1"><a class="header-anchor" href="#announcement" aria-hidden="true">#</a> Announcement</h3><div class="hint-container info"><p class="hint-container-title">公告列表 - AllowAny</p><p><code>/api/ann/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回不属于任何训练比赛的公告列表。</p><p><strong>Query Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>查询方式</th><th>对应实体字段</th></tr></thead><tbody><tr><td>公告标题</td><td>模糊查询</td><td>Announcement.title</td></tr><tr><td>公告内容</td><td>模糊查询</td><td>Announcement.content</td></tr></tbody></table><p><strong>Filter Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>对应实体字段</th><th>排序字段</th></tr></thead><tbody><tr><td>公告创建时间</td><td>Announcement.created_time</td><td>created_time</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:43:22.762877&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_update_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:43:22.762891&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">公告详情 - IsAuthenticated</p><p><code>/api/ann/{id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回不属于任何训练比赛的公告详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/ann/2/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:43:22.762877&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_update_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:43:22.762891&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><h2 id="后台接口" tabindex="-1"><a class="header-anchor" href="#后台接口" aria-hidden="true">#</a> 后台接口</h2><h3 id="organization-1" tabindex="-1"><a class="header-anchor" href="#organization-1" aria-hidden="true">#</a> Organization</h3><h4 id="用户-1" tabindex="-1"><a class="header-anchor" href="#用户-1" aria-hidden="true">#</a> 用户</h4><div class="hint-container info"><p class="hint-container-title">添加用户 - IsSuperAdmin</p><p><code>/api/org/admin/user/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>通过以下请求数据来添加用户。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12345678&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12345678&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pose站抽&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example@example.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_role&quot;</span><span class="token operator">:</span> <span class="token string">&quot;STU&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_permission&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NONE&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_staff&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_superuser&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;四&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;马&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;real_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;马四&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bio&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在卡西餐&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>201 Created</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12345678&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/avatar/default.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bio&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在卡西餐&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_login&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pose站抽&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_staff&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_superuser&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;real_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;马四&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example@example.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_role&quot;</span><span class="token operator">:</span> <span class="token string">&quot;STU&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_permission&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NONE&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;date_joined&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-28T21:27:59.820464&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_login_ip&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">用户列表 - IsSuperAdmin</p><p><code>/api/org/admin/user/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回用户列表。</p><p><strong>Query Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>查询方式</th><th>对应实体字段</th></tr></thead><tbody><tr><td>用户名</td><td>模糊查询</td><td>User.username</td></tr><tr><td>昵称</td><td>模糊查询</td><td>User.nickname</td></tr><tr><td>电子邮件</td><td>模糊查询</td><td>User.email</td></tr><tr><td>用户角色</td><td>模糊查询</td><td>User.user_role</td></tr><tr><td>是否工作人员</td><td>模糊查询</td><td>User.is_staff</td></tr><tr><td>是否超管</td><td>模糊查询</td><td>User.is_superuser</td></tr></tbody></table><p><strong>Filter Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>对应实体字段</th><th>排序字段</th></tr></thead><tbody><tr><td>用户名</td><td>User.username</td><td>username</td></tr><tr><td>创建日期</td><td>User.created_time</td><td>date_joined</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;admin@moorlands.cn&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;user_role&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TEC&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_staff&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_superuser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;管理组&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/avatar/default.jpg&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">用户详情 - IsSuperAdmin</p><p><code>/api/org/admin/user/{username}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回用户详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/org/admin/user/10010110/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;管理组&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/avatar/default.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bio&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_login&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-27T22:06:19.280161&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_staff&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_superuser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;real_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root admin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;admin@moorlands.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_role&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TEC&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_permission&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ALL&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;date_joined&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-05T16:49:23.074555&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_login_ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;39.154.0.251&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改用户 - IsSuperAdmin</p><p><code>/api/org/admin/user/{username}/</code> <code>PUT</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 <code>username</code> 来修改用户信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT http://127.0.0.1:8000/api/org/admin/user/12345678/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12345678&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bio&quot;</span><span class="token operator">:</span> <span class="token string">&quot;指南资讯&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;最新跟单&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_staff&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_superuser&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;五&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;王&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;real_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;examples@example.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_role&quot;</span><span class="token operator">:</span> <span class="token string">&quot;STU&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_permission&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NONE&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12345678&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/avatar/default.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bio&quot;</span><span class="token operator">:</span> <span class="token string">&quot;指南资讯&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_login&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;最新跟单&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_staff&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_superuser&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;real_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;examples@example.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_role&quot;</span><span class="token operator">:</span> <span class="token string">&quot;STU&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_permission&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NONE&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;date_joined&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-28T21:27:59.820464&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_login_ip&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改用户 - IsSuperAdmin</p><p><code>/api/org/admin/user/{username}/</code> <code>PATCH</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 <code>username</code> 来部分修改用户信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PATCH http://127.0.0.1:8000/api/org/admin/user/12345678/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test1234321&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12345678&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/avatar/default.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bio&quot;</span><span class="token operator">:</span> <span class="token string">&quot;指南资讯&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_login&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-28T21:47:06.693061&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;最新跟单&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_staff&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_superuser&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;real_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;examples@example.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_role&quot;</span><span class="token operator">:</span> <span class="token string">&quot;STU&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_permission&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NONE&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;date_joined&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-28T21:27:59.820464&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_login_ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;220.195.74.195&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">删除用户 - IsSuperAdmin</p><p><code>/api/org/admin/user/{username}/</code> <code>DELETE</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求来删除用户。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE http://127.0.0.1:8000/api/org/admin/user/12345678/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>204 No Content</code> 。</p></details></div><div class="hint-container info"><p class="hint-container-title">批量添加用户 - IsSuperAdmin</p><p><code>/api/org/admin/userbatch/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>通过以下请求数据来批量添加用户。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v12&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;suffix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;q&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_num&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BatchUser&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 不用提前创建该组（班级）</span>
    <span class="token property">&quot;output_file&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 为 true 则返回 CSV 文件，反之返回 json 数据</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回返回 CSV 文件或返回 json 数据。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;detail&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;v12_PIq9AOt_q&quot;</span><span class="token operator">:</span> <span class="token string">&quot;n6GU1dxJSLJ3WxMo&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;v12_H3k7tMa_q&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RiwCurPsWJAEw1f8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;v12_mGWf9Fd_q&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PifZySateUJelUb9&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;v12_75UnkUw_q&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tvTaQ0TeEcxIZvFh&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;v12_lqem1BD_q&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YuaFTcvkBzmHBR78&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;v12_KZaUhZq_q&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EOnaQtgWUkDROt7m&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;v12_Jw2K3qq_q&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M4TCUgt89QZkYMHC&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;v12_EOiOYSk_q&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HB8nkkwGmCLcOil3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;v12_AU7zqdu_q&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ZIKPK6v4IEI48p1p&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;v12_Ir3Eq2R_q&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gW6Tc7McXVXHCRrN&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><h4 id="组-班级-1" tabindex="-1"><a class="header-anchor" href="#组-班级-1" aria-hidden="true">#</a> 组（班级）</h4><div class="hint-container info"><p class="hint-container-title">创建组（班级） - IsSuperAdmin</p><p><code>/api/org/admin/group/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>通过以下请求数据来创建组（班级）。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>201 Created</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div>`,39),T={class:"hint-container info"},$=n("p",{class:"hint-container-title"},"组（班级）列表 - IsSuperAdmin",-1),I=n("p",null,[n("code",null,"/api/org/admin/group/"),a(),n("code",null,"GET")],-1),C={class:"hint-container details"},A=n("summary",null,"接口使用",-1),P=n("p",null,"请求返回组（班级）列表。",-1),O=n("p",null,[n("strong",null,"Query Parameter 支持参数")],-1),w=n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"查询方式"),n("th",null,"对应实体字段")])],-1),S=n("td",null,"组（班级）名称",-1),N=n("td",null,"模糊查询",-1),G={href:"http://Group.name",target:"_blank",rel:"noopener noreferrer"},L=n("tr",null,[n("td",null,"用户名"),n("td",null,"模糊查询"),n("td",null,"User.username")],-1),R=s(`<p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        ...
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v12_PIq9AOt_q&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/avatar/default.jpg&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                ...
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BatchUser&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),D=s(`<div class="hint-container info"><p class="hint-container-title">组（班级）详情 - IsSuperAdmin</p><p><code>/api/org/admin/group/{id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回组（班级）详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/org/admin/group/3/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v12_PIq9AOt_q&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/avatar/default.jpg&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BatchUser&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改组（班级） - IsSuperAdmin</p><p><code>/api/org/admin/group/{id}/</code> <code>PUT</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 Group 的 <code>id</code> 来修改组（班级）信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT http://127.0.0.1:8000/api/org/admin/group/3/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;批量产生&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v12_PIq9AOt_q&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/avatar/default.jpg&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;批量产生&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">删除组（班级） - IsSuperAdmin</p><p><code>/api/org/admin/group/{id}/</code> <code>DELETE</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求来删除组（班级）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE http://127.0.0.1:8000/api/org/admin/group/3/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>204 No Content</code> 。</p><div class="hint-container warning"><p class="hint-container-title">删除的组（班级）下存在用户则无法删除。</p></div></details></div><h3 id="problem-1" tabindex="-1"><a class="header-anchor" href="#problem-1" aria-hidden="true">#</a> Problem</h3><h4 id="测试样例" tabindex="-1"><a class="header-anchor" href="#测试样例" aria-hidden="true">#</a> 测试样例</h4><div class="hint-container info"><p class="hint-container-title">上传测试样例 - IsStaff</p><p><code>/api/prm/admin/test_case/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 <code>form-data</code> 按以下字段来上传测试样例。</p><table><thead><tr><th>字段名</th><th>样例参数</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>file</td><td>FILE</td><td>是</td><td>测试样例文件</td></tr></tbody></table><p>成功返回 <code>201 Created</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/test_case/add-example1_aL2SWau.zip&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-29T21:58:58.072573&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;struct&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.out&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.out&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请按以下目录结构打包测试样例，否则会验证错误，一个 <code>in</code> 对应一个 <code>out</code> 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>add-example1
├── 1.in
├── 1.out
├── 2.in
└── 2.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">测试样例列表 - IsStaff</p><p><code>/api/prm/admin/test_case/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回测试样例列表。</p><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/media/test_case/add-example1.zip&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-05T16:51:15.161915&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;struct&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.in&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.out&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.in&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.out&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">删除测试样例 - IsStaff</p><p><code>/api/prm/admin/test_case/{id}/</code> <code>DELETE</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求来删除测试样例。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE http://127.0.0.1:8000/api/prm/admin/test_case/2/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>204 No Content</code> 。</p><div class="hint-container warning"><p class="hint-container-title">删除的测试样例有被题目所引用则无法删除。</p></div></details></div><h4 id="题目标签-1" tabindex="-1"><a class="header-anchor" href="#题目标签-1" aria-hidden="true">#</a> 题目标签</h4><div class="hint-container info"><p class="hint-container-title">添加题目标签 - IsStaff</p><p><code>/api/prm/admin/tag/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>通过以下请求数据来添加题目标签。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>201 Created</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">题目标签列表 - IsStaff</p><p><code>/api/prm/admin/tag/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回题目标签列表。</p><p>成功返回 <code>200 OK</code> ，默认按照 <code>tag_name</code> 排序。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tt&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">题目标签详情 - IsStaff</p><p><code>/api/prm/admin/tag/{id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回题目标签详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/prm/admin/tag/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改题目标签 - IsStaff</p><p><code>/api/prm/admin/tag/{id}/</code> <code>PUT</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 ProblemTag 的 <code>id</code> 来修改题目标签。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT http://127.0.0.1:8000/api/prm/admin/tag/3/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balabala&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balabala&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">删除题目标签 - IsStaff</p><p><code>/api/prm/admin/tag/{id}/</code> <code>DELETE</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求来删除题目标签。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE http://127.0.0.1:8000/api/prm/admin/tag/3/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>204 No Content</code> 。</p></details></div><h4 id="题目-1" tabindex="-1"><a class="header-anchor" href="#题目-1" aria-hidden="true">#</a> 题目</h4><div class="hint-container info"><p class="hint-container-title">添加题目 - IsStaff</p><p><code>/api/prm/admin/problem/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>通过以下请求数据来添加题目。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;求A+B的和&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门题目，给定a和b，求a+b的值&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;input_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a为整数，b为整数&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;output_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;输出a+b的值&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sample&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 2\\n3 4\\n&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3\\n7\\n&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token punctuation">{</span><span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0 2\\n-1 4\\n&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2\\n3\\n&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;……&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;languages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">62</span><span class="token punctuation">,</span> <span class="token number">71</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;62&quot;</span><span class="token operator">:</span> <span class="token string">&quot;//PREPEND BEGIN\\nimport java.util.Scanner;\\n//PREPEND END\\n\\n//TEMPLATE BEGIN\\nclass Solution {\\n    public int add(int a, int b) {\\n        return _________;\\n    }\\n}\\n//TEMPLATE END\\n\\n//APPEND BEGIN\\npublic class Main {\\n    public static void main(String[] args) {\\n        Scanner scanner = new Scanner(System.in);\\n        Solution solution = new Solution();\\n        while (scanner.hasNext()) {\\n            System.out.println(solution.add(scanner.nextInt(), scanner.nextInt()));\\n        }\\n    }\\n}\\n//APPEND END&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;time_limit&quot;</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
    <span class="token property">&quot;memory_limit&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
    <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OI&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_public&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YeeOnlineJudge&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test_case&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.out&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.out&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>201 Created</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balabala&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;求A+B的和&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门题目，给定a和b，求a+b的值&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;input_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a为整数，b为整数&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;output_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;输出a+b的值&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sample&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 2\\n3 4\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3\\n7\\n&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0 2\\n-1 4\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2\\n3\\n&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;62&quot;</span><span class="token operator">:</span> <span class="token string">&quot;//PREPEND BEGIN\\nimport java.util.Scanner;\\n//PREPEND END\\n\\n//TEMPLATE BEGIN\\nclass Solution {\\n    public int add(int a, int b) {\\n        return _________;\\n    }\\n}\\n//TEMPLATE END\\n\\n//APPEND BEGIN\\npublic class Main {\\n    public static void main(String[] args) {\\n        Scanner scanner = new Scanner(System.in);\\n        Solution solution = new Solution();\\n        while (scanner.hasNext()) {\\n            System.out.println(solution.add(scanner.nextInt(), scanner.nextInt()));\\n        }\\n    }\\n}\\n//APPEND END&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;……&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;languages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token number">54</span><span class="token punctuation">,</span>
        <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token number">62</span><span class="token punctuation">,</span>
        <span class="token number">71</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;time_limit&quot;</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
    <span class="token property">&quot;memory_limit&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
    <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ACM&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.out&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.out&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_public&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YeeOnlineJudge&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-03T21:50:48.850798&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_update_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-03T21:50:48.850813&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test_case&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">题目列表 - IsStaff</p><p><code>/api/prm/admin/problem/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回题目列表。</p><p><strong>Query Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>查询方式</th><th>对应实体字段</th></tr></thead><tbody><tr><td>难度</td><td>精确查询</td><td>Problem.difficulty</td></tr><tr><td>题目标题</td><td>模糊查询</td><td>Problem.title</td></tr><tr><td>题目标签</td><td>模糊查询</td><td>ProblemTag.tag_name</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/api/prm/admin/problem/?page=2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        ...
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;谁拿了最多奖学金&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Easy&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">题目列表(简洁) - IsStaff</p><p><code>/api/prm/admin/problem/all/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回题目列表的简洁信息。</p><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    ...
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;谁拿了最多奖学金&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    ...
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">题目详情 - IsStaff</p><p><code>/api/prm/admin/problem/{id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回题目详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/prm/admin/problem/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;循环&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;乐乐是一个聪明而又勤奋好学的孩子。他总喜欢探求事物的规律。一天，他突然对数的正整数次幂产生了兴趣。\\n\\n\\n众所周知，$2$ 的正整数次幂最后一位数总是不断的在重复 $2,4,8,6,2,4,8,6…$ 我们说 $2$ 的正整数次幂最后一位的循环长度是 $4$（实际上 $4$ 的倍数都可以说是循环长度，但我们只考虑最小的循环长度）。类似的，其余的数字的正整数次幂最后一位数也有类似的循环现象：\\n\\n$$\\n\\\\def\\\\arraystretch{1.5}\\n\\\\begin{array}{c|c|c}\\\\hline\\n\\\\textbf{数字}&amp; \\\\textbf{循环} &amp; \\\\textbf{循环长度} \\\\cr\\\\hline\\\\hline\\n2 &amp; 2,4,8,6 &amp; 4\\\\cr\\\\hline\\n3 &amp; 3,9,7,1 &amp; 4\\\\cr\\\\hline\\n4 &amp; 4,6 &amp; 2\\\\cr\\\\hline\\n5 &amp; 5 &amp;  1\\\\cr\\\\hline\\n6 &amp; 6 &amp; 1\\\\cr\\\\hline\\n7 &amp; 7,9,3,1 &amp; 4\\\\cr\\\\hline\\n8 &amp; 8,4,2,6 &amp; 4\\\\cr\\\\hline\\n9 &amp; 9,1 &amp; 2\\\\cr\\\\hline\\n\\\\end{array}\\n$$\\n\\n这时乐乐的问题就出来了：是不是只有最后一位才有这样的循环呢？对于一个整数 $n$ 的正整数次幂来说，它的后k位是否会发生循环？如果循环的话，循环长度是多少呢？\\n\\n注意：\\n\\n1. 如果 $n$ 的某个正整数次幂的位数不足 $k$，那么不足的高位看做是 $0$。\\n2. 如果循环长度是 $L$，那么说明对于任意的正整数 $a$，$n$ 的 $a$ 次幂和 $a+L$ 次幂的最后 $k$ 位都相同。\\n&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;input_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;共一行，包含 $2$ 个整数 $n$ 和 $k$。$n$ 和 $k$ 之间用一个空格隔开，表示要求 $n$ 的正整数次幂的最后 $k$ 位的循环长度。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;output_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一个整数，表示循环长度。如果循环不存在，输出 $-1$。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sample&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;32 2&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;50&quot;</span><span class="token operator">:</span> <span class="token string">&quot;//PREPEND BEGIN\\n#include &lt;stdio.h&gt;\\n//PREPEND END\\n\\n//TEMPLATE BEGIN\\nint add(int a, int b) {\\n  // Please fill this blank\\n  return ___________;\\n}\\n//TEMPLATE END\\n\\n//APPEND BEGIN\\nint main() {\\n  printf(\\&quot;%d\\&quot;, add(1, 2));\\n  return 0;\\n}\\n//APPEND END&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;62&quot;</span><span class="token operator">:</span> <span class="token string">&quot;//PREPEND BEGIN\\nimport java.util.Scanner;\\n//PREPEND END\\n\\n//TEMPLATE BEGIN\\nclass Solution {\\n    public int add(int a, int b) {\\n        return _________;\\n    }\\n}\\n//TEMPLATE END\\n\\n//APPEND BEGIN\\npublic class Main {\\n    public static void main(String[] args) {\\n        Scanner scanner = new Scanner(System.in);\\n        Solution solution = new Solution();\\n        while (scanner.hasNext()) {\\n            System.out.println(solution.add(scanner.nextInt(), scanner.nextInt()));\\n        }\\n    }\\n}\\n//APPEND END&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;**【数据范围】**\\n\\n对于 $30 \\\\%$ 的数据，满足 $k \\\\le 4$；  \\n对于$100 \\\\%$ 的数据，满足 $1 \\\\le n &lt; {10}^{100}$，$1 \\\\le k \\\\le 100$。\\n\\n**【题目来源】**\\n\\nNOIP 2005 普及组第四题&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;languages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token number">54</span><span class="token punctuation">,</span>
        <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token number">62</span><span class="token punctuation">,</span>
        <span class="token number">71</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;time_limit&quot;</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
    <span class="token property">&quot;memory_limit&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
    <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hard&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ACM&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.out&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.out&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_public&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YeeOnlineJudge&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-05T16:51:16.126009&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_update_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-05T16:51:16.126024&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test_case&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改题目 - IsStaff</p><p><code>/api/prm/admin/problem/{id}/</code> <code>PUT</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 Problem 的 <code>id</code> 来修改题目。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT http://127.0.0.1:8000/api/prm/admin/problem/50/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;循环&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;乐乐是一个聪明而又勤奋好学的孩子。他总喜欢探求事物的规律。一天，他突然对数的正整数次幂产生了兴趣。\\n\\n\\n众所周知，$2$ 的正整数次幂最后一位数总是不断的在重复 $2,4,8,6,2,4,8,6…$ 我们说 $2$ 的正整数次幂最后一位的循环长度是 $4$（实际上 $4$ 的倍数都可以说是循环长度，但我们只考虑最小的循环长度）。类似的，其余的数字的正整数次幂最后一位数也有类似的循环现象：\\n\\n$$\\n\\\\def\\\\arraystretch{1.5}\\n\\\\begin{array}{c|c|c}\\\\hline\\n\\\\textbf{数字}&amp; \\\\textbf{循环} &amp; \\\\textbf{循环长度} \\\\cr\\\\hline\\\\hline\\n2 &amp; 2,4,8,6 &amp; 4\\\\cr\\\\hline\\n3 &amp; 3,9,7,1 &amp; 4\\\\cr\\\\hline\\n4 &amp; 4,6 &amp; 2\\\\cr\\\\hline\\n5 &amp; 5 &amp;  1\\\\cr\\\\hline\\n6 &amp; 6 &amp; 1\\\\cr\\\\hline\\n7 &amp; 7,9,3,1 &amp; 4\\\\cr\\\\hline\\n8 &amp; 8,4,2,6 &amp; 4\\\\cr\\\\hline\\n9 &amp; 9,1 &amp; 2\\\\cr\\\\hline\\n\\\\end{array}\\n$$\\n\\n这时乐乐的问题就出来了：是不是只有最后一位才有这样的循环呢？对于一个整数 $n$ 的正整数次幂来说，它的后k位是否会发生循环？如果循环的话，循环长度是多少呢？\\n\\n注意：\\n\\n1. 如果 $n$ 的某个正整数次幂的位数不足 $k$，那么不足的高位看做是 $0$。\\n2. 如果循环长度是 $L$，那么说明对于任意的正整数 $a$，$n$ 的 $a$ 次幂和 $a+L$ 次幂的最后 $k$ 位都相同。\\n&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;input_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;共一行，包含 $2$ 个整数 $n$ 和 $k$。$n$ 和 $k$ 之间用一个空格隔开，表示要求 $n$ 的正整数次幂的最后 $k$ 位的循环长度。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;output_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一个整数，表示循环长度。如果循环不存在，输出 $-1$。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sample&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;32 2&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;50&quot;</span><span class="token operator">:</span> <span class="token string">&quot;……&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;54&quot;</span><span class="token operator">:</span> <span class="token string">&quot;……&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;62&quot;</span><span class="token operator">:</span> <span class="token string">&quot;……&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;**【数据范围】**\\n\\n对于 $30 \\\\%$ 的数据，满足 $k \\\\le 4$；  \\n对于$100 \\\\%$ 的数据，满足 $1 \\\\le n &lt; {10}^{100}$，$1 \\\\le k \\\\le 100$。\\n\\n**【题目来源】**\\n\\nNOIP 2005 普及组第四题&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;languages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token number">54</span><span class="token punctuation">,</span>
        <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token number">62</span><span class="token punctuation">,</span>
        <span class="token number">71</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;time_limit&quot;</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
    <span class="token property">&quot;memory_limit&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
    <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hard&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ACM&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.out&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.out&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_public&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YeeOnlineJudge&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test_case&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;循环&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;乐乐是一个聪明而又勤奋好学的孩子。他总喜欢探求事物的规律。一天，他突然对数的正整数次幂产生了兴趣。\\n\\n\\n众所周知，$2$ 的正整数次幂最后一位数总是不断的在重复 $2,4,8,6,2,4,8,6…$ 我们说 $2$ 的正整数次幂最后一位的循环长度是 $4$（实际上 $4$ 的倍数都可以说是循环长度，但我们只考虑最小的循环长度）。类似的，其余的数字的正整数次幂最后一位数也有类似的循环现象：\\n\\n$$\\n\\\\def\\\\arraystretch{1.5}\\n\\\\begin{array}{c|c|c}\\\\hline\\n\\\\textbf{数字}&amp; \\\\textbf{循环} &amp; \\\\textbf{循环长度} \\\\cr\\\\hline\\\\hline\\n2 &amp; 2,4,8,6 &amp; 4\\\\cr\\\\hline\\n3 &amp; 3,9,7,1 &amp; 4\\\\cr\\\\hline\\n4 &amp; 4,6 &amp; 2\\\\cr\\\\hline\\n5 &amp; 5 &amp;  1\\\\cr\\\\hline\\n6 &amp; 6 &amp; 1\\\\cr\\\\hline\\n7 &amp; 7,9,3,1 &amp; 4\\\\cr\\\\hline\\n8 &amp; 8,4,2,6 &amp; 4\\\\cr\\\\hline\\n9 &amp; 9,1 &amp; 2\\\\cr\\\\hline\\n\\\\end{array}\\n$$\\n\\n这时乐乐的问题就出来了：是不是只有最后一位才有这样的循环呢？对于一个整数 $n$ 的正整数次幂来说，它的后k位是否会发生循环？如果循环的话，循环长度是多少呢？\\n\\n注意：\\n\\n1. 如果 $n$ 的某个正整数次幂的位数不足 $k$，那么不足的高位看做是 $0$。\\n2. 如果循环长度是 $L$，那么说明对于任意的正整数 $a$，$n$ 的 $a$ 次幂和 $a+L$ 次幂的最后 $k$ 位都相同。\\n&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;input_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;共一行，包含 $2$ 个整数 $n$ 和 $k$。$n$ 和 $k$ 之间用一个空格隔开，表示要求 $n$ 的正整数次幂的最后 $k$ 位的循环长度。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;output_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一个整数，表示循环长度。如果循环不存在，输出 $-1$。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sample&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;32 2&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;50&quot;</span><span class="token operator">:</span> <span class="token string">&quot;……&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;54&quot;</span><span class="token operator">:</span> <span class="token string">&quot;……&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;62&quot;</span><span class="token operator">:</span> <span class="token string">&quot;……&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;**【数据范围】**\\n\\n对于 $30 \\\\%$ 的数据，满足 $k \\\\le 4$；  \\n对于$100 \\\\%$ 的数据，满足 $1 \\\\le n &lt; {10}^{100}$，$1 \\\\le k \\\\le 100$。\\n\\n**【题目来源】**\\n\\nNOIP 2005 普及组第四题&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;languages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token number">54</span><span class="token punctuation">,</span>
        <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token number">62</span><span class="token punctuation">,</span>
        <span class="token number">71</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;time_limit&quot;</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
    <span class="token property">&quot;memory_limit&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
    <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hard&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ACM&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.out&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.out&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_public&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YeeOnlineJudge&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-03T21:50:48.850798&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_update_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-03T22:20:57.642325&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test_case&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改题目 - IsStaff</p><p><code>/api/prm/admin/problem/{id}/</code> <code>PATCH</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 Problem 的 <code>id</code> 来部分修改题目。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PATCH http://127.0.0.1:8000/api/prm/admin/problem/50/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OI&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.out&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.out&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;循环&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;乐乐是一个聪明而又勤奋好学的孩子。他总喜欢探求事物的规律。一天，他突然对数的正整数次幂产生了兴趣。\\n\\n\\n众所周知，$2$ 的正整数次幂最后一位数总是不断的在重复 $2,4,8,6,2,4,8,6…$ 我们说 $2$ 的正整数次幂最后一位的循环长度是 $4$（实际上 $4$ 的倍数都可以说是循环长度，但我们只考虑最小的循环长度）。类似的，其余的数字的正整数次幂最后一位数也有类似的循环现象：\\n\\n$$\\n\\\\def\\\\arraystretch{1.5}\\n\\\\begin{array}{c|c|c}\\\\hline\\n\\\\textbf{数字}&amp; \\\\textbf{循环} &amp; \\\\textbf{循环长度} \\\\cr\\\\hline\\\\hline\\n2 &amp; 2,4,8,6 &amp; 4\\\\cr\\\\hline\\n3 &amp; 3,9,7,1 &amp; 4\\\\cr\\\\hline\\n4 &amp; 4,6 &amp; 2\\\\cr\\\\hline\\n5 &amp; 5 &amp;  1\\\\cr\\\\hline\\n6 &amp; 6 &amp; 1\\\\cr\\\\hline\\n7 &amp; 7,9,3,1 &amp; 4\\\\cr\\\\hline\\n8 &amp; 8,4,2,6 &amp; 4\\\\cr\\\\hline\\n9 &amp; 9,1 &amp; 2\\\\cr\\\\hline\\n\\\\end{array}\\n$$\\n\\n这时乐乐的问题就出来了：是不是只有最后一位才有这样的循环呢？对于一个整数 $n$ 的正整数次幂来说，它的后k位是否会发生循环？如果循环的话，循环长度是多少呢？\\n\\n注意：\\n\\n1. 如果 $n$ 的某个正整数次幂的位数不足 $k$，那么不足的高位看做是 $0$。\\n2. 如果循环长度是 $L$，那么说明对于任意的正整数 $a$，$n$ 的 $a$ 次幂和 $a+L$ 次幂的最后 $k$ 位都相同。\\n&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;input_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;共一行，包含 $2$ 个整数 $n$ 和 $k$。$n$ 和 $k$ 之间用一个空格隔开，表示要求 $n$ 的正整数次幂的最后 $k$ 位的循环长度。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;output_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一个整数，表示循环长度。如果循环不存在，输出 $-1$。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sample&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;32 2&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;50&quot;</span><span class="token operator">:</span> <span class="token string">&quot;……&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;54&quot;</span><span class="token operator">:</span> <span class="token string">&quot;……&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;62&quot;</span><span class="token operator">:</span> <span class="token string">&quot;……&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;**【数据范围】**\\n\\n对于 $30 \\\\%$ 的数据，满足 $k \\\\le 4$；  \\n对于$100 \\\\%$ 的数据，满足 $1 \\\\le n &lt; {10}^{100}$，$1 \\\\le k \\\\le 100$。\\n\\n**【题目来源】**\\n\\nNOIP 2005 普及组第四题&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;languages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token number">54</span><span class="token punctuation">,</span>
        <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token number">62</span><span class="token punctuation">,</span>
        <span class="token number">71</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;time_limit&quot;</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
    <span class="token property">&quot;memory_limit&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
    <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hard&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OI&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.out&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;input_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.in&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;output_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.out&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_public&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YeeOnlineJudge&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-03T21:50:48.850798&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_update_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-03T22:38:59.827720&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test_case&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">删除题目 - IsStaff</p><p><code>/api/prm/admin/problem/{id}/</code> <code>DELETE</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求来删除题目。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE http://127.0.0.1:8000/api/prm/admin/problem/50/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>204 No Content</code> 。</p></details></div><h3 id="training-1" tabindex="-1"><a class="header-anchor" href="#training-1" aria-hidden="true">#</a> Training</h3><h4 id="题集" tabindex="-1"><a class="header-anchor" href="#题集" aria-hidden="true">#</a> 题集</h4><div class="hint-container info"><p class="hint-container-title">创建题集 - IsStaff</p><p><code>/api/train/admin/problem_set/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>通过以下请求数据来创建题集。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C循环&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">// 题目 ID，需要为空时使用 [] 代替</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>201 Created</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C循环&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;循环&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hard&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">题集列表 - IsStaff</p><p><code>/api/train/admin/problem_set/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回题集列表。</p><p><strong>Query Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>查询方式</th><th>对应实体字段</th></tr></thead><tbody><tr><td>标题</td><td>模糊查询</td><td>ProblemSet.title</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C循环&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ...
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;谁拿了最多奖学金&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Easy&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                ...
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">题集详情 - IsStaff</p><p><code>/api/train/admin/problem_set/{id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回题集详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/train/admin/problem_set/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C循环&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        ...
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;谁拿了最多奖学金&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Easy&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改题集 - IsStaff</p><p><code>/api/train/admin/problem_set/{id}/</code> <code>PUT</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 ProblemSet 的 <code>id</code> 来修改题集。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT http://127.0.0.1:8000/api/train/admin/problem_set/2/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;修改后&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;修改后&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;循环&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hard&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改题集 - IsStaff</p><p><code>/api/train/admin/problem_set/{id}/</code> <code>PATCH</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 ProblemSet 的 <code>id</code> 来部分修改题集。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PATCH http://127.0.0.1:8000/api/train/admin/problem_set/2/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;再修改&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;再修改&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;循环&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hard&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">删除题集 - IsStaff</p><p><code>/api/train/admin/problem_set/{id}/</code> <code>DELETE</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求来删除题集。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE http://127.0.0.1:8000/api/train/admin/problem_set/2/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>204 No Content</code> 。</p></details></div><h4 id="比赛训练-1" tabindex="-1"><a class="header-anchor" href="#比赛训练-1" aria-hidden="true">#</a> 比赛训练</h4><div class="hint-container info"><p class="hint-container-title">创建比赛训练 - IsStaff</p><p><code>/api/train/admin/training/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>通过以下请求数据来创建比赛训练。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1比赛#1比赛#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-3-2T12:00:00&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-4-1T12:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OI&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span>
    <span class="token comment">/*

    &quot;group&quot;: [1, 2],
    &quot;user&quot;: [&quot;10010&quot;, &quot;10086&quot;]
    
    非必填，两参数分别为可免密参加比赛的组（班级）或用户，值分别为组（班级）id 和 username

    */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>201 Created</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1比赛#1比赛#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-05T12:44:17.927687&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-3-2T12:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-4-1T12:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OI&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        ...
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;质因数分解&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Easy&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;announcement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">比赛训练列表 - IsStaff</p><p><code>/api/train/admin/training/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回比赛训练列表。</p><p><strong>Query Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>查询方式</th><th>对应实体字段</th></tr></thead><tbody><tr><td>标题</td><td>模糊查询</td><td>Training.title</td></tr></tbody></table><p><strong>Filter Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>对应实体字段</th><th>排序字段</th></tr></thead><tbody><tr><td>创建日期</td><td>Training.created_time</td><td>created_time</td></tr><tr><td>比赛训练开始时间</td><td>Training.start_time</td><td>start_time</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-05T12:44:17.927687&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-02T12:00:00&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-01T12:00:00&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OI&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token number">25</span><span class="token punctuation">,</span>
                <span class="token number">26</span><span class="token punctuation">,</span>
                <span class="token number">27</span><span class="token punctuation">,</span>
                <span class="token number">28</span><span class="token punctuation">,</span>
                <span class="token number">29</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">比赛训练详情 - IsStaff</p><p><code>/api/train/admin/training/{id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回比赛训练详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/train/admin/training/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1比赛#1比赛#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-22T22:45:04.658970&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-02T12:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-01T12:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OI&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        ...
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;质因数分解&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Easy&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;announcement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        ...
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:43:11.910721&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_update_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:43:11.910732&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改比赛练习 - IsStaff</p><p><code>/api/train/admin/training/{id}/</code> <code>PUT</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 Training 的 <code>id</code> 来修改比赛练习。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT http://127.0.0.1:8000/api/train/admin/training/2/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1比赛#1比赛#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-3-2T12:00:00&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-4-1T12:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ACM&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;125634&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1比赛#1比赛#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-05T12:44:17.927687&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-3-2T12:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-4-1T12:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ACM&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        ...
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;质因数分解&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Easy&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;announcement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改比赛练习 - IsStaff</p><p><code>/api/train/admin/training/{id}/</code> <code>PATCH</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 Training 的 <code>id</code> 来部分修改比赛练习。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PATCH http://127.0.0.1:8000/api/train/admin/training/2/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;练习Test#1&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;练习Test#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛#1比赛#1比赛#1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-05T12:44:17.927687&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-3-2T12:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-4-1T12:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ACM&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        ...
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;质因数分解&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Easy&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;announcement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">删除比赛训练 - IsStaff</p><p><code>/api/train/admin/training/{id}/</code> <code>DELETE</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求来删除比赛训练。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE http://127.0.0.1:8000/api/train/admin/training/2/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>204 No Content</code> 。</p></details></div><h4 id="学习计划-1" tabindex="-1"><a class="header-anchor" href="#学习计划-1" aria-hidden="true">#</a> 学习计划</h4><div class="hint-container info"><p class="hint-container-title">创建学习计划 - IsStaff</p><p><code>/api/train/admin/plan/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>通过以下请求数据来创建学习计划。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习，好好学习&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stage&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 题集 ID</span>
    <span class="token property">&quot;ordering&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// 题集顺序</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>201 Created</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习，好好学习&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T20:13:16.650457&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ordering&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token number">1</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stage&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C循环&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;循环&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hard&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                ...
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">学习计划列表 - IsStaff</p><p><code>/api/train/admin/plan/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回学习计划列表。</p><p><strong>Query Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>查询方式</th><th>对应实体字段</th></tr></thead><tbody><tr><td>标题</td><td>模糊查询</td><td>LearningPlan.title</td></tr></tbody></table><p><strong>Filter Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>对应实体字段</th><th>排序字段</th></tr></thead><tbody><tr><td>创建日期</td><td>LearningPlan.created_time</td><td>created_time</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        ...
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习，好好学习&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T20:13:16.650457&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ordering&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token number">1</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stage&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ...
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C循环&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        ...
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;谁拿了最多奖学金&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Easy&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">]</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        ...
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                ...
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">学习计划详情 - IsStaff</p><p><code>/api/train/admin/plan/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回学习计划详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/train/admin/plan/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习，好好学习&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T20:13:16.650457&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ordering&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token number">1</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stage&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C循环&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ...
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;谁拿了最多奖学金&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Easy&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                ...
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改学习计划 - IsStaff</p><p><code>/api/train/admin/plan/{id}/</code> <code>PUT</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 LearningPlan 的 <code>id</code> 来修改学习计划。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT http://127.0.0.1:8000/api/train/admin/plan/2/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;学习C语言&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stage&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ordering&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C语言学习&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;学习C语言&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T20:13:16.650457&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ordering&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token number">2</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stage&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C循环&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ...
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;谁拿了最多奖学金&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Easy&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                ...
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改学习计划 - IsStaff</p><p><code>/api/train/admin/plan/{id}/</code> <code>PATCH</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 LearningPlan 的 <code>id</code> 来部分修改学习计划。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PATCH http://127.0.0.1:8000/api/train/admin/plan/2/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;学习C语言&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;学习C语言&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;学习C语言&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T20:13:16.650457&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ordering&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token number">2</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stage&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C循环&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;problems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ...
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;谁拿了最多奖学金&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Easy&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入门&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;statistics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;Commit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Accepted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;In Queue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Processing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Wrong Answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Runtime Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Internal Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Compilation Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Exec Format Error&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;Time Limit Exceeded&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;done&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                ...
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">删除学习计划 - IsStaff</p><p><code>/api/train/admin/plan/{id}/</code> <code>DELETE</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求来删除学习计划。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE http://127.0.0.1:8000/api/train/admin/plan/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>204 No Content</code> 。</p></details></div><h3 id="announcement-1" tabindex="-1"><a class="header-anchor" href="#announcement-1" aria-hidden="true">#</a> Announcement</h3><div class="hint-container info"><p class="hint-container-title">创建公告 - IsStaff</p><p><code>/api/ann/admin/</code> <code>POST</code></p><details class="hint-container details"><summary>接口使用</summary><p>通过以下请求数据来创建公告。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token comment">/*
    &quot;training&quot;: 1 // 归属于某个训练比赛的公告，非必填
    */</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>201 Created</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:53:58.807143&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_update_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:53:58.807158&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">公告列表 - IsStaff</p><p><code>/api/ann/admin/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回公告列表。</p><p><strong>Query Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>查询方式</th><th>对应实体字段</th></tr></thead><tbody><tr><td>标题</td><td>模糊查询</td><td>Announcement.title</td></tr><tr><td>内容</td><td>模糊查询</td><td>Announcement.content</td></tr></tbody></table><p><strong>Filter Parameter 支持参数</strong></p><table><thead><tr><th>参数</th><th>对应实体字段</th><th>排序字段</th></tr></thead><tbody><tr><td>创建日期</td><td>Announcement.created_time</td><td>created_time</td></tr></tbody></table><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;previous&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        ...
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:43:22.762877&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_update_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:43:22.762891&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">公告详情 - IsStaff</p><p><code>/api/ann/admin/{id}/</code> <code>GET</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求返回公告详情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET http://127.0.0.1:8000/api/ann/admin/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:43:11.910721&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_update_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:43:11.910732&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改公告 - IsStaff</p><p><code>/api/ann/admin/{id}/</code> <code>PUT</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 Announcement 的 <code>id</code> 来修改公告。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT http://127.0.0.1:8000/api/ann/admin/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告修改&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告测试公告修改&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:43:11.910721&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_update_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-05T15:36:44.119462&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">修改公告 - IsStaff</p><p><code>/api/ann/admin/{id}/</code> <code>PATCH</code></p><details class="hint-container details"><summary>接口使用</summary><p>使用 Announcement 的 <code>id</code> 来修改公告。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PATCH http://127.0.0.1:8000/api/ann/admin/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;修改公告测试公告测试公告测试公告测试公告测试公告测试公告修改&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回 <code>200 OK</code> 。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;比赛测试公告&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;修改公告测试公告测试公告测试公告测试公告测试公告测试公告修改&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-26T19:43:11.910721&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_update_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-04-05T15:37:46.312927&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;training&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10010110&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container info"><p class="hint-container-title">删除公告 - IsStaff</p><p><code>/api/ann/admin/{id}/</code> <code>DELETE</code></p><details class="hint-container details"><summary>接口使用</summary><p>请求来删除公告。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE http://127.0.0.1:8000/api/ann/admin/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功返回 <code>204 No Content</code> 。</p></details></div>`,51);function Q(K,U){const t=o("ExternalLinkIcon");return i(),l("div",null,[u,n("div",r,[d,k,n("details",v,[m,q,b,y,n("table",null,[g,n("tbody",null,[h,n("tr",null,[_,x,n("td",null,[n("a",E,[a("Group.name"),p(t)])])])])]),f])]),j,n("div",T,[$,I,n("details",C,[A,P,O,n("table",null,[w,n("tbody",null,[n("tr",null,[S,N,n("td",null,[n("a",G,[a("Group.name"),p(t)])])]),L])]),R])]),D])}const W=e(c,[["render",Q],["__file","api.html.vue"]]);export{W as default};
