const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

const login = require('./login');
const tasks = require('./items');
const users = require('./users');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/login', login.handleLogin);
app.get('/items', tasks.getItems);
app.post('/items', tasks.updateItem)
app.get('/users', users.getUsers);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
