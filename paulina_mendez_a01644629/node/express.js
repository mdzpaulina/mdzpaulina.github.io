import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('¡Hola, mundo desde Express.js!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
