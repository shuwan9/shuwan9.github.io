---
title: 'HTTP常用状态码'
date: '2019-12-20'
spoiler: '<<图解HTTP>>笔记(一)'
src: 'notebook.mp3'
bg: 'notebook.png'
---

状态码的职责是当客户端向服务器端发送请求时，描述返回的请求结果。借助状态码，用户可以知道服务器端是正常处理了请求，还是出现了错误。

状态码的类别:

|          | 类别 | 原因短语 |
|----|----|----|
| 1xx | 信息性 | 接收的请求正在处理 |
| 2xx | 成功 | 请求正常，处理完毕 |
| 3xx | 重定向 | 需要进行附加操作以完成请求 |
| 4xx | 客户端错误 | 服务器无法处理请求 |
| 5xx | 服务器端错误 | 服务器处理请求出错 |

200 (OK)

客户端发来的请求在服务器端正常处理了。
在响应报文内，随状态码一起返回的信息会因方法的不同而发生改变。比如，使用GET方法时，对应请求资源的实体会作为响应返回；而使用HEAD方法时，对应请求资源的实体首部不随报文主体作为响应返回(即在响应中只返回首部，不返回实体的主体部分)。

204 (No Content)