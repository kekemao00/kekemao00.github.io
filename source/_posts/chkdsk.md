---
title:  一句话解决硬盘打不开提示格式化
comments: true
date: 2018-05-07 23:55:46
tags: 修复硬盘
permalink: chkdsk
categories: 其他
---

## 需要使用的命令（若故障磁盘为 F）：
```
chkdsk F: /f
```

废话不多说，直接上图：

<a href="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1506442598&amp;di=7034f416468e8a7d73d47de74153e357&amp;imgtype=jpg&amp;er=1&amp;src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F55e736d12f2eb938096abfaed4628535e5dd6f63.jpg"><img class="size-medium" src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1506442598&amp;di=7034f416468e8a7d73d47de74153e357&amp;imgtype=jpg&amp;er=1&amp;src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F55e736d12f2eb938096abfaed4628535e5dd6f63.jpg" alt="无发访问" width="967" height="369" /></a> 无发访问

<a href="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1505848159769&amp;di=45ef35bff2543de198609d8d7c97b327&amp;imgtype=0&amp;src=http%3A%2F%2Fwww.databack.com.cn%2Fd%2Ffile%2FNews%2F2016-02-28%2F7e8de428602d90320321fc19f9e7c35f.jpg"><img class="size-medium" src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1505848159769&amp;di=45ef35bff2543de198609d8d7c97b327&amp;imgtype=0&amp;src=http%3A%2F%2Fwww.databack.com.cn%2Fd%2Ffile%2FNews%2F2016-02-28%2F7e8de428602d90320321fc19f9e7c35f.jpg" alt="提示格式化" width="595" height="198" /></a> 提示格式化

## 解决办法：
<blockquote>
1、单击“开始”，点击“运行”，输入cmd并回车打开命令提示符窗口； 
2、在此窗口输入以下命令： 
例如检查并修复 F 分区： 
```
chkdsk F: /f 
```
回车就会启动 chkdsk 磁盘检查工具扫描D分区了，坐等程序完成就 OK 啦 ！不必格式化几百 G 的数据。
检查其他分区类似。
</blockquote>
<hr>

## 详细的参数说明如下： 
<blockquote>
``` bash
CHKDSK [volume[[path]filename]]] [/F] [/V] [/R] [/X] [/I] [/C] [/L[:size]] 
```
</blockquote>
volume 指定驱动器(后面跟一个冒号)、装入点 
或卷名。 
filename 仅用于 FAT/FAT32: 指定要检查是否有碎片的文件。 
`/F` 修复磁盘上的错误。 
`/V` 在 FAT/FAT32 上: 显示磁盘上每个文件的完整路径和名称。 
在 NTFS 上: 如果有清除消息，将其显示。 
`/R` 查找不正确的扇区并恢复可读信息(隐含 /F)。 
`/L`:size 仅用于 NTFS: 将日志文件大小改成指定的 KB 数。 
如果没有指定大小，则显示当前的大小。 
`/X` 如果必要，强制卷先卸下。 
卷的所有打开的句柄就会无效(隐含 /F)。 
`/I` 仅用于 NTFS: 对索引项进行强度较小的检查。 
`/C` 仅用于 NTFS: 跳过文件夹结构的循环检查。 

`/I` 和 /C 命令行开关跳过卷的某些检查，减少运行 Chkdsk 所需的时间。 

## 报告磁盘错误 

chkdsk 命令会检查磁盘空间和文件分配表 (FAT)以及 NTFS 文件系统的使用情况。Chkdsk 在状态报告中提供特定于每个文件系统的信息。状态报告显示文件系统中找到的错误。在活动分区上运行 chkdsk 时，如果未含 /f 命令行选项，则它可能会因为无法锁定该驱动器而报告虚假信息。应该不定期使用 chkdsk 检查每个磁盘上的错误。 

## 修复磁盘错误 

只有指定 /f 命令行选项，chkdsk 命令才修复磁盘错误。Chkdsk 必须可以锁定驱动器以纠正错误。由于修复通常会更改磁盘的文件分配表，有时还会丢失数据，所以 chkdsk 会首先发送如下所示的确认消息： 
<blockquote>
　　10 lost allocation units found in 3 chains. 
　　Convert lost chains to files? 
</blockquote>
　　如果按 Y，Windows 会在根目录中将所有丢失链保存在一个名为 Filennnn.chk 的文件中。chkdsk 结束后，可以查看这些文件是否包含了所需的数据。如果按 N，Windows 会修复磁盘，但对于丢失的分配单元，它不保存其内容。 
　　如果不使用 /f 命令行选项，则在有文件需要修复时，chkdsk 会发送消息，但它不修复任何错误。 
　　如果在大磁盘（例如，70 GB）或有大量文件（数百万）的磁盘上使用 chkdsk /f，这可能要花很长时间（比如说，数天）才能完成。因为 chkdsk 直到工作完成它才会交出控制权，所以计算机在这段时间内将不可用。 
　　检查 FAT 磁盘 
　　Windows 以下列格式显示 FAT 磁盘的 chkdsk 状态报告： 
　　检查 NTFS 磁盘 
　　Windows 以下列格式显示 NTFS 磁盘的 chkdsk 状态报告： 
　　存在打开文件的情况下使用 chkdsk 
　　如果该驱动器上有打开的文件，则指定 /f 命令行选项后，chkdsk 会发送错误消息。如果未指定 /f 命令行选项并且存在打开的文件，则 chkdsk 会报告磁盘上丢失的分配单元。如果打开的文件没有记录在文件分配表时，可能会发生这种情况。如果 chkdsk 报告大量分配单元丢失，可以考虑修复该磁盘。 
　　查找物理磁盘错误 
　　使用 /r 命令行选项可查找文件系统中的物理磁盘错误。有关使用 recover 修复物理性损坏文件的信息，请参阅“”。 
　　报告磁盘坏扇区 
　　在磁盘第一次准备运行时，chkdsk 报告的坏扇区标记为损坏。它们不会造成危险。

参：<a href="http://www.jb51.net/softjc/60642.html" target="_blank">http://www.jb51.net/softjc/60642.html</a>

<a href="http://blog.kekemao.top">独角博客</a><i>-更新于-2017-9-20</i>
