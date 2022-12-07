const fs = require("fs");
fs.copyFile("./fileA/test.txt", "./fileB/fileB.txt", function () {
  fs.unlink("./fileA/test.txt", function () {});
});
