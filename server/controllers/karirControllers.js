const { Op } = require("sequelize"); // Mengimpor operator Sequelize
const Karir = require("../models/Karir"); // Mengimpor model Karir

// Create karir
exports.create = (req, res) => {
  // Validasi request
  if (
    !req.body.posisi ||
    !req.body.judul ||
    !req.body.kota ||
    !req.body.deskripsi ||
    !req.body.kebutuhan
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Membuat objek Karir
  const karir = {
    posisi: req.body.posisi,
    judul: req.body.judul,
    kota: req.body.kota,
    deskripsi: req.body.deskripsi,
    kebutuhan: req.body.kebutuhan,
  };

  // Menyimpan Karir ke database
  Karir.create(karir)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Telah terjadi kesalahan saat menyimpan data!",
      });
    });
};

// Read all Karir
exports.findAll = (req, res) => {
  const judul = req.query.judul;
  const condition = judul ? { judul: { [Op.like]: `%${judul}%` } } : null;

  Karir.findAll({ where: condition })
    .then((data) => {
      res.send(data); // Mengirim data hasil query
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving karir.",
      });
    });
};

// Update Karir
exports.update = (req, res) => {
  const id = req.params.id;

  Karir.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Karir was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Karir with id=${id}. Maybe Karir was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Karir with id=" + id,
      });
    });
};

// Delete Karir
exports.delete = (req, res) => {
  const id = req.params.id;

  Karir.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Karir was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Karir with id=${id}. Maybe Karir was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Karir with id=" + id,
      });
    });
};
