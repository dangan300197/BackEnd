// bài 1:
//  - Tạo một thư mục tên là api,  trong thư mục api tạo file tên là demo.js,
// nội dung của file demo.js như sau:
//     var test = 10;
//- Tạo một file cùng cấp với thư mục api, file đó tên là sum.js,
// yêu cầu: từ file sum.js hãy lấy giá trị của biến test trong file demo.js và nhân biến đấy với 2,
//rồi in ra kết quả nhân với 2 đó ở file sum.js

const number = require("./demo");
console.log(number * 2);
