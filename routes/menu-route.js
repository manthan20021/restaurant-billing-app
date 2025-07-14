const express = require("express");
let route = express.Router();
let manuItem = require("../models/menu-models");

route.post("/menu", async (req, res) => {
  try {
    let manuReq = req.body;
    let manuData = new manuItem(manuReq);
    let response = await manuData.save();
    res.status(200).json(response); 
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
    console.log(error);
  }
});

route.get("/menu", async (req, res) => {
  try {
    let menuData = await manuItem.find();
    res.status(200).json(menuData);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
    console.log(error);
  }
});

route.put("/menu/put/:id", async (req, res) => {
  try {
    let itemId = req.params.id;
    let updateMenu = req.body;
    let updatedManu = await manuItem.findByIdAndUpdate(itemId, updateMenu, {
      new: true,
      runValidators: true,
    });
    res.json(updatedManu);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
    console.log(error);
  }
});

route.delete("/menu/delete/:id", async (req, res) => {
  try {
    let itemId = req.params.id;
    let deleteManuById = await manuItem.findByIdAndDelete(itemId);

    if (!deleteManuById) {
      res.status(404).json({ message: "item not found." });
      console.log("user not found");
    }
    res.status(200).json({ message: "item deleted sucsessfully" });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
    console.log(error);
  }
});

module.exports = route;
