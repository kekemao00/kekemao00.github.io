# adb input

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
