const userController = require("../controllers/userController");

module.exports = (app) => {
  app.post("/api/users/create", userController.register);
};
