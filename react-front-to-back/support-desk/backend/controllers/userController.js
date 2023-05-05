const registerUser = (req, res) => {
  res.send("Register Route");
};

const loginUser = (req, res) => {
  res.send("Login Router");
};

module.exports = {
  registerUser,
  loginUser,
};
