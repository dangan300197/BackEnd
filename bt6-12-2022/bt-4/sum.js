// Bài 4
//   - Tạo một thư mục tên là api,  trong thư mục api Tạo một file cùng cấp với thư mục api, file đó tên là sum.js,  nội dung của file sum.js như sau:
// 	function add(number1,number2){
//       return number1+number2
// 	}
//     -  tạo file tên là demo.js cùng cấp với thư mục api
// yêu cầu: Trong file demo.js hãy truyền 2 giá trị number1 = 10,number2 = 20
//vào function add của file sum.js sau đó in kết quả ở file demo.js, lưu ý khi truyền giá trị 2 tham số number1 và number2 phải thực hiện trong file demo.js, file sum.js không được thực hiện bất kì phép toán nào.
const { number1 } = require("./demo");
const { number2 } = require("./demo");

function add(number1, number2) {
  return number1 + number2;
}
module.exports = { add };
