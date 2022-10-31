// import sequelize from "./db.js"
// import { DataTypes } from "sequelize"
// import Task from "./task.js"
// import UserPost from "./UserPost.js"

// const UserModel = sequelize.define('user', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     email:{type: DataTypes.STRING, unique: true},
//     password: {type: DataTypes.STRING},
    
  
// })


//UserModel.hasMany(UserPost, { foreignKey: 'userId', as: 'user-post'})

// UserModel.hasMany(UserPost)
// UserPost.belongsTo(UserModel)

// Task.hasMany(UserPost)
// UserPost.belongsTo(Task)

// export default UserModel