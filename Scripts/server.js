const express = require('express');
const path = require('path');
const Task = require('./db');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Main.html'));
});

app.use('/Scripts', express.static(path.join(__dirname, '.')));
app.use('/Styles', express.static(path.join(__dirname, '..', 'Styles')));

app.get('/tasks', async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
});

app.post('/tasks', async (req, res) => {
    const { text } = req.body;
    const task = await Task.create({ text });
    res.json(task);
});

app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await Task.destroy({ where: { id } });
    res.sendStatus(204);
});

app.delete('/tasks', async (req, res) => {
    await Task.destroy({ where: {} });
    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});