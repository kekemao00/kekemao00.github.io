# MAC OS 如何卸载 JDK



1. 单击位于停靠栏中的 Finder 图标
2. 单击实用程序文件夹
3. 双击终端图标
4. 在“终端”窗口中，复制和粘贴命令：

```
$ sudo rm -fr /Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin
$ sudo rm -fr /Library/PreferencesPanes/JavaControlPanel.prefPane
$ sudo rm -fr ~/Library/Application\ Support/Java
```
>请勿尝试通过从 /usr/bin 删除 Java 工具来卸载 Java。此目录是系统软件的一部分，下次对操作系统执行更新时，Apple 会重置所有更改。

---
参: [使用终端卸载 Oracle Java]



[使用终端卸载 Oracle Java]:https://www.java.com/zh_CN/download/help/mac_uninstall_java.xml