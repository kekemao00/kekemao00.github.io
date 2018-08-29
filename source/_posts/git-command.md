---
title: GIt-Command
comments: true
date: 2018-05-06 23:54:58
tags: Git  
permalink: git-command
categories: Git
---

# Git 
*[git 使用简易指南]*  
 实用且用过的命令,记录下来
## 修改提交记录  
 ```bash
 git commit --amend --no-edit
 
 git commit --amend -m "fix"
 
 git log --oneline
 ```

 ```bash
 $ echo 'Hello voidint' >> README.md
 $ git add .
 $ git commit --amend --no-edit
 $ git log --oneline
 ```
 eb6c8cb Add README.md // hash值发生了变化

## 日志 
```	bash
$ git log
$ git lg   
$ #
$ git reflog
```

## pull
```bash
1. stash changes()    /revert
2. pull
4. unstash changes (Pop stash)  /合并
5. 修改重复行
5. commit files   
6. push remote
```
---
## 移除文件
```bash
git rm --cached (-r 文件夹) files-path   
```

## 撤销工作区文件的更改

  ```bash
  git checkout -- fileName
  ```

  OR 撤销所有更改

  ```bash
  git checkout -- .
  ```

## 撤销暂存区文件的修改

```bash
git reset HEAD file
```



## 仓库操作

- 查看当前远程仓库

  ```bash
  git remote -v 
  ```

- 查看远程仓库详细信息

  ```bash
  git remote show [remote-name] 
  ```

- 要添加一个新的远程仓库，可以指定一个简单的名字，以便将来引用，运行 

  ````bash
  git remote add [shortname] [url]
  ````

- 移除远程仓库

  ```bash
  git remote rm origin  
  ```

- 从远程仓库抓取数据

  ```bash
  git fetch [remote-name]
  ```

- 推送数据到远程仓库

  ```bash
  git push origin master
  ```

- 远程仓库的删除和重命名

  ```bash
  git remote rename <oldName> <newName>
  git remote rm 
  ```

## 分支操作

*功能分支的名字，可以采用 feature- 的形式命名。*

Git 鼓励大量使用分支：

- __查看分支：__`git branch`

- __创建分支：__`git branch <name>`

- __切换分支：__`git checkout <name>`

- __创建+切换分支：__`git checkout -b <name>`

- __重命名分支:__ `git branch -m oldName newName`

- __合并某分支到当前分支：__`git merge <name>`

- __删除分支：__`git branch -d <name>`

- __删除远程分支( v1.7.0 之后)：__`$ git push origin --delete <branchName>`
- __服务器上获取最新的版本并将你本地主分支指向到它:__
	
	``` bash
	git fetch origin  
	git reset --hard origin/master
	```

## 重写历史提交记录

- __显示 HEAD 更改时间的列表__ `git reflog`  

    *git reflog 可以查看所有分支的所有操作记录（包括（包括 commit 和 reset 的操作），包括已经被删除的 commit 记录，git log 则不能察看已经删除了的 commit 记录，而且跟进结果可以回退道某一个修改, 红色加粗的即是被删除了的*
- __[改变最后的提交]__ `git commit --amend` 或 `git commit --amend -m "fix bug #42"`

- __[清除历史提交记录中的敏感信息]__ `git filter-branch`
- __[更改旧的或多个提交]__ `git rebase`




## Stash 

- `git stash` ,储存
- `git stash pop`
- `git stash list`


## git tag

__含附注的标签:__ 

创建一个含附注类型的标签非常简单，用 -a （译注：取 annotated 的首字母）指定标签名字即可：  

``` bash
$ git tag -a v1.4 -m 'my version 1.4'  
$ git tag  
v0.1  
v1.3  
v1.4  
```


##  其他

- 内建的图形化 git：  

	```bash
	gitk
	```

- 彩色的 git 输出：  

	```bash
	git config color.ui true
	```
  
- 显示历史记录时，只显示一行注释信息：  

	```bash
	git config format.pretty oneline
	```
- 交互地添加文件至缓存区：  

	```bash
	git add -i
	```
	
- 单个文件到指定版本

    ```bash
    git checkout <HEAD> <file> 
    ```

---

[改变最后的提交]:https://www.atlassian.com/git/tutorials/rewriting-history
[更改旧的或多个提交]:改变最后的提交
[清除历史提交记录中的敏感信息]:http://debugtalk.com/post/clean-sensitive-data-from-git-history-commits/
[git 使用简易指南]:http://www.bootcss.com/p/git-guide/

