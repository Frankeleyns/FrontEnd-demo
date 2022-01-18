// 引入文件库
const fs = require('fs')

// 读取文件
fs.readFile("../file.txt", (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    // 打印文件中的数据
    console.log(data.toString());
})