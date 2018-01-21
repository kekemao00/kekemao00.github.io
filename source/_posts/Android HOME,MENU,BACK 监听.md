title: Android 中 HOME, MENU, BACK 按键的监听
date: 2018-1-22 01:59:33
tags: 
 - KeyEvent
 - HOME
 - BACK
 - MENU
comments: true
categories: 
 - Android
permalink: keyevent-listen
---

## Back 键的监听

对于 Back 键的监听比较容易, 可以在多个系统回调处拦截, 比如在 activity 的下列方法中都可以收到 Back 键按下的事件:  

```java
<span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start"></span><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start"></span>]
@Override
public void onBackPressed() {
// super.onBackPressed();//注释掉这行,back键不退出activity

Log.i(LOG_TAG, "onBackPressed");
}

@Override
public boolean dispatchKeyEvent(KeyEvent event) {
Log.i(LOG_TAG, "dispatchKeyEvent: keyCode -- " + event.getKeyCode());
return super.dispatchKeyEvent(event);
}

@Override
public boolean onKeyDown(int keyCode, KeyEvent event) {
Log.i(LOG_TAG, "onKeyDown: keyCode -- " + keyCode);

switch (keyCode) {
case KeyEvent.KEYCODE_BACK:
Log.i(LOG_TAG, "KeyEvent.KEYCODE_BACK");
break;
case KeyEvent.KEYCODE_MENU:
Log.i(LOG_TAG, "KeyEvent.KEYCODE_MENU");
break;
case KeyEvent.KEYCODE_HOME:
Log.i(LOG_TAG, "KeyEvent.KEYCODE_HOME");
// 收不到
break;
case KeyEvent.KEYCODE_APP_SWITCH:
Log.i(LOG_TAG, "KeyEvent.KEYCODE_APP_SWITCH");
// 收不到
break;
default:
break;
}

return super.onKeyDown(keyCode, event);

}
```

## Home 键的广播监听

对于 Home 键的监听不是那么容易, 因为 Home 键可以将程序退出放在后台, 所以这个事件是直接分发给系统, 系统接收到之后做相应处理, Home 键的事件不是直接传递到应用里面. 所以在上述监听 Back 键的代码中, 相应的回调中是收不到 Home 键的事件的.  

参考文后的博客链接, 对 Home 键的监听主要通过注册广播接收器实现, 拦截让窗口关闭的系统动作, 然后根据 Intent 里面的具体参数, 分析当前到底是 Home 键, 应用切换键, 还是其他功能按键.

- 接收器实现如下:

```
package com.mengdd.hellohome;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

public class HomeWatcherReceiver extends BroadcastReceiver {
    private static final String LOG_TAG = "HomeReceiver";
    private static final String SYSTEM_DIALOG_REASON_KEY = "reason";
    private static final String SYSTEM_DIALOG_REASON_RECENT_APPS = "recentapps";
    private static final String SYSTEM_DIALOG_REASON_HOME_KEY = "homekey";
    private static final String SYSTEM_DIALOG_REASON_LOCK = "lock";
    private static final String SYSTEM_DIALOG_REASON_ASSIST = "assist";

    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();
        Log.i(LOG_TAG, "onReceive: action: " + action);
        if (action.equals(Intent.ACTION_CLOSE_SYSTEM_DIALOGS)) {
            // android.intent.action.CLOSE_SYSTEM_DIALOGS
            String reason = intent.getStringExtra(SYSTEM_DIALOG_REASON_KEY);
            Log.i(LOG_TAG, "reason: " + reason);

            if (SYSTEM_DIALOG_REASON_HOME_KEY.equals(reason)) {
                // 短按Home键
                Log.i(LOG_TAG, "homekey");

            }
            else if (SYSTEM_DIALOG_REASON_RECENT_APPS.equals(reason)) {
                // 长按Home键 或者 activity切换键
                Log.i(LOG_TAG, "long press home key or activity switch");

            }
            else if (SYSTEM_DIALOG_REASON_LOCK.equals(reason)) {
                // 锁屏
                Log.i(LOG_TAG, "lock");
            }
            else if (SYSTEM_DIALOG_REASON_ASSIST.equals(reason)) {
                // samsung 长按Home键
                Log.i(LOG_TAG, "assist");
            }

        }
    }

}
```

_注意不同手机的按键不同, 所以需要对不同理由做区分._

## Home 键监听广播注册

- 广播接收器的注册有两种方式

  - 一种是静态注册, 即写在 manifest 里面声明;
  - 另一种是动态注册, 即在 Java 代码里面注册.
  
上面对 Home 键实现监听的这个 receiver,静态注册如下:

```java
 <receiver android:name="com.mengdd.hellohome.HomeWatcherReceiver" >
            <intent-filter>
                <action android:name="android.intent.action.CLOSE_SYSTEM_DIALOGS" />
            </intent-filter>
        </receiver>
```
<span style="color: red;">但是发现静态注册不起作用,即收不到 onReceive 回调.</span>

<a href="http://blog.kekemao.top">独角博客</a><font color="skyblue"> 转自：<a href="http://blog.csdn.net/cc20032706" rel="noopener" target="_blank">摄氏三十七度</a>的 <a href="http://blog.csdn.net/cc20032706/article/details/49472425" rel="noopener" target="_blank">Android Back Home 键监听_广播监听</a></font>