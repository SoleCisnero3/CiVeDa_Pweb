const mongoose = require('mongoose');

const historialSchema = new mongoose.Schema({
    petId: mongoose.Schema.Types.ObjectId,
    date: Date,
    treatment: String,
    medication: String,
    notes: String
});

module.exports = mongoose.model('Historial', historialSchema);
