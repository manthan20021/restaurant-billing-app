

import express from 'express'
 let app = express();
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import DBConnection from "./db.js";



dotenv.config();


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
import route from './routes/menu-route.js';


//middelwer for rendering routes
app.use("/",  route)
 

DBConnection().then(() => {
   const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log("server runing on port:3000");
  });
});
