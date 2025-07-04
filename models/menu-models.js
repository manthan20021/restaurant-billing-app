const { default: mongoose } = require("mongoose");

const MenuSchema = new mongoose.Schema({
    itemName:{
        type:String,
        require:true
    },
    description:{
        type:String
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
module.exports = menu;