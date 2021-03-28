const { data }= require('./demodata');

const getUsers = (req, res) => {
  res.json(data.users.users);
}

module.exports = { getUsers }