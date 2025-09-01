import express from 'express'
let route = express.Router();
import { addMenu, deleteMenu, getMenu, updateMenu } from '../controllers/menuController.js';
//import authMiddlerwer from '../middlewares/authMiddleware.js';


route.post("/menu", addMenu);
route.get("/menu",  getMenu);
route.put("/menu/put/:id", updateMenu);
route.delete("/menu/delete/:id", deleteMenu);

export default route
