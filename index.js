const menuBarsEl = document.querySelector('.menu-bars-container');
const hamburgerOpen = document.querySelector('.bars-open');
const hamburgerClosed = document.querySelector('.bars-closed');
const menuListEl = document.querySelector('.menu-list');

menuBarsEl.addEventListener('click', () => {
    hamburgerOpen.classList.toggle('hidden');
    hamburgerClosed.classList.toggle('hidden');
    menuListEl.classList.toggle('show');  // Toggle the 'show' class
});

const currentDate = new Date();
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];


// Extract day, month, and year
const day = currentDate.getDate();
const month = monthNames[currentDate.getMonth()];
const year = currentDate.getFullYear();

// Format the date as "Month Day, Year"
const formattedDate = `${month} ${day}, ${year}`;

// Update the HTML element (for example, an element with the ID "date")
document.querySelector('.current-date').textContent = formattedDate;
document.querySelector('#current-year').textContent = year;