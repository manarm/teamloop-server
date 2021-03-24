const express = require('express');

const app = express();
const port = 3000;
app.use(express.json());

const login = require('./login');
const tasks = require('./tasks')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/login', login.handleLogin);
app.get('/tasks', tasks.getTasks);
app.post('/tasks', tasks.updateTask)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
