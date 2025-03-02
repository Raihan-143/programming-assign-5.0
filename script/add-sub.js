// Select all buttons with IDs btn-1 to btn-6
const buttons = document.querySelectorAll("button[id^='btn-']");

// Get elements for mark-1 and main-mark
const markOne = document.getElementById("mark-1");
const mainMarkElement = document.getElementById("main-mark");
const activityLog = document.querySelector(".active"); // Activity Log Section
const clearBtn = document.getElementById("clear-btn"); // Clear History Button

// Convert initial values to numbers
let convertMarkOne = parseInt(markOne.innerText);
let convertMainMark = parseInt(mainMarkElement.innerText);

// Function to get current time in HH:MM:SS AM/PM format
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString("en-US", { hour12: true });
}

// Loop through all buttons and add event listeners
buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();

        // Check if main-mark is greater than 0
        if (convertMainMark > 0) {
            // Show the first alert
            alert("Board updated Successfully");

            // Get task name from the clicked button's parent section
            const taskName = button.parentElement.previousElementSibling.innerText.trim();

            // Add task to the Activity Log with timestamp
            const historyItem = document.createElement("p");
            historyItem.className = "text-[#00303C] bg-white px-3 py-1 rounded-md shadow text-sm mt-2";
            historyItem.innerText = `You have completed the task "${taskName}" at ${getCurrentTime()}`;
            activityLog.appendChild(historyItem);

            // If btn-6 is clicked, show a second alert after "OK"
            if (button.id === "btn-6") {
                setTimeout(() => {
                    alert("Congrats!!! You have completed all the current tasks");
                }, 100);
            }

            // Update counts
            convertMainMark--; // Decrease main-mark count
            convertMarkOne++;  // Increase mark-1 count

            // Update the DOM
            mainMarkElement.innerText = convertMainMark;
            markOne.innerText = convertMarkOne;

            // Disable the clicked button
            button.disabled = true;
            button.style.backgroundColor = "#ccc"; // Change style to indicate disabled
            button.style.cursor = "not-allowed";
        } else {
            alert("No more tasks to complete!");
        }
    });
});

// Event listener for clearing activity log
clearBtn.addEventListener("click", function() {
    activityLog.querySelectorAll("p").forEach(p => p.remove()); // Remove all history items
    alert("Activity log cleared successfully!");
});
