const person1 = require("./api/demo");

var person3 = person1;
var person2 = {
  name: "thai",
  age: 12,
  car: "BMW",
  price: "30000USD",
};
// console.log(Object.is(person1, person2));
// console.log(Object.is(person1, person3));

function shallowObjectEqual(person1, person2) {
  const keys1 = Object.keys(person1);
  const keys2 = Object.keys(person2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (person1[key] !== person2[key]) {
      return false;
    }
  }

  return true;
}
console.log(shallowObjectEqual(person1, person2));
