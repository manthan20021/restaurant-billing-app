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
        require:true
    },
    itemImg:{
        type:String,
    }
    
});

const menu = mongoose.model('menu', MenuSchema);
export default menu