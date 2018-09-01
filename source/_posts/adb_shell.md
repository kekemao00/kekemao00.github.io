---
title:  adb shell
comments: true
date: 2018-09-01 16:01:46
tags: adb
permalink: adb-shell
categories: Shell
---

#  adb shell

- 向文本框输入字符

    ``` bash
    adb shell input text string
    ```

      向当前文本框内输入 "string" 字符，较常用

- 点击动作 (down)

    ```bash
    adb shell input tap 20 20 
    ```

      模拟手指在 (20,20) 坐标点击动作

- 滑动动作 (move)

    ```bash
    adb shell input swipe 30 1 30 100
    ```

    	模拟手指从 (30,1) 到 (30,100) 的滑动动作

- 事件 log

  ```bash
  adb shell getevent -c 10 //输出10条信息后退出
  adb shell getevent -l  //将type、code、value以对应的常量名称显示
  ```

- 查看设备信息

  ```bash
  adb shell devices -l
  ```

- 限制视频录制时间为 10s, 如果不限制,默认180s:

  ```bash
  adb shell screenrecord  --time-limit 10 /sdcard/demo.mp4
  ```

- 指定视频分辨率大小

    ```bash
    adb shell screenrecord --size 1280*720 /sdcard/demo.mp4
    ```

  - 截屏命令：

    ```bash
    adb shell screencap -p /sdcard/screen.png
    
    adb pull /sdcard/screen.png
    
    adb shell rm /sdcard/screen.png
    ```

- 输出安装包的 apk 路径
  ```bash
  adb shell pm path <packages>
  ```

- 删除与包相关的所有数据：清除数据和缓存.

    ```bash
    adb shell pm clear <packageName>
    ```

- 查看正在运行的服务

    ```bash
    adb shell dumpsys activity services <packageName可选>
    ```


    	
