import express from 'express';

const app = express();
const PORT = 3000;

// Ruta que recibe dos variables en la URL
app.get('/saludo/:nombre/:edad', (req, res) => {
    const { nombre, edad } = req.params;
    res.send(`Hola ${nombre}, tienes ${edad} años.`);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
