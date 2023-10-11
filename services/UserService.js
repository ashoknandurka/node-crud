const userModel = require("../models/User");

exports.createUser = async (user)=>{
  console.log("request to create user",user);
  return await userModel.create(user);
}

exports.findAllUsers = async () =>{
  console.log("request to find all users")
  return await userModel.find()
}

exports.findUserById =  async (id) => {
  console.log("request to find user with id",id);
  return await userModel.findById(id);
}

exports.UpdateUser = async (id, user) =>{
  console.log("request to update the user with id", id, user);
  return await userModel.findByIdAndUpdate(id, user)
}

exports.deleteUserById = async (id) => {
  console.log("request to delete the user by id", id);
  return await userModel.findByIdAndDelete(id)
}
// Call this function to insert data
// await insertData();

// async function closeConnection() {
//   try {
//     await client.close();
//     console.log('Connection to MongoDB closed');
//   } catch (error) {
//     console.error('Error closing connection:', error);
//   }
// }

// // Call this function to close the connection
// await closeConnection();
