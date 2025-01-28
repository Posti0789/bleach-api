const http = require('http'); // Cambiar de https a http
const cors = require('cors'); // Importar el paquete cors
const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();

// Habilitar CORS para todas las rutas
app.use(cors());

// Configuración de la base de datos
const bleachDb = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'bleach_db',
});

// Conexión a la base de datos
bleachDb.authenticate()
  .then(() => {
    console.log('Conexión establecida con la base de datos');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

// Modelo de personajes (asegúrate de tener este modelo definido)
const Character = require('./models/character')(bleachDb, Sequelize);

// Ruta para obtener los personajes
app.get('/api/characters', async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (error) {
    console.error('Error al obtener los personajes:', error);
    res.status(500).json({ error: 'Error al obtener los personajes' });
  }
});

// Iniciar el servidor HTTP en lugar de HTTPS
const port = 3000;
http.createServer(app).listen(port, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${port}`);
});
