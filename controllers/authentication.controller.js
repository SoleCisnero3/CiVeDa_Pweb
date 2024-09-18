import bcriptjs from "bcryptjs";
import  SsonWebToken  from "jsonwebtoken";
import dotenv from "dotenv"


dotenv.config();

const usuarios = [{
    user: "a",
    email: "a@a.com",
    password: "a"
}]




async function login(req, res){
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    if(!user || !password){
        return res.status(400).send({status: "Error", message: "Los campos estan incompletos" });
     }
    const usuarioARevisar = usuarios.find(usuario => usuario.user === user);
    if(usuarioARevisar){
       return res.status(400).send({status: "Error", message: "Error durante el login" });
    }
    const loginCorrecto = await bcriptjs.compare(password,usuarioARevisar.password);
    //console.log(loginCorrecto);
    if(!loginCorrecto){
        return res.status(400).send({status: "Error", message: "Error durante el login" });

    }
    const token = jsonwebtoken.sign(
        {user:usuarioARevisar.user}, 
        process.env.JWT_SECRET,
        {expiresIN:process.env.JWT_EXPIRATION});

        const cookieOption ={
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            path:"/"
        }
    
        res.cookie("jwt",token,cookieOption);
        res.send({status:"ok",message:"Usuario Loggeado", redirect:"/admin"})
}

async function register(req, res) {
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    const email = req.body.email;
    if(!user || !password || !email){
       return res.status(400).send({status: "Error", message: "Los campos estan incompletos" });
    }
    const usuarioARevisar = usuarios.find(usuario => usuario.user === user);
    if(usuarioARevisar){
       return res.status(400).send({status: "Error", message: "Este usuario ya existe" });
    }

    const salt = await bcriptjs.genSalt(5);
    const hashPassword = await bcriptjs.hash(password,salt);
    const nuevoUsuario ={
        user, email, password: hashPassword
    }
    
    usuarios.push(nuevoUsuario);
    console.log(usuarios);
    return res.status(201).send({status:"ok", message:`Usuario ${nuevoUsuario.user} agregado`, redirect:"/" });
}

export const methods = {
    login,
    register
}