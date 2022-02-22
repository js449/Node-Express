console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
//things which we want to export to index.js will go under the module.exports including functions.
module.exports = {
    avg: average,
    name: "Harry",
    repo: "GitHub"
}
//note - module.export is an object so we can export single object too like this
// module.exports.name = "Harry";