document.addEventListener('DOMContentLoaded', () => {
    const taskDescriptionInput = document.getElementById('taskDescription');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const taskCount = document.getElementById('taskCount');

    let tasks = [];

    // Atualiza o contador de tarefas
    function updateTaskCount() {
        taskCount.textContent = tasks.length;
    }

});