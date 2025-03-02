// Select all buttons with IDs btn-1 to btn-6
const buttons = document.querySelectorAll("button[id^='btn-']");

const markOne = document.getElementById("mark-1");
const mainMarkElement = document.getElementById("main-mark");
const activityLog = document.querySelector(".active"); 
const clearBtn = document.getElementById("clear-btn"); 

let convertMarkOne = parseInt(markOne.innerText);
let convertMainMark = parseInt(mainMarkElement.innerText);
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString("en-US", { hour12: true });
}

buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();

        if (convertMainMark > 0) {
            alert("Board updated Successfully");
            const taskName = button.parentElement.previousElementSibling.innerText.trim();

            const historyItem = document.createElement("p");
            historyItem.className = "text-[#00303C] bg-white px-3 py-1 rounded-md shadow text-sm mt-2";
            historyItem.innerText = `You have completed the task "${taskName}" at ${getCurrentTime()}`;
            activityLog.appendChild(historyItem);

            if (button.id === "btn-6") {
                setTimeout(() => {
                    alert("Congrats!!! You have completed all the current tasks");
                }, 100);
            }
            convertMainMark--; 
            convertMarkOne++;  

            mainMarkElement.innerText = convertMainMark;
            markOne.innerText = convertMarkOne;

            button.disabled = true;
            button.style.backgroundColor = "#ccc";
            button.style.cursor = "not-allowed";
        } else {
            alert("No more tasks to complete!");
        }
    });
});

clearBtn.addEventListener("click", function() {
    activityLog.querySelectorAll("p").forEach(p => p.remove()); 
    alert("Activity log cleared successfully!");
});
