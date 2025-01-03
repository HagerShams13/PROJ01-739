import UserModel from '../../../../Database/Models/user.model.js'
import AppError from '../../../../Middleware/AppError.js'
import HandleError from '../../../../Middleware/HandleGlobalError.js'
import bcrypt from 'bcrypt'
export const getAllUsers =HandleError(async(req,res,next)=>{
    let result = await UserModel.find()
    !result && next(new AppError("Not Found",404))
    res.status(200).json({message:"Success",result})
})
export const getUser =HandleError(async(req,res,next)=>{
    let userId = req.params.id        
    let result = await UserModel.findById(userId)    
    !result && next(new AppError("Not Found",404))
    res.status(200).json({message:"Success",result})
})
export const addUser =HandleError(async(req,res,next)=>{    
    if(!req.body.userName || !req.body.Email ||!req.body.Password || !req.body.Nationality) next(new AppError("Not Found"),400)
    const user = new UserModel({
        userName:req.body.userName,
        Email: req.body.Email,
        Password: req.body.Password,
        Nationality:req.body.Nationality
    });
    const result = await user.save();
    !result && next(new AppError("Not Found",404))
    res.status(201).json({message:"Success",result})
})
export const updateUser =HandleError(async(req,res,next)=>{
    let update = req.body
    !update && next(new AppError("No updates!"),400)
    if(update.Password) {
        let hashedPass = bcrypt.hash(update.Password,process.env.SALT_ROUNDS)
        update.Password = hashedPass
    }
    let result = await UserModel.findByIdAndUpdate(req.params.id,update,{new:true})    
    !result && next(new AppError("Not Found",404))
    res.status(200).json({message:"Success",result})
})
export const deleteUser =HandleError(async(req,res,next)=>{
    let result = await UserModel.findOneAndDelete({_id:req.params.id})
    !result && next(new AppError("User Not Found",404))
    res.status(200).json({message:"Success",result})
})
