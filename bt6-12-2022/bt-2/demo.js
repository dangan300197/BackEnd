// Bài 2:
//  - Tạo một file demo.txt, có nội dung như sau: Chúc mừng bạn đã ghi file thành công.
// -  Tạo môt file test.txt
// - Hãy đọc file demo.txt và mình chuyển toàn bộ nội dung của file demo.txt, vào file newFile.txt,

// Lưu ý: Giá trị ghi vào file newFile.txt phải đợi kết quả của đọc file.

const fs = require("fs");
fs.readFile("./demo.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("test.txt", data, function () {});
  }
});
