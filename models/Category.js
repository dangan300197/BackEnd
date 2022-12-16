const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/b3backend");

const CategorySchema = mongoose.Schema(
  {
    name: String,
    img: String,
  },
  { collection: "category" }
);
const CategoryModel = mongoose.model("category", CategorySchema);
module.exports = CategoryModel;
