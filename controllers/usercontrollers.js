const User = require('../models/usermodel')


const getAllUsers = async (req , res) =>{
  let users = await User.find()
  if (!users) {
    return res.json({Message : "Nothing found"})
  }
  res.json(users);
} 


const getSingleUser = async (req , res) =>{
  try {
    const id = req.params.userId;

    let singleUser = await User.findById(id)
    if(!singleUser){
      return res.status(404).json({msg : "user not found"})
    }
    res.json(singleUser);

  } catch (error) {
    return  res.status(400).json(error);
}
}

const addNewUser = async (req , res) =>{
  try {
    let addUser = new User(req.body);
    await addUser.save();
    res.json(addUser);
  } catch (error) {
      return  res.status(400).json(error);
  }
  }

  const updateUser = async (req , res) =>{
    try {
      const id = req.params.userId;

      let singleUser = await User.findByIdAndUpdate(id , req.body , {new : true})
      if(!singleUser){
        return res.status(404).json({msg : "user not found"})
      }
      res.json(singleUser);
    } catch (error) {
      return  res.status(400).json(error);
  }

}

const deleteUser = async (req , res) =>{
  try {
    const id = req.params.userId;

    let singleUser = await User.findByIdAndDelete(id)
    if(!singleUser){
      return res.status(404).json({msg : "user not found"})
    }
    res.json({Message : "User deleted successfully"});
  } catch (error) {
    return  res.status(400).json(error);
}

}

module.exports = {
  getAllUsers,
  getSingleUser,
  addNewUser,
  updateUser,
  deleteUser
}