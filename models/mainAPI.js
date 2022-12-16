const ProductModel = require("./Product");
//get data theo page cho sẵn , limit = 10
// function getDataPage(page) {
//   ProductModel.find()
//     .limit(10)
//     .skip(10 * (page - 1))
//     .then((data) => {
//       console.log(8, data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// getDataPage(5);
// =================================================================
// tìm 10 sản phẩm đắt tiền nhất
// ProductModel.find()
//   .sort({ "option.price": -1 })
//   .limit(10)
//   .then((data) => {
//     //     console.log(18, data);
//     data.map((data) => {
//       //  console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//==============================================================================
// tìm số lượng sản phẩm quantity < 5
ProductModel.find({ "options.quantity": { $lt: 5 } }) //
  .then((data) => {
    data.map((value) => {
      //  console.log(value.options[0].quantity);
      console.log(value);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//=====================================================================
// tìm tất cả khách hàng có sinh
