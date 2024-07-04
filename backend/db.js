const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://udaykumar92937:udaykumar92937@cluster0.zgu2afm.mongodb.net/myfoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Database connected successfully");
    // const fetched_data = await mongoose.Connection.db.collection("food_items");
    // fetched_data.find({}).toArray((err, data) => {
    //   if (err) console.log(err);
    //   else console.log(data);

    const foodItems = await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray();
    const foodCategories = await mongoose.connection.db
      .collection("foodCategory")
      .find({})
      .toArray();

    global.food_items = foodItems;
    global.foodCategory = foodCategories;
    // global.food_items = fetchedData;
    //console.log(global.food_items);
    //console.log(fetched_data);
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

module.exports = mongoDB;
