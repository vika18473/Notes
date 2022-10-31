import {Task, UserModel} from "../Model/task.js";

export const getOne = async (req, res) => {
try {
    const {id} = req.params

    const post = await Task.findOne(
        {
            where : {id},
        },
         );
         return res.json(post)
    } catch (err) {
        console.log(err)
         res.status(500).json({message : "Не удалось найти статьи"})
    }
}
    

export const create = async (req,res) => {
    try {
        
        const {title, text} = req.body
        const post = await Task.create({title,text, UserModelId: req.user.id})
      //  await UserModel.update({task : post.id},{where : {id : req.user.id}})
        console.log(req.user)
       // await UserTask.create({TaskId:post.id, UserModelId:req.user.id})
        res.json(post)
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: "Статья не создалась"})
    }
}

export const getAll = async (req, res) => {
    try {
        const posts = await Task.findAll()
        res.json(posts)
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: "Статьи не найдены"})
    }
}

export const update = async(req, res) => {
    try {
        
        const {id} = req.params
        const title = req.body.title
        const text = req.body.text
       const post =  await Task.update({title:title, text: text}, {where: {id} })


        res.json({
            success: true
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: "Статьи не найдены"})
    }
}

export const remove = async(req,res) => {
    try {
        const id = req.params.id
        const post = await Task.destroy(
            {
                where : {id}
            }
        )
        res.json(post)

    } catch (err) {
        
    }
}

export const getMeTask = async (req,res) =>{
    try {
        const {id} = req.user
        const user1 = await UserModel.findOne({where:{id}})
        const UserTask = await Task.findAll({where: {UserModelId:id}})
        if(!user1){
            return res.status(401).json({message:"Пользователь не найден"})
        }
        const {password,...user} = user1.dataValues
        res.status(200).json(UserTask)
    } catch (err) {
        res.status(500).json({message:"Что-то пошло не так!!"})
    }
}