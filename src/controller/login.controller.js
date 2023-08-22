const loginCtl = {};
const passport = require("passport");

loginCtl.showLogin = (req, res) => {
  res.render("login/login");
};

loginCtl.login = passport.authenticate("local.signin", {
    successRedirect: "/inicio",
    failureRedirect: "/",
    failureFlash: true,
});

loginCtl.logout = (req, res) => {
    req.logOut();
    res.redirect("/");
  };

module.exports = loginCtl;

