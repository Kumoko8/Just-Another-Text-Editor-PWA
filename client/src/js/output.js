// output.js

// Function to display output to the user interface
export function displayOutput(message) {
    const outputArea = document.getElementById('output');
    console.log(outputArea); // Check if outputArea is null
    if (outputArea) {
        outputArea.innerHTML = `<p>${message}</p>`;
    } else {
        console.error("Element with ID 'output' not found.");
    }
}

  