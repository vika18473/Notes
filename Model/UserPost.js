// import sequelize from "./db.js"
// import { DataTypes } from "sequelize"
// import Task from "./task.js";


// const UserPost = sequelize.define(
//     'UserPost',
//     {
//       id: {
//         type: DataTypes.INTEGER(11),
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//         field: 'id'
//       },
//       userId: {
//         type: DataTypes.STRING(1000),
//         allowNull: false,
//         references: {
//           model: 'user',
//           key: 'id' 
//         },
//         field: 'userId'
//       },
//       postId: {
//           type: DataTypes.INTEGER(10),
//           allowNull: true,
//           references: {
//             model: 'task',
//             key: 'id' 
//           },
//           field: 'tasktId'
//         }
//     },)

// const UserPost = sequelize.define('post_user', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

    //UserPost.hasMany(Task, { sourceKey:'postId', foreignKey: 'id', as: 'post' });

   // export default UserPost