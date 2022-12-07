const path = require("path");
// // path.join(__dirname)
// const duongDan = path.join(__dirname, "/note.txt");
// console.log(duongDan);
const fs = require("fs");
// fs.readFile(path.join(__dirname, "/note.txt"), function (err, data) {
//   console.log(data);
// });
// let readStream = fs.createReadStream(
//   path.join(__dirname, "/note.txt"),
//   "utf-8"
// );
// let writeStream = fs.createWriteStream(
//   path.join(__dirname, "/newnote.txt"),
//   "utf-8"
// );
// readStream.on("readable", () => {
//   console.log(readStream.read());
// });
// readStream.on("data", (chunk) => {
//   writeStream.write(chunk);
//   console.log(chunk);
// });
// readStream.on("end", () => {
//   console.log("ket thuc");
//   writeStream.close();
// });
// console.log(process.argv[2] + process.argv[3]);
const { exec, execFile, fork, spawn } = require("child_process");

exec("ls", function (err, stdout) {
  console.log(stdout);
});
console.log(exec);
