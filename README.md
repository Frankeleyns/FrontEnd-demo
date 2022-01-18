# Node Demo

创建文件夹 **01-node-demo**



## 1. Hello World

① 新建一个 **hello-world.js**，输入如下代码：

```js
console.log("Hello World!")
```

② 打开 cmd

进入到程序所在目录，输入

```bash
node ./hello-world.js
```

然后就可以看到执行结果了！



## 2. 文件读取

① 新建一个 file.txt，放入数据

```json
{
    "name" : "frankeleyn",
    "age" : 21
}
```

② 创建 **02-read-file.js**

```js
// 引入文件库
const fs = require('fs')

// 读取文件
fs.readFile("./file.txt", (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    // 打印文件中的数据
    console.log(data.toString());
})
```

③ 运行

```bash
node ./read-file-02.js
```



## 3. 服务器端介绍

① 创建 **03-node-server.js**

```js
// 引入 http 库
const http = require('http')

// 创建一个 http 服务
http.createServer((req, res) => {
    console.log("访问我的 http 服务器")

    // 设置响应状态码和响应头
    res.writeHead(200,{'content-type' : 'text/html'})
    res.end('<h1>Hello Node Server</h1>')

}).listen(8088)
```

② 运行：

```bash
node ./node-server-03.js
```



之后可以打开浏览器，输入 **localhost:8088**，就能看到结果

![3-1](./img/3-1.png)





# ECMAScript 6

创建文件夹 **02-es6-demo**



## 一、介绍

**ECMA**（European Computer Manufacturers Association）中文名称为欧洲计算机制造商协会，这个组织的目标是评估、开发和认可电信和计算机标准。1994 年后该组织改名为 Ecma 国际。

**ECMAScript** 是由 Ecma 国际通过 ECMA-262 标准化的脚本程序设计语言，而 **ECMAScript 6** 简称 **ES6**。

ES6 和 后端的 Java8 的概念类似。



## 二、基本语法



### 1. let 声明变量

let 和 var 的区别体现在作用域上。var 的作用域被规定为一个函数作用域，而 let 则被规定为块作用域，块作用域要比函数作用域小一些，但是如果两者既没在函数中，也没在块作用域中定义，那么两者都属于全局作用域。

他两的用法则是相同的，var 怎么使用，let 就怎么使用。



创建 **01-let.js**

```js
// 声明变量
let a
let b,c,d
let e = 1
let f = 2, g = 'abc', h = [], i = {}

// 域的作用
{
    var star = 3
    console.log(star);
}
// console.log(star); 报错, star not defined


// console.log(song); 报错: cannot access before initialization
let song = 'Hey Jude'
console.log(song);
```



### 2. const声明常量

创建 **02-const.js**

```js
// 声明常量
const SCHOOL = '清华'
console.log(SCHOOL);

// 报错，常量不允许修改，下面这段会报错
SCHOOL = '北大'
console.log(SCHOOL);

// 报错，常量必须给初始值
const A;

// 常量变量不能改，但常量指向的对象和数组可以改，因为内存地址没变更
// 如果重新指向内存地址就会报错，比如： TEAM = ['IG', 'FPX']
const TEAM = ['RNG', 'WE', 'EDG']
console.log(TEAM);
TEAM.push('TOP')
console.log(TEAM);
```



### 3. 模板字符串

创建 **03-temStr.js**

模板字符串相当于加强版的字符串，用反引号 `，除了作为普通字符串，还可以用来定义多行字符串，还可以在字符串中加入变量和表达式。

```js
// 变量拼接
let name = '撒贝宁'

let find = `${name}真帅`

console.log(find);
```



### 4. 箭头函数

创建 **04-fun.js**

函数式编程，和 java 中的 lambda 差不多

```java
// 函数a
let a = function(n) {
    return n + 100;
}
console.log(a(1));

// 用箭头函数简写 函数a
let b = n => n + 100;
console.log(b(2));
```



### 5. Promise

创建 **05-promise.js**

Promise 是ES6 引入的异步编程的新解决方案。语法上 Promise 是一个构造函数， 用来封装异步操作并可以获取其成功或失败的结果。

```js
// 用 promise 异步读取 file.txt
const { rejects } = require('assert')
const fs = require('fs')

// 实例化 Promise 对象：
// Promise对象有三个状态：初始化、成功、失败
const p = new Promise((resolve, rejects) => {
    fs.readFile('../file.txt', (err, data) => {
        // 当文件读取失败时，reject将Promise对象的状态设置为失败，获取 err 的信息
        if (err) 
            reject(err)
        
        // 读取成功
        resolve(data)
    })
})

p.then(res => {
    // 打印成功信息
    console.log(res.toString());
}).catch(error => {
    // 打印错误信息
    console.log(error.toString());
})
```

