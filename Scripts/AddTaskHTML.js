function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim()) {
        createTaskElement(taskInput.value);
        taskInput.value = '';
    }
}

function createTaskElement(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;
    const button = document.createElement('button');
    button.textContent = 'Удалить';
    button.onclick = () => li.remove();
    li.append(button);
    taskList.append(li);
}

document.getElementById('taskInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});