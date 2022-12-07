// a)	Trong file demo.js hãy lấy giá trị của biến test trong file sum.js, hãy in ra các giá trị lớn hơn 5 trong biến test (2 cách), hãy in ra kết quả ở file demo.js( for , filter )
// -	GỢI Ý: để ra ngoài 1 thư mục thì dùng : “ ../ ”
const test = require("./api/sum");
// for (let i = 0; i < test.length; i++) {
//   if (test[i] > 5) {
//     console.log(test[i]);
//   }
// }
let filter = test.filter(function (value, index) {
  if (value > 5) {
    return true;
  }
});
console.log(filter);
// b)	Trong file demo.js hãy lấy giá trị của biến test trong file sum.js, hãy thêm 1 giá trị 7 vào biến test, hãy in ra kết quả ở file demo.js  (gợi ý push)
test.push(7);
console.log(test);
// c)	Trong file demo.js hãy lấy giá trị của biến test trong file sum.js, hãy kiểm tra xem trong biến test có số nào chia hết cho 2 không, hãy in ra kết quả ở file demo.js

let divisible = test.filter(function (value, index) {
  if (value % 2 == 0) {
    return true;
  }
});
console.log(divisible);
