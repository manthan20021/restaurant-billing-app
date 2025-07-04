let express = require("express");
const DBConnection = require("./db");
let app = express();
const bodyParser = require("body-parser");
require('dotenv').config();


// Middleware to parse JSON bodies
app.use(bodyParser.json());

//importing routes
const menu = require('./routes/menu-route');

//middelwer for rendering routes
app.use("/", menu)


DBConnection().then(() => {
   const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log("server runing on port:3000");
  });
});
