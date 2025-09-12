import manuItem from "../models/menu-models.js"

//Add Menu
export const addMenu = async (req, res) => {
   try {
    let manuData = new manuItem({
      ...req.body,
      userId: req.user
    });
    let response = await manuData.save();
    res.status(201).json(response);

  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
    console.log(error);
  }
}

// Get Menu
export const getMenu = async (req, res) => {
     try {
    let menuData = await manuItem.find({userId: req.user});
    res.status(200).json(menuData);
  } 
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
    console.log(error);
  }
}

//update menu
export const updateMenu = async (req, res) => {
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
}

//delete menu
export const deleteMenu = async (req, res) => {
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
}