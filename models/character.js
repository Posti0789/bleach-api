// models/character.js

module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('Character', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    raza: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cumpleaños: {
      type: DataTypes.STRING,
      allowNull: true
    },
    altura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    afiliacion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ocupacion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shikai: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bankai: {
      type: DataTypes.STRING,
      allowNull: true
    },
    poderes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    habilidades: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nivel_de_poder: {
      type: DataTypes.STRING,
      allowNull: true
    },
    galeria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    historia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    personalidad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    batallas: {
      type: DataTypes.TEXT,
      allowNull: true
    }
    
  }, {
    tableName: 'characters',
    timestamps: true,  // Si usas createdAt y updatedAt
  });

  return Character;
};
