const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Mengimpor koneksi database

// Definisi model "Karir"
const Karir = sequelize.define("karir", {
  posisi: {
    type: DataTypes.STRING,
  },
  judul: {
    type: DataTypes.STRING,
  },
  kota: {
    type: DataTypes.STRING,
  },
  deskripsi: {
    type: DataTypes.STRING,
  },
  kebutuhan: {
    type: DataTypes.STRING,
  },
});

module.exports = Karir;
