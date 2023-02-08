const User = require("../models/user");

module.exports = {
  register(req, res) {
    const user = req.body;
    User.create(user, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error for register",
          error: err,
        });
      }
      return res.status(201).json({
        success: true,
        message: "Register success",
        data: data,
      });
    });
  },
};
