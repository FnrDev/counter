let currentInputValue = document.getElementById('todo').value;
const addButton = document.getElementById('add-btn');
const removeButton = document.getElementById('remove-btn');
const resetButton = document.getElementById('reset-btn');

// Add event listener for "Add" button.
addButton.addEventListener('click', () => {
    currentInputValue++
    document.getElementById('todo').value = currentInputValue;
});

// Add event listener for "Remove" button.
removeButton.addEventListener('click', () => {
    if (currentInputValue < 0) return;
    currentInputValue--
    document.getElementById('todo').value = currentInputValue;
});

// Add event listener for "Reset" button.
resetButton.addEventListener('click', () => {
    currentInputValue = 0;
    document.getElementById('todo').value = 0;
});