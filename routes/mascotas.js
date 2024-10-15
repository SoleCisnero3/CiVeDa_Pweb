/*const express = require('express');
const router = express.Router();
const Mascota = require('../models/mascota');
const multer = require('multer');
const upload = multer({ dest: 'public/img/' });

// Crear una nueva mascota
router.post('/', upload.single('image'), async (req, res) => {
    const { name, description } = req.body;
    const newMascota = new Mascota({
        name,
        description,
        image: req.file.path,
        history: []
    });
    await newMascota.save();
    res.redirect('/mascotas');
});

// Obtener todas las mascotas
router.get('/', async (req, res) => {
    const mascotas = await Mascota.find();
    res.json(mascotas);
});

module.exports = router;
*/
const express = require('express');
const router = express.Router();

// Almacenamiento de datos en memoria (podrías cambiar esto por MongoDB)
let mascotas = [];

// Ruta para obtener todas las mascotas
router.get('/mascotas', (req, res) => {
  res.json(mascotas);
});

// Ruta para añadir una nueva mascota
router.post('/mascotas', (req, res) => {
  const nuevaMascota = req.body;
  mascotas.push(nuevaMascota);
  res.json({ message: 'Mascota añadida correctamente', mascota: nuevaMascota });
});

module.exports = router;
