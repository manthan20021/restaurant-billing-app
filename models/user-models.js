import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
   restaurantname:{    
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:String
    },
    role:{
        type:String,
        enum:["user", "admin"],
        default:"user"
    }
})

const User = mongoose.model('user', userSchema);
export default User;


//   "password": "testuser123",
    //"email": "test@gmail.com",