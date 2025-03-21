function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    let currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = currentTime;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();

let beep = new Audio("beep.mp3"); // Ensure correct path
beep.volume = 1.0; // Ensure full volume
document.querySelector(".container").addEventListener("click", () => {
    beep.currentTime = 0; // Reset sound to start
    beep.play().catch(error => console.error("Playback error:", error));
});

