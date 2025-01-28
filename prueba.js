const { bleachDb } = require('./database');

bleachDb.authenticate()
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.error('Error al conectar:', err));
