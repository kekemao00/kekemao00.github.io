---
title: Git 常用命令  
comments: true  
date: 2018-01-23 23:43:40  
tags:  Git  
permalink: git-command  
categories: Git 

---

## 几个概念
- 工作区：当前用户编辑的目录
- 暂存区：工作区到版本库的过渡空间
- 版本库：.git 里面保存着每一次提交后的版本
## 常规命令
- `git clone https://github.com/` // 将远程库下载到本地
- `git init` // 初始化一个 Git 仓库
- `git add .` // 将工作区内容添加到暂存区（使用 -A 也可以）
- `git status` // 查看状态
- `git commit -m ‘comment’` // 将暂存区的内容提交到版本库
- `git remote add origin https://github.com/` // 与远程库建立关联
- `git push origin branchName` // 将本地版本库内容提交到远程分支，第一次需要加 -u
- `git pull origin branchName` // 将远程分支拉到本地后通过git merge合并
- `git pull –rebase branchName` // 将远程分支拉到本地后通过git rebase合并
- `git log –pretty=oneline –pragh` // 查看日志
- `git checkout -b branchName` // 从当前版本库创建一个分支，并切换到该分支
- `git branch` // 查看所有分支
- `git branch -D branchName` // 删除分支
- `git reset –hard HEAD` // 丢弃工作区和暂存区的所有更改
- `git checkout – fileName` // 丢弃工作区的文件更改
- `git checkout <HEAD> <file>` 单个文件到指定版本
- `git stash` // 将当前分支的内容暂存起来，等价 git stash push
- `git stash list` // 列出当前分支缓存的内容
- `git stash pop` // 拿出当前分支缓存的内容
- `git fectch origin branchName` // 将远程分支拉到本地
- `git merger branchName` // 将分支合并到本地
- `git rebase branchName` // 合并分支到本地
- `git diff HEAD` // 将工作区与当前版本库对比
## 不常用命令
- `git tag ‘v1.0’ // 打标签
- `git tag -d ‘v1.0’` // 删除标签
- `git branch -a` // 查看所有分支（包括远程分支）
- `git branch -r` // 只查看远程分支
- `git rm fileName` // 从 Git 中删除文件
- `git mv oldName newName` // 文件改名
- `git commit -am “init”` 提交并且加注释
- `git config –list` // 查看用户信息
- `git grep ‘something’` // 文件内容搜索
- `git reflog` // 分支等引用变更记录管理
- `git show-branch` // 显示分支列表及拓扑关系
- `git count-objects` // 显示松散对象的数量和磁盘占用
- `git filter-branch` // 版本库重构
- `git fsck` // 对象库完整性检查
- `git blame fileName` // 列出文件内容，左侧是对应每行的提交纪录
- `git gc` // 对仓库进行重新打包以节省空间（会定时运行）
- `git revert` // 还原一个版本的修改
## 注意：
- `git pull` 相当于：`git fetch` + `git merge`
- `git mv` 相当于：`mv /git rm` / `git add`
