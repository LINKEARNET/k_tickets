const loginCtl = {};
const passport = require("passport");

loginCtl.showLogin = (req, res) => {
  res.render("login/login");
};

loginCtl.login = passport.authenticate("local.signin", {
  successRedirect: "/tipoCapacitacion/listar/:id",
  failureRedirect: "/login",
  failureFlash: true,
});

module.exports = loginCtl;