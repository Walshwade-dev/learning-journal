import {blogPosts as blogs} from './data.js';

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

function renderBlogs() {
    // Find the container div using the correct selector
    let blogContainer = document.querySelector('.blog-section');
    blogContainer.innerHTML = ''; // Clear the container before adding new content

    // Loop through each blog post and create HTML elements
    blogs.forEach(blog => {
        // Create the blog post container div
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('blog-post');

        // Create the img element for the blog post image
        const imgEl = document.createElement('img');
        imgEl.src = blog.image;
        imgEl.alt = blog.title;
        imgEl.classList.add('blog-img');

        // Create the h4 element for the blog post date
        const dateEl = document.createElement('p');
        dateEl.textContent = blog.date;
        dateEl.classList.add('blog-date');

        //create h2 element for blog title
        const blogTitle = document.createElement('h2');
        blogTitle.textContent =blog.title;
        blogTitle.classList.add('blog-title');

        // Create the p element for the blog post content
        const contentEl = document.createElement('p');
        contentEl.textContent = blog.content;
        contentEl.classList.add('blog-info');

        // Append all elements to the blog post container
        blogDiv.appendChild(imgEl);
        blogDiv.appendChild(dateEl);
        blogDiv.appendChild(blogTitle);
        blogDiv.appendChild(contentEl);

        // Append the blog post container to the main blog container
        blogContainer.appendChild(blogDiv);
    });
}

// Call the renderBlogs function to render the blog posts
renderBlogs();
