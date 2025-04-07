// Function to dynamically generate task input fields
function generateTaskInputs() {
    const numTasks = document.getElementById('num-tasks').value;
    const taskInputsContainer = document.getElementById('task-inputs');
    taskInputsContainer.innerHTML = ''; // Clear previous task inputs

    if (numTasks > 0) {
        for (let i = 0; i < numTasks; i++) {
            // Create a wrapper div to ensure proper alignment
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task-wrapper');

            // Create a label for the task
            const taskLabel = document.createElement('label');
            taskLabel.textContent = `Task ${i + 1}:`;
            taskLabel.setAttribute('for', `task-${i+1}`);
            
            // Create the input field for the task
            const taskInput = document.createElement('input');
            taskInput.type = 'text';
            taskInput.placeholder = `Enter task ${i + 1}`;
            taskInput.id = `task-${i+1}`; // Ensure unique id for each input
            taskInput.classList.add('task-input');
            
            // Append label and input field to the task wrapper
            taskDiv.appendChild(taskLabel);
            taskDiv.appendChild(taskInput);
            
            // Append the task wrapper to the container
            taskInputsContainer.appendChild(taskDiv);
        }
    }
}

// Function to create the to-do list
function createList() {
    const listName = document.getElementById('list-name').value;
    const numTasks = document.getElementById('num-tasks').value;
    const taskInputs = document.querySelectorAll('.task-input');
    
    if (listName.trim() === '' || numTasks === '' || taskInputs.length === 0) {
        alert("Please fill out all the fields.");
        return;
    }

    // Display the list name in the main section
    document.getElementById('todo-list-name').textContent = listName;
    
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear any previous list items
    
    // Add tasks to the list
    taskInputs.forEach(input => {
        const taskText = input.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.textContent = taskText;
            li.addEventListener('click', () => {
                li.classList.toggle('done');
            });
            taskList.appendChild(li);
        }
    });

    // Show the "View List" button
    document.getElementById('view-list-btn').style.display = 'inline-block';

    // Hide input form and show the to-do list section
    document.getElementById('todo-list').style.display = 'block';
}

// Function to view the list on a separate page
function viewList() {
    const listName = document.getElementById('list-name').value;
    const taskListItems = document.querySelectorAll('#task-list li');
    
    const listPage = document.getElementById('list-page');
    const todoListContent = document.getElementById('todo-list-content');
    
    // Clear previous content
    todoListContent.innerHTML = '';

    const heading = document.createElement('h2');
    heading.textContent = listName;
    todoListContent.appendChild(heading);
    
    const taskUl = document.createElement('ul');
    
    taskListItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.textContent;
        if (item.classList.contains('done')) {
            li.classList.add('done');
        }
        taskUl.appendChild(li);
    });

    todoListContent.appendChild(taskUl);
    
    // Hide the initial content and show the list page
    document.querySelector('.container').style.display = 'none';
    listPage.style.display = 'block';
}
