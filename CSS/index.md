## 盒模型

怪异盒模型和标准盒模型，两者的区别就是标准盒模型中 width 等于 content-width，不包括 padding 和 border，怪异盒模型中，width 等于 content-width + padding + border。box-sizing 可以控制其切换

## margin 纵向重叠

相邻元素的 margin-top 和 margin-bottom 会发生重叠，如果相邻元素有空元素，则不计算

## margin 负值

margin-top 和 margin-left 设置负值之后，自身元素会移动，margin-right 和 margin-bottom 设置负值以后，相邻元素会移动

## BFC

块级格式上下文，它会形成自己的一块独立渲染区域，不受外界影响

常见的触发方式有 absolute fixed ，overflow 不是 visible ，display table 等等

## 布局

主要就是浮动，两边固定，中间自适应

## flex 布局

flex 的容器属性 和 元素属性

## 居中

主要需要按照块级和内敛元素来回答，回答的要全面一点

## 属性继承

line-height 的继承 如果是百分比，则先计算父元素的 line-height，再给予继承

## 响应式

rem 媒体查询 移动端可以让 ui 设计 750 的稿子，然后设置根元素的 font-size 为 clientWidth / 7.5,监听 onresize 事件，重新设置根元素的值
