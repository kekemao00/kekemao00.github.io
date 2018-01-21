title: Java 获取当前行
date: 2018-1-20 05:06:33
comments: true
permalink: java-line
categories: 
 - Java
tags: 
 - Java
 
---
# java 获取当前行


``` java
 /**
     * 获取当前代码行号
     *
     * @return FileName:LineNumber
     */
    public static String getLineInfo() {
        StackTraceElement ste = new Throwable().getStackTrace()[1];
        /**
         ste.isNativeMethod();//本机方法
         ste.getClassName();//类名
         ste.getFileName();//文件名
         ste.getLineNumber();//行号
         ste.getMethodName();//方法名*/
        return "--- File: " + ste.getFileName() + ",  Class: " + ste.getClassName() + ",  Method: " + ste.getMethodName() + "(),  Line: " + ste.getLineNumber();
    }
```