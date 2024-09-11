document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#submit');
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('task-list');

    button.addEventListener('click', (event) => {
        event.preventDefault();

        if (taskInput.value.trim() === '') return;

        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        newTask.draggable = true;
        newTask.classList.add('item');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.classList.add('remover');
        removeButton.id = ('remover')

        removeButton.addEventListener('click', () => {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);

        taskInput.value = '';
    });

    taskList.addEventListener('dragstart', (event) => {
        if (event.target.classList.contains('item')) {
            event.target.classList.add('dragging');
        }
    });

    taskList.addEventListener('dragend', (event) => {
        if (event.target.classList.contains('item')) {
            event.target.classList.remove('dragging');
        }
    });

    taskList.addEventListener('dragover', (event) => {
        event.preventDefault();
        const dragging = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(taskList, event.clientY);
        if (afterElement) {
            taskList.insertBefore(dragging, afterElement);
        } else {
            taskList.appendChild(dragging);
        }
    });
    function getDragAfterElement(container, y) {
        const items = [...container.querySelectorAll('.item:not(.dragging)')];
        let closest = null;
        let closestOffset = Number.NEGATIVE_INFINITY;
    
        for (const item of items) {
            const box = item.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            
            if (offset < 0 && offset > closestOffset) {
                closestOffset = offset;
                closest = item;
            }
        }
    
        return closest;
    }
});
