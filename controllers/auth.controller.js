const { generateJwt } = require("../helpers/generate-token");
const Role = require("../models/role");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const login = async(req,res)=>{
    try {
        const {email,password}= req.body;
        //verificar si el email existe
        const user = await User.findOne({
            include:[Role],
            where:{email}
        });
        if(!user){
            return res.status(400).json({
                mgs:'Invalid user or password '
            })
        }
        //verificar si el usuario esta activo
        if(!user.isActive){
            return res.status(400).json({
                mgs:'Invalid user or password '
            })
        }
        //verificar la contraseña
        const validPassword = bcrypt.compareSync(password,user.password);
        if(!validPassword){
            return res.status(400).json({
                mgs:'Invalid user or password '
            })
        }
        //generar jwt
        const jwt = await generateJwt(user.id);
        
        delete user.dataValues.password;
        res.json({
            user,
            jwt
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mgs:'Hable con el administrador'
        })
    }
}

module.exports = {
    login
}