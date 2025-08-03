// Ensure the script runs only after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    // Get and trim the task text
    const taskText = taskInput.value.trim();

    // If task is empty, alert the user
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item (li)
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Set onclick to remove task when button is clicked
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, and li to the task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Event listener for add button
  addButton.addEventListener("click", addTask);

  // Event listener for Enter key in input field
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Call addTask on DOMContentLoaded as required (even if not needed functionally)
  addTask();
});
