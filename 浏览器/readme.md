# 浏览器

### 缓存

浏览器缓存分为强制缓存和协商缓存。

**强制缓存**：获取资源时，需要检查是否命中强制缓存，在 http1.0 中是通过检查 expires(到期时间，但其可能会出现服务器时间和本地时间不同的情况，所以很快被废弃),在 http1.1 中是通过 cache-control 来判断，其中 max-age 表示最大过期时间，no-cache（不使用强制缓存，但是还是会缓存资源的）,no-store(不进行任何缓存)

**协商缓存**:如果没有命中强制缓存，则会进行协商缓存，即发起 http 请求，询问服务器，一般会带上缓存 tag，有两种 last-modified（文件最后修改时间）和 Etag(文件唯一标识)。

### 本地存储

本地存储只要有**cookie sessionStorage localStorage**

**cookie**本意不是用来做存储的，而是用来标识连接状态的。因为 http 是无状态协议，可以用 cookie 来标识用户信息。cookie 的大小也比较小，4KB 左右。并且每次发起请求都会带上 cookie

**sessionStorage**和**localStorage**都是用来做本地存储的，并且不会跟着请求发送出去，大小约为 5MB。sessionStorage 是会话级的，关闭浏览器 tag，就会清除，localStorage 是永久化本地存储，除非手动删除。

### 网络连接请求

1.输入网址之后，首先构建 http 请求头，协议 版本，方法，查找是否具有强制缓存

2.DNS 解析：这步主要是为了查找域名对应的 ip 地址,涉及多级缓存查找。

3.建立 tcp 连接，这里有三次握手

4.发送 http 请求

5.响应 http 请求，并且根据 connection 判断是否需要断开 tcp 连接，如果为 keep-alive 则之后的请求统一服用该连接.

### 资源解析

1.解析 html 构建一个 DOM 树

2.格式化样式，标准化样式单位 计算每个节点的样式

3.生成 layout tree 渲染到页面上

### script 脚本加载

可以查看高级程序设计 4 的第二章，弄清 DOMContentLoaded 和 onload 的区别
