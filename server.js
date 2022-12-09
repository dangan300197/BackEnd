// import puppeteer from 'puppeteer';
const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ headless: false }); // default is true
  const page = await browser.newPage();

  await page.goto("https://kenh14.vn");

  // Wait for suggest overlay to appear and click "show all results".
  const allResultsSelector = ".sapo-need-trim";
  await page.waitForSelector(allResultsSelector);

  // Extract the results from the page.
  const links = await page.evaluate((allResultsSelector) => {
    return [...document.querySelectorAll(allResultsSelector)].map((anchor) => {
      const title = anchor.textContent.split("|")[0].trim();
      return `${anchor.innerText} - ${anchor.href}`;
    });
  }, allResultsSelector);

  // Print all the files.
  console.log(links.join("\n"));

  await browser.close();
})();

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// var i  = 0
// setInterval(()=>{
//      console.clear();
//      console.log(i);
//      i++
// },1000)
// http.createServer(function (req, res) {
//    fs.readFile(path.join(__dirname,'./index.html'),'utf-8',function(err,data){
//      res.write(data);
//      res.end();
//    })

//   }).listen(3000);
// 200: thành công
// 302: chuyển trang
// 400: bad request,gọi không đúng
// 401: không có quyền truy cập
// 404: not found
// 500: lỗi server
