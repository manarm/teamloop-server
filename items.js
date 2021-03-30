const { data }= require('./demodata');

const getItems = (req, res) => {
  res.json(data.feed.items);
}

const updateItem = (req, res) => {
  const updateItem = req.body;
  data.feed.items = data.feed.items.map(item => (
    item.id === updateItem.id ? updateItem : item
  ));
  res.json(updateItem);
}

const addItem = (req, res) => {
  const newItem = req.body;
  data.feed.items = [
    newItem,
    ...data.feed.items
  ]
  res.json(newItem);
}

const deleteItem = (req, res) => {
  const { id } = req.body;
  const idAsInt = parseInt(id);
  data.feed.items = data.feed.items.filter(item => item.id !== idAsInt);
  res.json({id});
}

module.exports = { getItems, updateItem, addItem, deleteItem }