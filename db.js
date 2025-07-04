require('dotenv').config();
const mongoose = require("mongoose");


const uri = process.env.MONGODB_URL_LOCAEL;



const DBConnection = async() => {
  if(!uri){
    throw new Error('MONGO_URL not found in .env')
  }
  
  try {
    await mongoose.connect(uri);
    console.log("DB connected sucsessfully");
  } catch (error) {
    console.log("DB connection error: ", error);
  }
};

module.exports = DBConnection;
