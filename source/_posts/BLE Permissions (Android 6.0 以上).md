title: BLE 始终扫描不到蓝牙
date: 2018-1-20 05:06:33
comments: true
permalink: ble-android6
categories: 
 - Android
 - BLE
tags: 
 - BLE
 - Android
 
---

# BLE 始终扫描不到蓝牙

## 背景  

  _基于公司业务，APP 需要集成蓝牙的扫描，连接，订阅通知等。_
  
## 遇到问题

  码好代码，运行，发现蓝牙始终徘徊在 
  
  > 扫描 > 扫描结束 (timeout) 
  
  各种查阅资料后，找到根本原因：
  
  android 6.0之后要用蓝牙还需要添加一个模糊定位的权限  
  
``` java
  android.permission.ACCESS_COARSE_LOCATION
```
  
- Google 官方文档这样描述
  
  > __Access to Hardware Identifier__
  
  > To provide users with greater data protection, starting in this release, Android removes programmatic access to the device’s local hardware identifier for apps using the Wi-Fi and Bluetooth APIs. The [WifiInfo.getMacAddress()] and the [BluetoothAdapter.getAddress()] methods now return a constant value of _02:00:00:00:00:00_
  
  >To access the hardware identifiers of nearby external devices via Bluetooth and Wi-Fi scans, your app must now have the [ACCESS\_FINE\_LOCATION] or [ACCESS\_COARSE\_LOCATION] permissions:
  
  >- [WifiManager.getScanResults()]
 
  >- [BluetoothDevice.ACTION\_FOUND]
  
  >- [BluetoothLeScanner.startScan()]
  
  >> __Note:__ When a device running Android 6.0 (API level 23) initiates a background Wi-Fi or Bluetooth scan, the operation is visible to external devices as originating from a randomized MAC address.

## 解决问题
  - 只需要在扫描 BLE 设备之前动态向用户申请位置权限
  
    我的代码：

``` java
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {//如果 API level 是大于等于 23(Android 6.0) 时
            //判断是否具有权限
            if (ContextCompat.checkSelfPermission(this,
                    Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
                //判断是否需要向用户解释为什么需要申请该权限
                if (ActivityCompat.shouldShowRequestPermissionRationale(this,
                        Manifest.permission.ACCESS_COARSE_LOCATION)) {
                    Toast.makeText(this, "自Android 6.0开始需要打开位置权限才可以搜索到Ble设备", Toast.LENGTH_SHORT).show();
                }
                //请求权限
                ActivityCompat.requestPermissions(this,
                        new String[]{Manifest.permission.ACCESS_COARSE_LOCATION},
                        REQUEST_CODE_ACCESS_COARSE_LOCATION);
            }
        }
``` 
         
## 结果

问题解决。

<!--以下是本文用到的超链接-->

[WifiInfo.getMacAddress()]:https://developer.android.com/reference/android/net/wifi/WifiInfo.html#getMacAddress()
[BluetoothAdapter.getAddress()]:https://developer.android.com/reference/android/bluetooth/BluetoothAdapter.html#getAddress()
[ACCESS\_COARSE\_LOCATION]:https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_COARSE_LOCATION  
[ACCESS\_FINE\_LOCATION]:https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_FINE_LOCATION
[WifiManager.getScanResults()]:https://developer.android.com/reference/android/net/wifi/WifiManager.html#getScanResults()
[BluetoothDevice.ACTION\_FOUND]:https://developer.android.com/reference/android/bluetooth/BluetoothDevice.html#ACTION_FOUND
[BluetoothLeScanner.startScan()]:https://developer.android.com/reference/android/bluetooth/le/BluetoothLeScanner.html#startScan(android.bluetooth.le.ScanCallback)


