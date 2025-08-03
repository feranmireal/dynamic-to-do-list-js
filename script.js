// Ensure script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // Must use classList.add

        // Set up removal behavior
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to the task
        li.appendChild(removeButton);
        // Append the task to the list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add event listener to button
    addButton.addEventListener('click', addTask);

    // Allow adding task via Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
