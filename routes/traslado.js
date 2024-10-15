const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configuración del transporte de correo para enviar notificaciones de traslado
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tuemail@gmail.com',
        pass: 'tucontraseña'
    }
});

// Ruta para solicitar un traslado
router.post('/', async (req, res) => {
    const { petName, ownerName, ownerEmail, pickupLocation, destination } = req.body;

    // Aquí puedes agregar la lógica para manejar la solicitud de traslado, como guardar en la base de datos

    // Enviar correo de confirmación
    const mailOptions = {
        from: 'tuemail@gmail.com',
        to: ownerEmail,
        subject: 'Confirmación de Solicitud de Traslado',
        text: `Hola ${ownerName},\n\nTu solicitud de traslado para ${petName} ha sido recibida.\n\nUbicación de recogida: ${pickupLocation}\nDestino: ${destination}\n\nGracias por confiar en CiVeDa.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error al enviar el correo de confirmación.');
        }
        res.status(200).send('Solicitud de traslado recibida y correo de confirmación enviado.');
    });
});

module.exports = router;
