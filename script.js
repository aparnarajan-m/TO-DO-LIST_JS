function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a task');
        return;
    }

    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = todoText;

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fa-regular fa-pen-to-square "></i>';
    editButton.className = 'edit-button';
    editButton.onclick = function() {
    const newTodoText = prompt('Edit your task', span.textContent);
    if (newTodoText !== null) {
        span.textContent = newTodoText.trim();
    }
   };

   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fa-regular fa-square-check"></i>';
   completedButton.className = 'complete-button';
   completedButton.onclick = function() {
    span.classList.toggle('completed'); 
    
   }

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        todoList.removeChild(li);     
    };

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(completedButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    todoInput.value = '';
}

function toggleTheme(modesbutton) {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modesbutton.innerHTML = '<i class="fa-solid fa-sun sun"></i>';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modesbutton.innerHTML = '<i class="fa-solid fa-moon moon"></i>';
    }
}

// function toggleTheme(modesbutton) {
//     const body = document.body;
//     const isLightMode = body.classList.contains('light-mode');
//     body.classList.toggle('light-mode', !isLightMode);
//     body.classList.toggle('dark-mode', isLightMode);
//     modesbutton.innerHTML = isLightMode ? '<i class="fa-solid fa-moon dark-mode moon"></i>' : '<i class="fa-solid fa-sun sun"></i>';
// }



