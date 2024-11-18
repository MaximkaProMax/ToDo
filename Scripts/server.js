const express = require('express');
const path = require('path');
const Task = require('./db');
const app = express();
app.use(express.json());

// Обслуживание главной страницы
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Main.html'));
});

// Обслуживание статических файлов
app.use('/Scripts', express.static(path.join(__dirname, '.')));
app.use('/Styles', express.static(path.join(__dirname, '..', 'Styles')));

// Маршрут для получения задач
app.get('/tasks', async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
});

// Маршрут для добавления задачи
app.post('/tasks', async (req, res) => {
    const { text } = req.body;
    const task = await Task.create({ text });
    res.json(task);
});

// Маршрут для удаления всех задач
app.delete('/tasks', async (req, res) => {
    await Task.destroy({ where: {} });
    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});