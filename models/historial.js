const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    history: [{
        date: Date,
        treatment: String,
        medication: String,
        notes: String
    }]
});

module.exports = mongoose.model('Mascota', mascotaSchema);
