/*import express from 'express'
import cookieParser from 'cookie-parser';

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/civeda', { useNewUrlParser: true, useUnifiedTopology: true });
//Fix para __direname
  
    import path from 'path';
    import { fileURLToPath } from 'url';
    const __dirname =path.dirname(fileURLToPath(import.meta.url));
    import { methods as authentication } from './controllers/authentication.controller.js';
    import { methods as authorization} from './public/middlewares/authorization.js';

//Server
    const app = express();
    const port = process.env.PORT || 5500;
    app.set("port",5500);
    app.listen(app.get("port"));
    console.log("Servidor corriendo en puerto ", app.get("port"));

//configuracion 

    app.use(express.static(__dirname + "/public"));
    app.use(express.json());
    app.use(cookieParser());

//rutas

    app.get("/",authorization.soloPublico, (req,res)=> res.sendFile(__dirname + "/pages/login.html"));
    app.get("/register",authorization.soloPublico, (req,res)=> res.sendFile(__dirname + "/pages/register.html"));
    app.get("/admin",authorization.soloAdmin, (req,res)=> res.sendFile(__dirname + "/pages/admin/admin.html"));
    app.post("/api/register", authentication.register);
    app.post("/api/login", authentication.login);
    */
    const express = require('express');
    const mongoose = require('mongoose');
    const bodyParser = require('body-parser');
    const multer = require('multer');
    const path = require('path');
    
    const app = express();
    const port = process.env.PORT || 3000;
    
    // Conexión a MongoDB
    mongoose.connect('mongodb://127.0.0.1:27017/civeda', { useNewUrlParser: true, useUnifiedTopology: true });
    
    // Middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    // Servir archivos estáticos del directorio public
    app.use(express.static(path.join(__dirname, 'public')));
    
    // Rutas
    const mascotasRoutes = require('./routes/mascotas');
    const trasladoRoutes = require('./routes/traslado');
    const historialRoutes = require('./routes/historial');
    
    // Aquí conectamos las rutas
    app.use('/mascotas', mascotasRoutes);
    app.use('/traslado', trasladoRoutes);
    app.use('/historial', historialRoutes);
    
    // Ruta principal
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
    });
    
    app.get('/login', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'login.html'));
    });
    
    app.get('/mascotas', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'mascotaDetalle.html'));
    });
    
    app.get('/historial', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'historial.html'));
    });
    
    app.get('/traslado', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'traslado.html'));
    });
    
    // Iniciar el servidor
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
    