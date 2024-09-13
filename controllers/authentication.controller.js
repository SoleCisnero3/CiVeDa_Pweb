import bcriptjs from "bcryptjs";


const usuarios = [{
    user: "a",
    email: "a@a.com",
    password: "a"
}]




async function login(req, res){

}

async function register(req, res) {
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    const email = req.body.email;
    if(!user || !password || !email){
        res.status(400).send({status: "Error", message: "Los campos estan incompletos" });
    }
    const usuarioARevisar = usuarios.find(usuario => usuario.user === user);
    if(usuarioARevisar){
        res.status(400).send({status: "Error", message: "Este usuario ya existe" });
    }

    const salt = await bcriptjs.genSalt(5);
    const hashPassword = await bcriptjs.hash(password,salt);
    const nuevoUsuario ={
        user, email, password: hashPassword
    }
    console.log(nuevoUsuario)
    usuarios.push(nuevoUsuario)
    res.status(201).send({status:"ok", message:`Usuario ${nuevoUsuario.user} agregado`, redirect:"/" })
}

export const methods = {
    login,
    register
}