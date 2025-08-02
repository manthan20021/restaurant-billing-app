import manuItem from "../models/menu-models.js"

//Add Menu
export const addMenu = async (req, res) => {
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
}

// Get Menu
export const getMenu = async (req, res) => {
     try {
    let menuData = await manuItem.find();
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