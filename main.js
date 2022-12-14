const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/b3backend");
//   .then(() => console.log("Connected!"));

const UserSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  { collection: "User" }
);
const UserModel = mongoose.model("User", UserSchema);
UserModel.find({})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
