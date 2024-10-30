let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');

    if (taskInput.value.trim()) {
        tasks.push(taskInput.value);
        createTaskElement(taskInput.value, tasks.length - 1);
        taskInput.value = '';
    }
}

function createTaskElement(task, index) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;

    const button = document.createElement('button');
    button.textContent = 'Удалить';
    
    button.onclick = function() {
        removeTask(index);
        li.remove();
    };

    li.append(button);
    taskList.append(li);
}

function removeTask(index) {
    tasks.splice(index);
}

document.getElementById('taskInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

//Добавить 3 задачи при задачи при старте системы, отменить выполненно или невыполненно
//Локалка хранения