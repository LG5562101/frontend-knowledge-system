## webpack 的构建流程

1.初始化编译对象 2.注册所有配置的插件，插件监听 webpack 编译过程中的触发的事件，执行编译对象的 run 方法开始编译 3.确定 entry，根据文件构建 ast 语法树，并找出对应的依赖，递归下去.4.在构建过程中根据文件配置，调用对应的 loader 翻译对应的文件。5.根据入口或者分包配置生成的 chunk，输出到文件系统

## webpack 的热更新原理

就是在浏览器和 webpack 本身之间建立了一个 websocket 长连接，当文件发生变化编译完成时，会通过 socket 告诉浏览器准备更新，然后浏览器会通过 JSONP 的方式获取最新的模块代码，完成替换

## treeShaking

就是 esm 可以进行静态分析，从而在编译过程中就可以知道那些代码是无用的，然后剔除掉他们

## 常见 loader

file-loader url-loader css-loader postcss-loader stylus-loader style-loader vue-loader

## 优化

### 构建时优化

1.对于有些不需要 babel 转译的排除 2.可以多进程打包 3.对于某些固定版本的可以生成 dll 文件，然后直接引入

### 生产包优化

1.对于某些静态资源可以使用 cdn 引入,然后配置外部扩展 2.对于一些较小的图片可以打包成 base64,减少 http 请求 3.提取公共代码
