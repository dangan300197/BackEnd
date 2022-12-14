const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/b3backend");

const ProductSchema = mongoose.Schema(
  {
    nameProduct: String,
    quantity: Number,
    status: String,
  },
  { collection: "Product" }
);

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
let a = [];
for (let i = 1; i < 101; i++) {
  a.push({
    nameProduct: `sp${i}`,
    quantity: Math.floor(Math.random() * 100 + 1),
  });
}
// ProductModel.insertMany(a)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

ProductModel.find({ quantity: { $lt: 5 } })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
ProductModel.updateMany({ quantity: { $lt: 5 } }, { status: "Sắp hết hàng!" })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
