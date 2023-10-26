import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as i,c,a as e,b as s,e as o,f as r}from"./app-e72a71de.js";const l={},t=e("h2",{id:"secure-shell-ssh",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#secure-shell-ssh","aria-hidden":"true"},"#"),s(" Secure Shell (SSH)")],-1),p={href:"https://zh.wikipedia.org/zh-hans/Secure_Shell",target:"_blank",rel:"noopener noreferrer"},h=r(`<p>安全外壳协议（Secure Shell Protocol，简称SSH）是一种加密的网络传输协议，可在不安全的网络中为网络服务提供安全的传输环境[1]。SSH通过在网络中建立安全隧道来实现SSH客户端与服务器之间的连接[2]。SSH最常见的用途是远程登录系统，人们通常利用SSH来传输命令行界面和远程执行命令。SSH使用频率最高的场合是类Unix系统，但是Windows操作系统也能有限度地使用SSH。2015年，微软宣布将在未来的操作系统中提供原生SSH协议支持[3]，Windows 10 1803版本已提供OpenSSH工具[4]。</p><p>在设计上，SSH是Telnet和非安全shell的替代品。Telnet和Berkeley rlogin、rsh、rexec等协议采用明文传输，使用不可靠的密码，容易遭到监听、嗅探和中间人攻击[5]。SSH旨在保证非安全网络环境（例如互联网）中信息加密完整可靠。</p><h2 id="如何使用-ssh" tabindex="-1"><a class="header-anchor" href="#如何使用-ssh" aria-hidden="true">#</a> 如何使用 SSH</h2><p>使用 SSH 需要远程服务器开启 SSH 服务，一般都是开启的，无需关心，剩下需要关心的是如何在本地使用 SSH 连接远程服务器。</p><p>我们需要 SSH 客户端来进行此项工作，常见的有 OpenSSH、 WinSCP 和 PuTTY 等客户端软件。常见系统如：Windows、Linux 和 macOS 都默认装有 OpenSSH ，可以在终端中直接使用 <code>ssh</code> 命令来进行远程连接，也可以使用图形化界面软件如： Xshell 和 Final Shell 进行连接。</p><p>下面主要使用 OpenSSH 讲解，即：<code>ssh</code> 命令</p><h2 id="使用密码进行连接" tabindex="-1"><a class="header-anchor" href="#使用密码进行连接" aria-hidden="true">#</a> 使用密码进行连接</h2><p>连接任何远程服务器都需要知道该服务器上启用了 SSH 的用户和密码，例如 <code>root</code> 账户。</p><h3 id="命令格式" tabindex="-1"><a class="header-anchor" href="#命令格式" aria-hidden="true">#</a> 命令格式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p PORT<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span><span class="token environment constant">HOSTNAME</span> <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>SSH 默认端口为 22，默认用户名为本地电脑所用账户的名称，如果本地电脑所使用账户的名称为 <code>zhangsan</code> ，则：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-p</span> <span class="token number">6009</span> <span class="token number">192.168</span>.3.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>意为使用 SSH 连接 IP 地址为 192.168.3.3 且连接端口为 6009 的主机，该情况很少使用，情况多为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> root@192.168.3.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即使用 SSH 连接 IP 地址为 192.168.3.3 且连接端口为 22 的主机，使用的用户名为 <code>root</code> 。</p><p>如顺利连接，则会提示是否接受远程服务器的 <code>fingerprint</code> ，输入 yes 接受后输入 <code>root</code> 用户的密码即可连接成功。</p><h2 id="免密登录" tabindex="-1"><a class="header-anchor" href="#免密登录" aria-hidden="true">#</a> 免密登录</h2><p>事先检查本地用户目录下的 <code>.ssh</code> 文件夹下是否存在公钥和私钥，即 <code>id_</code> 开头的两个文件，如果有跳过这一步，没有则输入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一路回车就会生成公钥和私钥，不要泄露个人私钥。</p><p>使用以下命令将公钥复制到远程服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub root@192.168.3.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>~/.ssh/id_rsa.pub</code> 替换为你本地电脑中，即刚刚生成的公钥文件，后面的用户名和 IP 同理替换成你需要的。<br> 在执行完上述命令之后会提示输入密码，输入后就会将你本地电脑的公钥上传到服务器，这时再使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> root@192.168.3.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就不会提示输入密码，直接就会连上。可以查看远程服务器上：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到已经记录了你的相关连接信息。</p>`,27);function u(S,b){const a=d("ExternalLinkIcon");return i(),c("div",null,[t,e("blockquote",null,[e("p",null,[s("以下摘自 "),e("a",p,[s("Wikipedia"),o(a)])])]),h])}const g=n(l,[["render",u],["__file","use-ssh.html.vue"]]);export{g as default};
