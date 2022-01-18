// 声明常量
const SCHOOL = '清华'
console.log(SCHOOL);

// 报错，常量不允许修改，下面这段会报错
// SCHOOL = '北大'
// console.log(SCHOOL);

// 报错，常量必须给初始值
// const A;

// 常量变量不能改，但常量指向的对象和数组可以改，因为内存地址没变更
//如果重新指向内存地址就会报错，比如： TEAM = ['IG', 'FPX']
const TEAM = ['RNG', 'WE', 'EDG']
console.log(TEAM);
TEAM.push('TOP')
console.log(TEAM);