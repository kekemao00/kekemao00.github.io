title: Hiding the Navigation Bar
date: 2018-1-20 05:06:33
tags: 
 - Navigation Bar
comments: true
categories: 
 - Android
 - UI
permalink: hiding-navigationBar
---

去除虚拟导航

developer.android.com: [Hiding the Navigation Bar]


```java
private void hideSystemNavigationBar() {
        if (Build.VERSION.SDK_INT > 11 && Build.VERSION.SDK_INT < 19) {
            View view = this.getWindow().getDecorView();
            view.setSystemUiVisibility(View.GONE);
        } else if (Build.VERSION.SDK_INT >= 19) {
            View decorView = getWindow().getDecorView();
            int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY | View.SYSTEM_UI_FLAG_FULLSCREEN;
            decorView.setSystemUiVisibility(uiOptions);
        }
    }
```


[Hiding the Navigation Bar]:https://developer.android.com/training/system-ui/navigation.html#behind



