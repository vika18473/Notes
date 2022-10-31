import sequelize from "./db.js"
import { DataTypes } from "sequelize"
// import UserModel from "./user.model.js";
// import UserPost from "./UserPost.js";

const Task = sequelize.define('Task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, unique: true, allowNull: false},
    text: {type: DataTypes.STRING, unique: true, allowNull: false},
   // user :{ type: DataTypes.INTEGER, references: {model : UserModel, key: "id"}}
  
  
})

// const UserPost = sequelize.define('post_user', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

const UserModel = sequelize.define('UserModel', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    //task :{ type: DataTypes.INTEGER, references: {model : Task, key: "id"}}
    
    
  
})

// const UserTask = sequelize.define('UserTask', {
//     TaskId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Task, // или 'Movies'
//         key: 'id'
//       }
//     },
//     UserModelId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: UserModel, // или 'Actors'
//         key: 'id'
//       }
//     }
//   })
  

// Task.belongsToMany(UserModel, { through: UserTask })
// UserModel.belongsToMany(Task, { through: UserTask })
 UserModel.hasMany(Task)
 Task.belongsTo(UserModel)

// UserModel.hasMany(UserPost)
// UserPost.belongsTo(UserModel)

// Task.hasMany(UserPost)
// UserPost.belongsTo(Task)

// Task.belongsTo(UserModel, { foreignKey: 'id', as: 'user' }); 
// Task.belongsTo(UserPost, { foreignKey: 'postId', as: 'userspost' })

export {Task, UserModel}