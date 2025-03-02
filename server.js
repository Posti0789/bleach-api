const http = require('http');
const cors = require('cors');
const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
app.use(cors());
app.use(express.json()); // Para manejar JSON en las solicitudes

// Configuración de la base de datos
const bleachDb = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port:3306,
  username: 'root',
  password: '',
  database: 'bleach_db',
});

// Conexión a la base de datos
bleachDb.authenticate()
  .then(() => console.log('Conexión establecida con la base de datos'))
  .catch(err => console.error('No se pudo conectar a la base de datos:', err));

// Importar modelos
const Character = require('./models/character')(bleachDb, Sequelize);
const User = require('./models/user')(bleachDb, Sequelize);

// 📌 GET: Obtener todos los personajes
app.get('/api/characters', async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los personajes' });
  }
});

// 📌 GET: Obtener un personaje por ID
app.get('/api/personajes/:id', async (req, res) => {
  try {
    const personaje = await Character.findByPk(req.params.id); // Busca el personaje por su ID
    if (!personaje) {
      return res.status(404).json({ error: 'Personaje no encontrado' });
    }
    res.json(personaje); // Retorna el personaje en formato JSON
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el personaje' });
  }
});


// 📌 GET: Obtener todos los usuarios
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// 📌 GET: Obtener un usuario por ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

// 📌 POST: Crear un usuario
app.post('/api/users', async (req, res) => {
  try {
    const { nombre, email, password, imagen_perfil, biografia, personajes_favoritos } = req.body;
    const user = await User.create({ nombre, email, password, imagen_perfil, biografia, personajes_favoritos });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// 📌 PUT: Actualizar un usuario
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    await user.update(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

// 📌 DELETE: Eliminar un usuario
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    await user.destroy();
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

// Iniciar el servidor
const port = 3000;
http.createServer(app).listen(port, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${port}`);
});

