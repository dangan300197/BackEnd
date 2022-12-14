const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/b3backend");

const UserSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  { collection: "User" }
);
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;

UserModel.create(
  { name: "an", age: 25 },
  { name: "tho", age: 22 },
  { name: "quy", age: 28 },
  { name: "manh", age: 24 },
  { name: "hoang", age: 23 }
)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
