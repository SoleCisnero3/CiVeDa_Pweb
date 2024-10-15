const express = require('express');
const router = express.Router();
const Historial = require('../models/historial');

// Agregar historial a una mascota
router.post('/:id', async (req, res) => {
    const { date, treatment, medication, notes } = req.body;
    const newHistorial = new Historial({
        petId: req.params.id,
        date,
        treatment,
        medication,
        notes
    });
    await newHistorial.save();
    res.redirect(`/historial/${req.params.id}`);
});

// Obtener historial de una mascota
router.get('/:id', async (req, res) => {
    const historial = await Historial.find({ petId: req.params.id });
    res.json(historial);
});

module.exports = router;
