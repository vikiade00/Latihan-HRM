const { Sequelize } = require("sequelize");

// Konfigurasi koneksi ke database
const sequelize = new Sequelize("db_hrm", "root", "", {
  host: "localhost", // Ganti dengan host database Anda
  dialect: "mysql", // Dialek untuk MySQL
  pool: {
    // Konfigurasi koneksi pool
    max: 5, // Jumlah maksimum koneksi
    min: 0, // Jumlah minimum koneksi
    acquire: 30000, // Timeout untuk mendapatkan koneksi (ms)
    idle: 10000, // Timeout idle (ms)
  },
});

// Fungsi untuk menguji koneksi
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// Panggil fungsi untuk menguji koneksi
testConnection();

// Ekspor koneksi
module.exports = sequelize;
