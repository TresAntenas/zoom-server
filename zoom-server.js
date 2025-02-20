require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Verificar si las variables de entorno están cargadas
console.log("🔹 ZOOM_CLIENT_ID:", process.env.ZOOM_CLIENT_ID);
console.log("🔹 ZOOM_CLIENT_SECRET:", process.env.ZOOM_CLIENT_SECRET);
console.log("🔹 ZOOM_PORT:", process.env.ZOOM_PORT);

app.post('/api/zoom/generate-token', (req, res) => {
    try {
        const { meetingNumber, role } = req.body;

        if (!meetingNumber || role === undefined) {
            return res.status(400).json({ error: "meetingNumber y role son requeridos" });
        }

        const payload = {
            sdkKey: process.env.ZOOM_CLIENT_ID,
            iat: Math.floor(Date.now() / 1000) - 30,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            mn: meetingNumber,
            role: role
        };

        console.log("🔹 Payload generado:", payload);

        const token = jwt.sign(payload, process.env.ZOOM_CLIENT_SECRET, { algorithm: 'HS256' });
        res.json({ token });
    } catch (error) {
        console.error("🚨 Error en la generación del token:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

const port = process.env.ZOOM_PORT || 5000;
app.listen(port, () => {
    console.log(`✅ Zoom Auth Server corriendo en http://localhost:${port}`);
});

