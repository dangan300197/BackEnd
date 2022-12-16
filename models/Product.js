const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/b3backend");

const ProductSchema = mongoose.Schema(
  {
    name: String,
    categoryId: {
      type: String,
      ref: "Category",
    },
    price: Number,
    options: [
      {
        optionName: String,
        quantity: Number,
        price: Number,
      },
    ],
  },
  { collection: "product" }
);
const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;
