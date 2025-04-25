document.addEventListener('DOMContentLoaded', () => {
    const taskDescriptionInput = document.getElementById('taskDescription');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const taskCount = document.getElementById('taskCount');
    const completedTaskCount = document.getElementById('completedTaskCount');

    let tasks = [];

    // Atualiza o contador de tarefas
    function updateTaskCount() {
        taskCount.textContent = tasks.length;
    }

    // Atualiza o contador de tarefas concluídas
    function updateCompletedTaskCount() {
        const completedTasks = tasks.filter(task => task.completed).length;
        completedTaskCount.textContent = completedTasks;
    }

    // Adiciona uma nova tarefa
    addTaskButton.addEventListener('click', () => {
        const description = taskDescriptionInput.value.trim();
        if (description) {
            const taskId = Date.now();
            tasks.push({ id: taskId, description, completed: false });
            renderTasks();
            taskDescriptionInput.value = '';
        }
    });

    // Marca ou desmarca uma tarefa como concluída
    function toggleTaskCompletion(taskId) {
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
            renderTasks();
        }
    }
    // Remove uma tarefa
    function removeTask(taskId) {
        tasks = tasks.filter(task => task.id !== taskId);
        renderTasks();
    }

    // Renderiza as tarefas na lista
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => toggleTaskCompletion(task.id));

            const taskText = document.createElement('span');
            taskText.textContent = task.description;
            if (task.completed) {
                taskText.style.textDecoration = 'line-through';
            }

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => removeTask(task.id));

            li.appendChild(checkbox);
            li.appendChild(taskText);
            li.appendChild(removeButton);
            taskList.appendChild(li);
        });
        updateTaskCount();
        updateCompletedTaskCount();
    }
});