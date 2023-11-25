// Defines appropriate greeting based on the time of day
document.addEventListener("DOMContentLoaded", function() {
    const greetingsContainer = document.getElementById('greetings');
    setGreetings(greetingsContainer);
})

function setGreetings(container) {
    const currentHour = new Date().getHours(); // 24-hour config
    let greeting; 
    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    container.textContent = greeting; // update content of container
}