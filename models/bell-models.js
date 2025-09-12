import mongoose, { Schema } from "mongoose"

const bellSchema = mongoose.ceratSchema({
    dishName:{
        type: String,
        required: true,
    },
    dishPrice:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    }
})

const bells = mongoose.model('bells', bellSchema);
export default bells