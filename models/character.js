const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Character = sequelize.define("Character", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    raza: {
      type: DataTypes.JSON,
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
      type: DataTypes.TEXT,
      allowNull: true
    },
    galeria: {
      type: DataTypes.JSON,
      allowNull: true
    },
    historia: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    personalidad: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    batallas: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  return Character;
};
