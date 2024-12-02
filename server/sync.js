const sequelize = require("./config/db"); // Path ke file koneksi database
const Karir = require("./models/Karir"); // Path ke model Karir

sequelize
  .sync({ force: true }) // Hapus dan buat ulang tabel
  .then(() => {
    console.log("Tabel Karir telah diperbarui!");
    process.exit(); // Keluar dari proses setelah selesai
  })
  .catch((err) => {
    console.error("Gagal memperbarui tabel: ", err);
    process.exit(1); // Keluar dengan kode error jika gagal
  });
