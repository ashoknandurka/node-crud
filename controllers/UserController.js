const userService = require("../services/UserService")

exports.createUser = async (req, res) =>{
    try{
        let user = await userService.createUser(req.body);
        res.json({data:user , status:"success"})
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.findAllUsers = async (req, res) =>{
     try{
         let users =  await userService.findAllUsers();
         res.json({data:users, status:"success"});
     }catch(err){
        res.status(500).json({error:err.message});
     }
}

exports.findUserById = async (req,res) =>{
    try{
        let user =  await userService.findUserById(req.params.id);
        res.json({data:user, status:"success"});
    }catch(err){
        res.status(500).json({error:err.message});
    }
}

exports.updateUser = async (req, res) =>{
    try{
         let user = await userService.UpdateUser(req.params.id);
         res.json({data:user, status:"success"});
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

exports.deleteUserById = async (req, res) =>{
    try{
        let user = await userService.deleteUserById(req.params.id);
        res.json({data:user, status:"success"});
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}