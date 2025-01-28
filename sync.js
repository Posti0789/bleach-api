const { bleachDb } = require('./database');
const Character = require('./models/character');

// Sincroniza el modelo con la base de datos
bleachDb.sync({ force: true }) // Esto creará las tablas desde cero
    .then(() => console.log('Tabla creada correctamente'))
    .catch(err => console.error('Error al crear la tabla:', err));
