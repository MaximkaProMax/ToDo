import { addTask, loadTasks, removeAllTasks, tasks } from './tasks.js';
import { createTaskElement } from './dom.js';

document.getElementById('taskInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask(this.value, createTaskElement);
        this.value = '';
    }
});

document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    addTask(taskInput.value, createTaskElement);
    taskInput.value = '';
});

document.getElementById('removeAllButton').onclick = removeAllTasks;

window.onload = function() {
    loadTasks(createTaskElement);
    if (tasks.length === 0) {
        addTask('Первая задача', createTaskElement);
        addTask('Вторая задача', createTaskElement);
        addTask('Третья задача', createTaskElement);
    }
};