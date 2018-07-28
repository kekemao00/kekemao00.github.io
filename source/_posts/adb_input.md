# adb input

- 向文本框输入字符

``` 
adb shell input text string
```

  向当前文本框内输入 "string" 字符，较常用

- 点击动作 (down)

```
adb shell input tap 20 20 
```

  模拟手指在 (20,20) 坐标点击动作

- 滑动动作 (move)

```
adb shell input swipe 30 1 30 100
```

  模拟手指从 (30,1) 到 (30,100) 的滑动动作