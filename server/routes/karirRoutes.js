module.exports = (app) => {
  const karir = require("../controllers/karirControllers");

  var router = require("express").Router();

  // Create a new Karir
  router.post("/", karir.create);

  // Retrieve all Karir
  router.get("/", karir.findAll);

  // Update a Karir with id
  router.put("/:id", karir.update);

  // Delete a Karir with id
  router.delete("/:id", karir.delete);

  app.use("/api/karir", router);
};
