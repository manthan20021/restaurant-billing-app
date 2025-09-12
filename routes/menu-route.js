import express from 'express'
let route = express.Router();
import { addMenu, deleteMenu, getMenu, updateMenu } from '../controllers/menuController.js';
import authMiddlerwer from '../middlewares/authMiddleware.js';


route.post("/menu", authMiddlerwer, addMenu);
route.get("/menu/", authMiddlerwer,  getMenu);
route.patch("/menu/put/:id", authMiddlerwer, updateMenu);
route.delete("/menu/delete/:id", authMiddlerwer, deleteMenu);

export default route


