let number1 = 10;
let number2 = 20;
const add = require("./sum");
const fs = require("fs");
fs.readFile("../bt-2/demo.txt", "utf-8", function (err, data) {
  console.log(data);
});
// console.log(add);
// console.log(add(number1, number2));
