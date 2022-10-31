import express from "express"
import dotenv from "dotenv"
import sequelize from "./Model/db.js"
import * as  TaskController from "./Controller/TaskController.js"
import * as  UserController from "./Controller/UserController.js"
import checkAuth from "./auth/checkAuth.js"
import handlerValidationErrors from "./auth/handlerValidationError.js"
import {registerValidation, LoginValidation, PostCreateValidation} from "./validation.js"
dotenv.config() 

const app = express()
const port = process.env.PORT || 3002


app.use(express.json())

app.post("/auth/register", registerValidation, handlerValidationErrors , UserController.register)
app.post("/auth/login", LoginValidation, handlerValidationErrors , UserController.login)
app.get("/auth/me/",checkAuth,  UserController.getMe)

app.get("/task/:id", TaskController.getOne)
app.get("/meTask",checkAuth,  TaskController.getMeTask)
app.get("/tasks", TaskController.getAll)
app.post("/task",checkAuth, PostCreateValidation, handlerValidationErrors, TaskController.create)
app.delete("/tasks/:id", checkAuth, TaskController.remove)
app.patch("/tasks/:id", checkAuth,  PostCreateValidation, handlerValidationErrors, TaskController.update)

const start = async()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(port,()=>{
            console.log(`Server ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}


start()



