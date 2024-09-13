import express from 'express';

//Fix para __direname
    import path from 'path';
    import { fileURLToPath } from 'url';
    const __dirname =path.dirname(fileURLToPath(import.meta.url));

    import { methods as authentication } from './controllers/authentication.controller.js';

//Server
    const app = express();
    const port = process.env.PORT || 5500;
    app.set("port",5500);
    app.listen(app.get(port));
    console.log("Servidor corriendo en puerto ", app.get("port"));

//configuracion 

    app.use(express.static(__dirname + "/public"));
    app.use(express.json());

//rutas

    app.get("/", (req,res)=> res.sendFile(__dirname + "/pages/login.html"));
    app.get("/register", (req,res)=> res.sendFile(__dirname + "/pages/register.html"));
    app.get("/admin", (req,res)=> res.sendFile(__dirname + "/pages/admin/admin.html"));
    app.post("/api/register", authentication.register);
    app.post("/api/login", authentication.login);