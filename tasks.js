const getTasks = (req, res) => {
  res.json('tasks');
}

const updateTask = (req, res) => {
  res.json('update done');
}

module.exports = { getTasks, updateTask }