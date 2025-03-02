function updateDate() {
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options).split(',');

    document.getElementById('current-day').textContent = today[0];
    document.getElementById('current-date').textContent = today[1].trim();
}

updateDate();
