export let tasks = [];

export function addTask(taskText, createTaskElement) {
    if (taskText.trim()) {
        tasks.push({ text: taskText, completed: false });
        createTaskElement(taskText, tasks.length - 1);
        saveTasks();
    }
}

export function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
}

export function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasks(createTaskElement) {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        tasks = savedTasks;
        tasks.forEach((task, index) => createTaskElement(task.text, index));
    }
}

export function removeAllTasks() {
    tasks = [];
    localStorage.removeItem('tasks');
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}