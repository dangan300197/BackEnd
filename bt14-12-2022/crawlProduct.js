const puppeteer = require("puppeteer");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/b3backend");

const CrawlProductSchema = mongoose.Schema(
  {
    nameProduct: String,
    price: String,
  },
  { collection: "CrawlProduct" }
);
const CrawlProductModel = mongoose.model("CrawlProduct", CrawlProductSchema);
module.exports = CrawlProductModel;
(async () => {
  const listProduct = [];
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.thegioididong.com/");
  // Wait for the results page to load and display the results.
  // const nameProduct = ".flashsale-block .box-scroll .listproduct .item h3";
  // await page.waitForSelector(nameProduct);

  // Extract the results from the page.
  const productName = await page.evaluate(() => {
    return [...document.querySelectorAll(".item h3")].map((anchor) => {
      const product = anchor.textContent.split(",")[0].trim();
      return `${product}`;
    });
  });
  const price = await page.evaluate(() => {
    return [...document.querySelectorAll(".price")].map((anchor) => {
      const money = anchor.textContent.split("₫")[0].trim();
      return `${money}`;
    });
  });
  listProduct.push({ nameProduct: productName, price: price });
  CrawlProductModel.insertMany(listProduct)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  // Print all the files.
  // console.log(27, productName);
  // console.log(28, price);

  await browser.close();
})();
// console.log(43, listProduct);
