// Get current year
const currentYear = new Date().getFullYear();

// Put current year into footer
document.getElementById("currentyear").textContent = currentYear;


// Show last modified date
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;