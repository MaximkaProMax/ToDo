import { removeTask, saveTasks, tasks } from './tasks.js';

export function createTaskElement(task, index) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.onclick = function() {
        removeTask(index);
        li.remove();
    };

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function() {
        tasks[index].completed = checkbox.checked;
        saveTasks();
    };

    li.prepend(checkbox);
    li.append(deleteButton);
    taskList.append(li);
}