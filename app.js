const express = require('express');

const app = express();
const port = 3000;
app.use(express.json());

const login = require('./login');
const tasks = require('./items')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/login', login.handleLogin);
app.get('/items', tasks.getItems);
app.post('/items', tasks.updateItem)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
