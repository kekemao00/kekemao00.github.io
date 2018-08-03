---
title: Android 屏幕相关代码笔记
comments: true
date: 2018-08-3 22:27:58
tags: note
permalink: note_screen
categories: Android
---

在需要设置进制截屏的 Activity 的生命周期 onCreate() 方法中添加一行代码即可：

- 禁止截屏

```java
getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
```
- 屏幕常亮  

```java
getWindow.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
```

*可放在 BaseActivity 的 onCreate()  中*

