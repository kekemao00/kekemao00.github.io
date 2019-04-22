---
title: 使用 ssh 与远程仓库
comments: true
date: 2019-04-22 00:49:33
tags: ssh
permalink: git-ssh-config
categories: 安全
---

## SSH 概念

SSH (Secure Shell) 是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议。

## Git 仓库克隆方式：https 和 ssh

- https 拿到 URL 即可随便 clone ，但是 push 需要验证用户名和密码
- ssh  clone 之前必须配置 ssh 的 Key，但是在之后的 push，fetch 可以不验证用户名和密码的。
	 _你必须是该项目的拥有者 ，否则你是为 remote 添加公钥的。如果你想要每次都输入账号密码才能进行 fetch 和 push 也可以另外进行设置。_

<!--more-->

## 如何配置 ssh 的 key

- 检查本地是否存在 id_rsa 和 id_rsa.pub 文件：若存在，则不需要重新生成 Key.
```bash
$ cd ~/.ssh/
$ ls
```
  - id_rsa 私钥。保存在本地，作为 remote 的认证文件
  - id_rsa 公钥。里面的内容全部复制，配置在远程 (remote) 仓库。
- 在本地生成一对 Key (私钥和公钥)
```bash
$ ssh-keygen
```
_运行上面的命令以后，系统会出现一系列提示，可以一路回车。其中有一个问题是，要不要对私钥设置口令（passphrase），如果担心私钥的安全，这里可以设置一个。_

此时，在 `~/.ssh/` 目录下生成了两个文件 ：id_rsa 和 id_rsa.pub, 私钥和公钥

- 输入下面的命令，将你的公钥推送到 remote 去。
```bash
$ ssh-copy-id user@host
```
或者 `cat ~/.ssh/id_rsa.pub` 将其内容手动复制到 remote
好了，从此在登录，就不需要输入密码了

- 将私钥保存至 Mac 的钥匙串
```bash
$ ssh-add -K [path/to/your/ssh-key]
```
首先得了解一件事：ssh-add 这个命令不是用来永久性的记住你所使用的私钥的。实际上，它的作用只是把你指定的私钥添加到 ssh-agent 所管理的一个 session 当中。而 ssh-agent 是一个用于存储私钥的临时性的 session 服务，也就是说当你重启之后，ssh-agent 服务也就重置了，session 会话也就失效了。

既然 ssh-agent 是个临时的，那么对于 Mac 来说，哪里可以永久存储的，显然就是 Keychain 了，在执行 ssh-add -K privateKey 后可以打开偏好设置中的 Keychain来观察一下前后的变化，是不是多出了 SSH 的条目.

- 编辑 ssh 的配置文件(ssh 的配置文件 config 有两个，一个用户的一个系统的。这里是用户配置。)

```bash
$ vim ~/.ssh/config
```
config 的配置格式如下：

``` bash
Host github # 别名 可以随便取
    HostName github.com # remote 主机 ip
    User kekemao00 # UserName
    IdentityFile ~/.ssh/id_rsa_note.github # 认证文件
    Port 22 # 端口(默认 22)
Host gitee # 不同项目配置不同的 Key
    HostName gitee.com
    User kekemao
    IdentityFile ~/.ssh/id_rsa_note.github
    Port 22
```
- 登录验证

```bash
ssh -T git@github
```

> Hi kekemao00! You've successfully authenticated, but GitHub does not provide shell access.

如上显示，则大功告成！
