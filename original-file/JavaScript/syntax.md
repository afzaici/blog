# 语法

## 程序的三大结构
- `顺序结构` - `选择结构` -  `循环结构`
- 什么是顺序结构?
<br/>就是java script 程序是从上到下，从左到右，先后顺序执行的。

- 什么是选择结构?
<br/>就是java script 程序在执行时遇到了分歧，只能选一边去执行，放弃另一边；
<br/>简单理解就是你选老婆，不管你有多少个女朋友，但是只能娶一个做老婆；


- 什么是循环结构?
<br/>就是java script 程序反复执行某些操作，直到满足某些条件才可终止执行(循环)；
<br/>简单理解就是你英语四级老是考不过，所以你要不停的补考，直到考过为止；

## 循环语句
- for 语句
- for...in 语句
- for...of 语句 (ES6添加)
- while 语句
- do...while 语句
<br/>`循环控制↓`
- continue 用于跳过循环中的一个迭代。
- break 语句用于跳出循环。
- label 语句


## for 循环
``` js
// 基础循环
for(step = 0; step < 10; step++){
    console.log(item) // 0 1 2 3 4 5 6 7 8 9
}
// 循环控制
for(step = 0; step < 10; step++){
    if(item%2===0){ com }
    console.log(item)
}

```