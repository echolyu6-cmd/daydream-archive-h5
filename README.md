# 白日梦计划 H5 原型

这是一个手机优先的静态网页 H5 原型，用来验证 V0.4「空间策划与设计档案入口」：

- 白日梦档案室作为空间策划与设计档案入口
- 塑封我的白日梦用于生成一张自己的白日梦档案
- 一起整理你的空间白日梦作为尾厅和轻联系入口
- 每个空间档案统一回答空间卡点、看见了什么、策划判断和最终方案
- 生成结果保留回到档案室和去尾厅的按钮

## 本地打开

直接用浏览器打开：

```text
D:\Codex\Echo-Codex-Lab\白日梦计划\daydream-archive-h5\index.html
```

## 技术边界

- 纯 HTML / CSS / JavaScript
- 无登录
- 无后台
- 无数据库
- 不上传照片
- 不保存用户数据
- 生成档案卡只发生在当前浏览器本地

## 文件

```text
index.html
styles.css
app.js
README.md
```

## 后续替换

空间档案内容在 `app.js` 顶部的 `samples` 数组中。每个档案使用 `unclear`、`seen`、`amplify`、`outcome` 四个字段。尾厅问题卡由 `problemCards` 渲染。
