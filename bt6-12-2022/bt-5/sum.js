const test = require("./api/demo");
let length = test.length;
console.log(length);
let newArr = [];
for (let i = 0; i < test.length; i++) {
  newArr.push(test[i] * 2);
}
console.log(newArr);
