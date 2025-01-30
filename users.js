const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Sequelize } = require('sequelize');
const cors = require('cors');

const app = express();
const PORT = 3001; // Puerto diferente para esta API
const SECRET_KEY = 'tu_clave_secreta'; // Para generar tokens JWT

app.use(cors());
app.use(express.json()); // Middleware para recibir JSON en requests

// Configuración de la base de datos
const bleachDb = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'bleach_db',
});

// Verificar conexión
bleachDb.authenticate()
  .then(() => console.log('Conexión con la base de datos establecida'))
  .catch(err => console.error('Error en la conexión:', err));

// Modelo de usuario
const User = require('./models/user')(bleachDb, Sequelize);

// 📌 **Registro de usuario**
app.post('/api/users/register', async (req, res) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      nombre,
      email,
      password: hashedPassword,
      imagen_perfil: '',
      biografia: '',
      personajes_favoritos: '[]', // JSON vacío para personajes favoritos
    });

    res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error en el registro' });
  }
});

// 📌 **Login de usuario**
app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Credenciales inválidas' });

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ message: 'Login exitoso', token, user });
  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

// 📌 **Obtener información de un usuario específico**
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
    });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    res.json(user);
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
});

// 📌 **Actualizar perfil de usuario**
app.put('/api/users/:id', async (req, res) => {
  const { nombre, biografia, imagen_perfil, personajes_favoritos } = req.body;

  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    await user.update({
      nombre: nombre || user.nombre,
      biografia: biografia || user.biografia,
      imagen_perfil: imagen_perfil || user.imagen_perfil,
      personajes_favoritos: personajes_favoritos || user.personajes_favoritos,
    });

    res.json({ message: 'Perfil actualizado', user });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`API de Usuarios corriendo en http://localhost:${PORT}`);
});
