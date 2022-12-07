const fs = require("fs");
const path = require("path");
let link = path.join(__dirname, "create.txt");
let bigFile = fs.createWriteStream(link);
function big(n) {
  for (let i = 0; i < n; i++) {
    // fs.appendFile("./create.txt", `\n${i}: Xin chào Nodemy!`, function () {});
    // fs.createWriteStream();
    bigFile.write(`\n${i + 1}: Xin chào Nodemy!`);
  }
}
// big(100000);
// const createStream = fs.createReadStream(
//   path.join(__dirname, "../../note.txt"),
//   "utf-8"
// );
// createStream.on("readable", () => {
//   console.log(createStream.read());
// });
// createStream.on("end", () => {
//   console.log("ket thuc");
// });
