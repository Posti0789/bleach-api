module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen_perfil: {
      type: DataTypes.TEXT // Puede ser un string base64 o URL
    },
    biografia: {
      type: DataTypes.TEXT
    },
    personajes_favoritos: {
      type: DataTypes.TEXT // Puede ser un JSON string con IDs de personajes
    },
    puntos: {
      type: DataTypes.INTEGER,
      defaultValue: 0 // Valor predeterminado de 0
    },
    nivel: {
      type: DataTypes.INTEGER,
      defaultValue: 1 // Valor predeterminado de 1
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'users',
    timestamps: true
  });
};
