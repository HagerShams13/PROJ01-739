import express from 'express';
import {getAllUsers, getUser, addUser, updateUser, deleteUser} from '../Controllers/user.controller.js'
const userRouter = express()
//Get all users
userRouter.get('/',getAllUsers)
//Get user by id
userRouter.get('/:id',getUser)
//Create user
userRouter.post('/',addUser)
//Update user
userRouter.patch('/:id',updateUser)
//Delete user
userRouter.delete('/:id',deleteUser)
export default userRouter;