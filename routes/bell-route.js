import express from "express";
import authMiddlerwer from "../middlewares/authMiddleware";
import bells from "../models/bell-models";
const route = express.Router();

route.post("/bill/app", authMiddlerwer, async (req, res) => {
  const { userId, menuItemId } = req.body;

  try {
    const bell = await bells.findOne({ userId });

    if (!bell) {
      const bell = new bells({ userId, items: [{ menuItemId }] });
    } else {
      const alreadyExists = bell.items.some(
        (item) => item.menuItemId.toString() === menuItemId
      );

      if (!alreadyExists) {
        bell.items.push({ menuItemId });
      }
    }

    await bell.save();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//get methode

route.get("/bell/:userId", async (req , res) => {
const {userId} =  req.params

try {

    let bell = await bells.findOne({userId}).populate("items.menuItemId");

     if (!bell) {
      return res.status(404).json({ message: "Bell is empty." });
    }

     res.status(200).json(bell.items);
    
} catch (error) {
res.status(500).json(error)
console.log(error);

}
})
