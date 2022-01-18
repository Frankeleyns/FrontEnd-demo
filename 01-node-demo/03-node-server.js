// 引入 http 库
const http = require('http')

// 创建一个 http 服务
http.createServer((req, res) => {
    console.log("访问我的 http 服务器")

    // 设置响应状态码和响应头
    res.writeHead(200,{'content-type' : 'text/html'})
    res.end('<h1>Hello Node Server</h1>')

}).listen(8088)
