import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        tirm:true,
        required:true,
        unique:true,
        minLength:[4,'Too Short']
    },
    Email:{
        type:String,
        unique:[true,'Email must be unique'],
        tirm:true,
        required:[true,'Email is required'],
        minLength:[12,'Too Short']        
    },
    Password:{
        type:String,
        required:[true,'Password is required'],
        minLength:[6,'Too Short']        
    },
    Nationality:{
        type:String,
        required:[true,'Nationality is required'],
    },
})

const UserModel = mongoose.model('user',UserSchema);
export default UserModel;