// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs"); //The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
//Asynchronous function
fs.readFile("jay.txt", "utf-8", (err, data)=>{
    // console.log(err, data);
    console.log(data);
});
console.log("This is a message"); 
