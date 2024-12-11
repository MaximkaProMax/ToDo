import { removeTask, saveTasks, tasks } from './tasks.js';

export function createTaskElement(task, index) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.onclick = async function() {
        await fetch(`http://localhost:3000/tasks/${task.id}`, { method: 'DELETE' });
        removeTask(index);
        li.remove();
    };

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.onchange = function() {
        tasks[index].completed = checkbox.checked;
        saveTasks();
    };

    li.prepend(checkbox);
    li.append(deleteButton);
    taskList.append(li);
}