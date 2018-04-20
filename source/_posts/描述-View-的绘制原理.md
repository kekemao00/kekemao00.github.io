---
title: 描述 View 的绘制原理.md
comments: true
date: 2018-04-20 15:37:42
tags: View
permalink: view-customize
categories: Android
---

View 的绘制流程主要分为三步：


1. onMeasure：
	测量视图的大小，从顶层父View到子View递归调用measure()方法，measure()调用onMeasure()方法，onMeasure()方法完成绘制工作。

2. onLayout：
	确定视图的位置，从顶层父View到子View递归调用layout()方法，父View将上一步measure()方法得到的子View的布局大小和布局参数，将子View放在合适的位置上。

3. onDraw：
	绘制最终的视图，首先ViewRoot创建一个Canvas对象，然后调用onDraw()方法进行绘制。onDraw()方法的绘制流程为：
	① 绘制视图背景;
	② 绘制画布的图层;
	③ 绘制 View 内容;
	④ 绘制子视图，如果有的话;
	⑤ 还原图层;
	⑥ 绘制滚动条。
