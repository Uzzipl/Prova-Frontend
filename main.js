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

});