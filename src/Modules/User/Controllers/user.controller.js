import userModel from '../../../../Database/Models/user.model.js'
import AppError from '../../../../Middleware/AppError.js'
export const getAllUsers =async(req,res,next)=>{
    let result = await userModel.find()
    !result && next(new AppError("Not Found",404))
    res.status(200).json({message:"Success",result})
}

export const getUser =async(req,res,next)=>{
    let userId = req.param.id
    let result = await userModel.findById(userId)
    !result && next(new AppError("Not Found",404))
    res.status(200).json({message:"Success",result})
}

export const addUser =async(req,res,next)=>{
    if(!req.body.userName || !req.body.Email ||!req.body.Password || !req.body.Nationality) next(new AppError("Not Found"),400)
    let user = {userName:req.body.userName, Email: req.body.Email, Password: req.body.Password, Nationality:req.body.Nationality }
    let result = await userModel.insertOne(user)
    !result && next(new AppError("Not Found",404))
    res.status(200).json({message:"Success",result})
}

export const updateUser =async(req,res,next)=>{
    let update = req.body
    !update && next(new AppError("Not Found"),400)
    let result = await userModel.findByIdAndUpdate(req.param.id,{update})
    !result && next(new AppError("Not Found",404))
    res.status(200).json({message:"Success",result})
}

export const deleteUser =async(req,res,next)=>{
    let result = await userModel.findOneAndDelete(req.param.id)
    !result && next(new AppError("Not Found",404))
    res.status(200).json({message:"Success",result})
}
