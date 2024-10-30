
// Function to change button position randomly within a 500px by 500px area
function moveButton() {
    const button = document.getElementById('noButton');
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Define the dimensions of the movement area
    const movementAreaWidth = 500;
    const movementAreaHeight = 500;

    // Generate random positions while ensuring the button stays within the defined area
    const randomX = Math.random() * (movementAreaWidth - buttonWidth);
    const randomY = Math.random() * (movementAreaHeight - buttonHeight);

    // Set the new position
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Event listener for button click
document.getElementById('noButton').addEventListener('click', moveButton);

