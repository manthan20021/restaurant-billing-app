import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    itemName:{
        type:String,
        require:true,
        minlength:3,
        maxlength:12
    },
    price:{
        type:Number,
        required:true
    },
    itemImg:{
        type:String,
    },
      userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
    
});

const menu = mongoose.model('menu', MenuSchema);
export default menu