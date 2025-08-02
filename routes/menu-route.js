import express from 'express'
let route = express.Router();
import { addMenu, getMenu } from '../controllers/menuController.js';
import authMiddlerwer from '../middlewares/authMiddleware.js';


route.post("/menu", authMiddlerwer, addMenu);
route.get("/menu", authMiddlerwer,  getMenu);

// route.put("/menu/put/:id", async (req, res) => {
//   try {
//     let itemId = req.params.id;
//     let updateMenu = req.body;
//     let updatedManu = await manuItem.findByIdAndUpdate(itemId, updateMenu, {
//       new: true,
//       runValidators: true,
//     });
//     res.json(updatedManu);
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal server error",
//       error: error,
//     });
//     console.log(error);
//   }
// });

// route.delete("/menu/delete/:id", async (req, res) => {
//   try {
//     let itemId = req.params.id;
//     let deleteManuById = await manuItem.findByIdAndDelete(itemId);

//     if (!deleteManuById) {
//       res.status(404).json({ message: "item not found." });
//       console.log("user not found");
//     }
//     res.status(200).json({ message: "item deleted sucsessfully" });
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal server error",
//       error: error,
//     });
//     console.log(error);
//   }
// });

export default route
