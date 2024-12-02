const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/db"); // Mengimpor koneksi database
// const Karir = require("./models/Karir"); // Mengimpor model "Karir"

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sinkronisasi model dengan database
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized.");
  })
  .catch((err) => {
    console.error("Failed to synchronize database:", err);
  });

// Rute sederhana
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the HRM API." });
});

// Rute untuk model "Karir"
require("./routes/karirRoutes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
