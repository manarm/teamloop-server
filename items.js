const { data }= require('./demodata');

const getItems = (req, res) => {
  res.json(data.feed.items);
}

const updateItem = (req, res) => {
  res.json('update done');
}

module.exports = { getItems, updateItem }