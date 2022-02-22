// console.log(average([3,4]))
// const average = require("./mod"); 
const mod = require("./mod");//naive way to import mod.js module(means we will have all the things which module.exports(from mod.js module)
                            // will export)
console.log(mod.name) 
console.log(mod.avg([3,4]))
console.log(mod.repo)

console.log("This is index.js"); //for checking