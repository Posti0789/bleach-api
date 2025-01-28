const { bleachDb } = require('./database');
const Character = require('./models/character');

// Sincroniza el modelo con la base de datos
bleachDb.sync()  // Sin borrar datos
    .then(() => console.log('Tabla creada correctamente'))
    .catch(err => console.error('Error al crear la tabla:', err));
