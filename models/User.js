const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/b3backend");

const UserSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    bod: Date,
  },
  { collection: "user" }
);
const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
