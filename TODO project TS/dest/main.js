"use strict";
// Initial todos
let todos = JSON.parse(localStorage.getItem('todos') || '[]');
// Selectors
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
// Function to render todos
function renderTodos() {
    // Clear the list
    todoList.innerHTML = '';
    // Render each todo
    todos.forEach((todo, i) => {
        // Create elements
        const li = document.createElement('li');
        const text = document.createTextNode(todo.text);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        // Event listener to toggle the completed state
        checkbox.addEventListener('change', () => {
            todo.completed = checkbox.checked;
            saveTodos();
            renderTodos();
        });
        // Append elements
        li.appendChild(text);
        li.appendChild(checkbox);
        todoList.appendChild(li);
    });
}
// Function to save todos
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
// Event listener for the add button
addButton.addEventListener('click', () => {
    // Get the input value
    const text = todoInput.value.trim();
    // Ignore empty values
    if (text === '')
        return;
    // Add the new todo
    todos.push({ text, completed: false });
    // Save and render todos
    saveTodos();
    renderTodos();
    // Clear the input
    todoInput.value = '';
});
// Render initial todos
renderTodos();
