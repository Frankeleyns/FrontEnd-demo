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