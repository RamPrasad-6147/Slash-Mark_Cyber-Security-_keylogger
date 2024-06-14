const { Keyboard } = require('./index'); // Adjust the path as needed

const keyboard = new Keyboard('event0'); // Replace with your actual event file

const logContainer = document.getElementById('logs');

keyboard.on('keyup', event => logEvent(event));
keyboard.on('keydown', event => logEvent(event));
keyboard.on('keypress', event => logEvent(event));

function logEvent(event) {
    const logEntry = document.createElement('div');
    logEntry.textContent = `${event.type}: ${event.keyId} (${event.keyCode})`;
    logContainer.appendChild(logEntry);

    // Keep the log container scrolled to the bottom
    logContainer.scrollTop = logContainer.scrollHeight;
}
