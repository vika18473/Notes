import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
//import UserModel from "../Model/user.model.js"
import {UserModel, Task} from "../Model/task.js"

const generateJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        "secret123",
        {expiresIn: "24h"}
    )
}

export const register = async (req,res) => {
    try {
        const {email, password} = req.body
        if(!email || !password){
            return res.status(500).json({message:"Некоректый эмеил или пароль"})
        }
         const candidate = await UserModel.findOne({where: {email}})
         if(candidate){
            res.status(500).json({message: "Такой пользователь уже существует"})
         }
         
         const hashPassword = await bcrypt.hash(password, 5)
         const user = await UserModel.create({email, password: hashPassword})
         const token = generateJwt(user.id, user.email)
         res.json({token})
    } catch (err) {
            console.log(err)
        return res.status(500).json({message: "Что-то пошло не так"})
    }
}


export const login = async (req,res) => {
    try {
        const{email, password} = req.body
        const user = await UserModel.findOne({where : {email}})
        if(!user){
            return res.status(400).json({message: "Такого пользователя не существует"})
        }
        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            return res.status(400).json({message: "Не венрый логин или пароль"})
        }
        const token = generateJwt(user.id, user.email)
        res.json(token)
    } catch (err) {
        console.log(err)
        return res.status(400).json({message: "Что-то пошло не так"})
    }
}

export const getMe = async(req,res) => {
    try{
       
    const {id} = req.user
    const user1 = await UserModel.findOne({where:{id}})
    const UserTask = await Task.findAll({where: {UserModelId:id}})
    console.log(user1)
   
    if(!user1){
        return res.status(401).json({message:"Пользователь не найден"})
    }
    const {password,...user} = user1.dataValues
    console.log(user1)
    res.status(200).json(user)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Что-то пошло не так!!"})
    }
}

