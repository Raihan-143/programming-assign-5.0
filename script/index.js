function updateDate() {
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options).split(',');

    document.getElementById('current-day').textContent = today[0];
    document.getElementById('current-date').textContent = today[1].trim();
}

updateDate();

// for the changing background color
const themeButton = document.querySelector("img[src='assets/theme-btn.png']");
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
themeButton.addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});

