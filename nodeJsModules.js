//go to nodejs modules documentation for more info.
//three types of modules 1. builtin-modules-npm, 2. modules that we can create, 3. thirdparty modules
const fs = require("fs"); //fs module
let text = fs.readFileSync("jay.txt", "utf-8"); // when we want to read a file(Synchronous function)
text = text.replace("learning", "studying"); //replacing "learning" with "studying" in file

console.log("The content of the file is")
console.log(text);

 console.log("Creating a new file...")
 fs.writeFileSync("jay1.txt", text); //writing new text(replaced one) into new file(jay1.txt)
