// Bài 8:
// 	a, Tthư mục có file bất kỳ, hãy dùng fs để tạo ra bản sao của file đó

const fs = require("fs");
// fs.copyFile("demo.js", "coppy.txt", function () {});

// 	b, Cho 1 file định dạng bất kỳ (ảnh, video,exel...) hãy dùng fs để tạo ra bản sao của file đó
fs.copyFile(
  "Hinh-nen-may-tinh-an-tuong-nhat.jpg",
  "coppyImg.jpg",
  function () {}
);
// fs.readFile("Hinh-nen-may-tinh-an-tuong-nhat.jpg", function (err, data) {
//   console.log(data);
// });
