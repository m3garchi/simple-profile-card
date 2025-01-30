function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    if (!utcTimeElement) return;
    
    const now = new Date();
    const utcHours = String(now.getUTCHours()).padStart(2, '0');
    const utcMinutes = String(now.getUTCMinutes()).padStart(2, '0');
    const utcSeconds = String(now.getUTCSeconds()).padStart(2, '0');
    
    utcTimeElement.textContent = `UTC Time: ${utcHours}:${utcMinutes}:${utcSeconds}`;
}

// Update the time only when the page is refreshed
updateUTCTime();
