const mongoose = require("mongoose");
const ProductModel = require("./Product");
const UserModel = require("./User");
mongoose.connect("mongodb://localhost:27017/b3backend");

const OrderSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      ref: "User",
    },
    productId: {
      type: String,
      ref: "Product",
    },
  },
  { collection: "Order" }
);
const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;
// OrderModel.create({
//   userId: "63994c07f7092d9664baf3b6",
//   productId: "639943d2eb700eff895bd27f",
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

OrderModel.find({ _id: "6399539e7dfbc28bb52a6754" })
  .populate("userId")
  .populate("productId")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
