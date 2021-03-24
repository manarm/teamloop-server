const handleLogin = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json('bad form submit');
  }
  // dummy
  res.json('logged in ' + email +'/' + password);

}

module.exports = {
  handleLogin: handleLogin
}