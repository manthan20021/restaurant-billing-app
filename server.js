let express = require("express");
const DBConnection = require("./db");
let cors = require('cors')
let app = express();
const bodyParser = require("body-parser");
require('dotenv').config();

//CORS error resolvd
app.use(cors())

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true
}

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
