module.exports = {
  async up(db, client) {
    let newCat = await db.collection("category").insertMany([
      {
        name: "Iphone",
        img: "",
      },
      {
        name: "Samsung",
        img: "",
      },
    ]);

    let listProduct = [];
    let category = {};
    for (let i = 1; i < 100; i++) {
      if (i % 2 == 0) {
        category.id = newCat.insertedIds[0].toString();
        category.proctName = "Samsung" + i;
      } else {
        category.id = newCat.insertedIds[1].toString();
        category.proctName = "Iphone" + i;
      }
      listProduct.push({
        name: category.proctName,
        categoryId: category.id,
        options: [
          {
            optionName: "Do",
            quantity: Math.round(Math.random() * 100 + 1),
            price: Math.round(Math.random() * 1000000 + 50000),
          },
        ],
      });
    }

    await db.collection("product").insertMany(listProduct);

    return "ok";
  },

  async down(db, client) {
    await db.collection("category").deleteMany({});
    await db.collection("product").deleteMany({});
    return "ok";
  },
};
