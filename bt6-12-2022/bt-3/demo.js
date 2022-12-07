// Bài 3:  -  Tạo file tên là demo.js, nội dung của file demo.js như sau:
//         var number1= 10;
//         var number2 = 20;
//     - Tạo một file cùng cấp với thư mục api, file đó tên là sum.js,
//yêu cầu: Trong file sum.js hãy lấy giá trị của biến number1 , number2
//trong file demo.js và cộng number1+number2 ,
//rồi in ra kết quả cộng 2 số đó ở file sum.js
let number1 = 10;
let number2 = 20;
console.log(number1);
module.exports = { number1, number2 };
