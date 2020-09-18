---
title: '异步操作按序执行'
date: '2020-01-01'
spoiler: promise sequence
---
<p style="display:none;">
    audioPlayerSrc:'https://shuw.gitee.io/server/music/hot-river.mp3'
    audioPlayerBg:'https://shuw.gitee.io/server/music/hot-river.png'
<p>

先上一段代码

```jsx
const getPromise = num => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(num)
      resolve()
    }, Math.random() * 1000)
  })
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums.forEach(num => getPromise(num))
```
这段代码会在控制台输出什么呢？答案是：会乱序输出数组nums的每一项，并且每一次运行输出的顺序都不一样(因为这里面setTimeout的间隔是个随机值)。

实际上，上面的代码模拟了10个异步操作的同步执行，并且完成每个异步操作所需的时间是随机的。

而实际项目中，常常会遇到这样的情况：一个异步操作会依赖于另一个异步操作的结果，所以只有等一个异步操作完成了之后，才可以执行另一个异步操作。即异步操作的按序执行。

对应上面的代码，就是要按顺序输出数组nums的每一项。当然最简单的方式就是callback了，但是上面有10个异步操作，其实已经是callback hell了。

用promise的实现，如下：

```jsx
const getPromise = num => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(num)
      resolve()
    }, Math.random() * 1000)
  })
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums.reduce(
  (pre, num) =>
    pre.then(() => {
      return getPromise(num)
    }),
  Promise.resolve()
)

```

上面的实现用了Array.prototype.reduce，代码看起来是有点抽象的，简单理解就是拼接了一串.then。

用async,await来实现则显得优雅了许多——但其实javascript引擎在背后做了很多，这是更高的抽象。

```jsx
const getPromise = num => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(num)
      resolve()
    }, Math.random() * 1000)
  })
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
;(async function(){
    for(const num of nums){
        await getPromise(num)
    }
})()
```

