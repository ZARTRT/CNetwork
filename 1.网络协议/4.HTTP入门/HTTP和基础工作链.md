# [HTTP和基础工作链](https://course.study.163.com/480000006851432/lecture-480000037171638)

##### 一、http协议

> http协议是一个文本传输协议，传输内容是人类可读的文本，大体分为两部分:
>
> 请求头和返回头

<div><img src="HTTP和基础工作链.assets/image-20210426144828698.png" alt="image-20210426144828698" width="500"/></div>

###### 1.纯文本+无状态

<div><img src="HTTP和基础工作链.assets/image-20210426145009948.png" alt="image-20210426145009948" width="500"/></div>

###### 2.HTTP历史

<div><img src="HTTP和基础工作链.assets/image-20210426145142551.png" alt="image-20210426145142551" width="500"/></div>

###### 3.设计的基础因素

> 前端最重要的两个因素：
>
> 1.跳出率
>
> 2.用户和交互时间

<div><img src="HTTP和基础工作链.assets/image-20210426145344487.png" alt="image-20210426145344487" width="500"/></div>

###### 4.设计考虑因素（性能）--缓存与宽带优化

<div><img src="HTTP和基础工作链.assets/image-20210426145756131.png" alt="image-20210426145756131" width="500"/></div>

###### 5.设计考虑因素--压缩/安全性

<div><img src="HTTP和基础工作链.assets/image-20210426150143307.png" alt="image-20210426150143307" width="500"/></div>

##### 二、https协议

<div><img src="HTTP和基础工作链.assets/image-20210426150350690.png" alt="image-20210426150350690" width="500"/></div>

##### 三、抓包工具

<div><img src="HTTP和基础工作链.assets/image-20210426162731080.png" alt="image-20210426162731080" width="500"/></div>

> 安装步骤：
>
> 1.安装Chrome插件SwitchOmega, 可以在Chrome插件商店搜SwitchOmega， 或离线安装， 安装包地址：https://github.com/FelisCatus/SwitchyOmega/releases/download/v2.5.20/SwitchyOmega_Chromium.crx
>
> 2.安装教程：https://chrome.zzzmh.cn/help?token=setup
>
> 3.在终端：npm install whistle -g  （如果遇上权限报错，请加上sudo）
>
> 4.在终端启动：whistle start