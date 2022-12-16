const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/b3backend");

const OrderSchema = mongoose.Schema(
  {
    listProduct: [
      {
        idProduct: {
          type: String,
          ref: "product",
        },
        amount: Number,
      },
    ],
    customer: {
      type: String,
      ref: "user",
    },
  },
  { collection: "order" }
);
const OrderModel = mongoose.model("order", OrderSchema);
module.exports = OrderModel;
