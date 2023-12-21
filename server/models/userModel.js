import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        require : true,
        min : 2,
        max : 15
    },
    lastName : {
        type : String,
        require : true,
        min : 2,
        max : 15
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    phoneNumber : {
        type : String,
        require : true,
        max : 10
    },
    location: {
        type : String,
        require : true,
        min : 2,
        max : 100
    },
    password : {
        type : String,
        require : true,
        min : 8,
        max : 20
    }
})

const userModel = mongoose.model("user",userSchema)
export default userModel;