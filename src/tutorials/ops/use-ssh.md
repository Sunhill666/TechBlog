---
title: SSH 使用指北
date: 2023-09-18
category:
  - ops
tag:
  - SSH
---

## Secure Shell (SSH)

> 以下摘自 [Wikipedia](https://zh.wikipedia.org/zh-hans/Secure_Shell)

安全外壳协议（Secure Shell Protocol，简称SSH）是一种加密的网络传输协议，可在不安全的网络中为网络服务提供安全的传输环境[1]。SSH通过在网络中建立安全隧道来实现SSH客户端与服务器之间的连接[2]。SSH最常见的用途是远程登录系统，人们通常利用SSH来传输命令行界面和远程执行命令。SSH使用频率最高的场合是类Unix系统，但是Windows操作系统也能有限度地使用SSH。2015年，微软宣布将在未来的操作系统中提供原生SSH协议支持[3]，Windows 10 1803版本已提供OpenSSH工具[4]。

在设计上，SSH是Telnet和非安全shell的替代品。Telnet和Berkeley rlogin、rsh、rexec等协议采用明文传输，使用不可靠的密码，容易遭到监听、嗅探和中间人攻击[5]。SSH旨在保证非安全网络环境（例如互联网）中信息加密完整可靠。

## 如何使用 SSH

使用 SSH 需要远程服务器开启 SSH 服务，一般都是开启的，无需关心，剩下需要关心的是如何在本地使用 SSH 连接远程服务器。

我们需要 SSH 客户端来进行此项工作，常见的有 OpenSSH、 WinSCP 和 PuTTY 等客户端软件。常见系统如：Windows、Linux 和 macOS 都默认装有 OpenSSH ，可以在终端中直接使用 `ssh` 命令来进行远程连接，也可以使用图形化界面软件如： Xshell 和 Final Shell 进行连接。

下面主要使用 OpenSSH 讲解，即：`ssh` 命令

## 使用密码进行连接

连接任何远程服务器都需要知道该服务器上启用了 SSH 的用户和密码，例如 `root` 账户。

### 命令格式

```shell
ssh [OPTIONS] [-p PORT] [USER@]HOSTNAME [COMMAND]
```

SSH 默认端口为 22，默认用户名为本地电脑所用账户的名称，如果本地电脑所使用账户的名称为 `zhangsan` ，则：

```shell
ssh -p 6009 192.168.3.3
```

意为使用 SSH 连接 IP 地址为 192.168.3.3 且连接端口为 6009 的主机，该情况很少使用，情况多为：

```shell
ssh root@192.168.3.3
```

即使用 SSH 连接 IP 地址为 192.168.3.3 且连接端口为 22 的主机，使用的用户名为 `root` 。

如顺利连接，则会提示是否接受远程服务器的 `fingerprint` ，输入 yes 接受后输入 `root` 用户的密码即可连接成功。

## 免密登录

事先检查本地用户目录下的 `.ssh` 文件夹下是否存在公钥和私钥，即 `id_` 开头的两个文件，如果有跳过这一步，没有则输入：

```shell
ssh-keygen
```

一路回车就会生成公钥和私钥，不要泄露个人私钥。

使用以下命令将公钥复制到远程服务器

```shell
ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.3.3
```

`~/.ssh/id_rsa.pub` 替换为你本地电脑中，即刚刚生成的公钥文件，后面的用户名和 IP 同理替换成你需要的。
在执行完上述命令之后会提示输入密码，输入后就会将你本地电脑的公钥上传到服务器，这时再使用

```shell
ssh root@192.168.3.3
```

就不会提示输入密码，直接就会连上。可以查看远程服务器上：

```shell
cat ~/.ssh/authorized_keys
```

可以看到已经记录了你的相关连接信息。