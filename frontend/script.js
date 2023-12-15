window.onload = loadTasks;

function addTask() {
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value;
    let priority = document.getElementById('priority').value;

    if (taskText.trim() !== '') {
        let listItem = createTaskItem(taskText, false, priority);
        document.getElementById('task-list').appendChild(listItem);
        taskInput.value = '';
        saveTasks();
    } else {
        alert('Please enter a task.');
    }
}

function createTaskItem(taskText, isCompleted, priority) {
    let listItem = document.createElement('li');
    listItem.className = 'task-item';

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = isCompleted;
    checkBox.onchange = saveTasks;

    let taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editTask(taskContent);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() { 
        listItem.remove();
        saveTasks();
    };

    let priorityDisplay = document.createElement('span');
    priorityDisplay.textContent = `Priority: ${priority}`;

    listItem.appendChild(checkBox);
    listItem.appendChild(taskContent);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    listItem.appendChild(priorityDisplay);

    if (isCompleted) {
        listItem.classList.add('completed');
    }

    return listItem;
}

function editTask(taskContent) {
    let newTask = prompt("Edit your task:", taskContent.textContent);
    if (newTask !== null) {
        taskContent.textContent = newTask;
        saveTasks();
    }
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll('#task-list .task-item').forEach(taskListItem => {
        let taskContent = taskListItem.querySelector('span').textContent;
        let isCompleted = taskListItem.querySelector('input[type=checkbox]').checked;
        let priority = taskListItem.querySelector('span:nth-child(5)').textContent.split(': ')[1];
        
        tasks.push({ content: taskContent, completed: isCompleted, priority });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        let listItem = createTaskItem(task.content, task.completed, task.priority);
        document.getElementById('task-list').appendChild(listItem);
    });
}
