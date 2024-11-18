import { addTask, loadTasks, removeAllTasks, tasks } from './tasks.js';
import { createTaskElement } from './dom.js';

document.getElementById('taskInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && this.value.trim() !== '') {
        addTaskToServer(this.value);
        this.value = '';
    }
});

document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== '') {
        addTaskToServer(taskInput.value);
        taskInput.value = '';
    }
});

document.getElementById('removeAllButton').onclick = removeTasksFromServer;

window.onload = fetchTasks;

// База данных
async function fetchTasks() {
    try {
        const response = await fetch('http://localhost:3000/tasks');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const tasks = await response.json();
        tasks.forEach((task) => createTaskElement(task.text, task.id));
    } catch (error) {
        console.error('Failed to fetch tasks:', error);
    }
}

async function addTaskToServer(taskText) {
    try {
        const response = await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: taskText })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const task = await response.json();
        createTaskElement(task.text, task.id);
    } catch (error) {
        console.error('Failed to add task:', error);
    }
}

async function removeTasksFromServer() {
    try {
        const response = await fetch('http://localhost:3000/tasks', {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        document.getElementById('taskList').innerHTML = '';
    } catch (error) {
        console.error('Failed to remove tasks:', error);
    }
}

document.getElementById('taskInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && this.value.trim() !== '') {
        addTaskToServer(this.value);
        this.value = '';
    }
});

document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== '') {
        addTaskToServer(taskInput.value);
        taskInput.value = '';
    }
});

document.getElementById('removeAllButton').onclick = removeTasksFromServer;

window.onload = fetchTasks;