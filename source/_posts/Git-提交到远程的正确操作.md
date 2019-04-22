---
title: Git 提交到远程的正确操作  
comments: true  
date: 2018-01-23 22:30:37  
tags:   
- Git  
permalink:  
- Git-push-remote  
categories:  
- Git

---

# 第一种,暂存工作区的方式 (stash)

1. 保存当前的工作进度。会分别对暂存区和工作区的状态进行保存

    >stash changes

2. 从远程仓库拉去最新 Code

    >pull

3. 恢复暂存的工作状态

    >unstash changes (Pop stash)

4. 若本地和远程仓库修改了同一行需要整理下代码(若没有,可略过)

    >修改重复行

<!--more-->

5. 此时自己本地的是最新 Code, 跑起来检查下,没问题可以提交了

    >commit files

6. 推到远程仓库

    >push to remote

# 第二种, 合并分支的方式

>commit -> pull -> merge -> push  

方式不同, 但思想都是一样的: 将远程更新的代码和自己的修改在本地合并, 然后再将手中最新 Code 推到远程仓库.
