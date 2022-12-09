const { exec, execFile, fork, spawn } = require("child_process");
const http = require("http");
const fs = require("fs");
const path = require("path");
http
  .createServer(function (req, res) {
    fs.readFile(
      path.join(__dirname, "../index.html"),
      "utf-8",
      function (err, data) {
        res.write(data);
        res.end();
      }
    );
  })
  .listen(3000);

exec("start chrome http://localhost:3000", function (err, stdout) {});
// console.log(exec);
