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