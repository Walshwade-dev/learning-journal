import { blogPosts as blogs } from './data.js';

const barsMenu = document.querySelector('.menu-bars-container');

barsMenu.addEventListener('click', () => {
    let barsOpen = document.querySelector('.bars-open');
    let barsClosed = document.querySelector('.bars-closed');

    barsOpen.classList.toggle('hidden');
    barsClosed.classList.toggle('hidden');

    let menuEl = document.querySelector('.menu-list')

    if(!barsClosed.classList.contains('hidden')){
        menuEl.style.display = 'block';
    } else {
        menuEl.style.display = 'none';
    }


})

// Get the current date
const currentDate = new Date();
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const day = currentDate.getDate();
const month = monthNames[currentDate.getMonth()];
const year = currentDate.getFullYear();

const formattedDate = `${month} ${day}, ${year}`;

// Update the HTML element for current date and year
document.querySelector('.current-date').textContent = formattedDate;
document.querySelector('#current-year').textContent = year;



function generateUniqueRandomClass(availableNumbers) {
    // Get a random index from the available numbers
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    // Pop the number at the random index to ensure it's unique
    const randomNumber = availableNumbers.splice(randomIndex, 1)[0];
    return `grid-item-${randomNumber}`;
}



function renderBlogs() {
    let blogContainer = document.querySelector('.blog-section');
    blogContainer.innerHTML = ''; // Clear the container before adding new content

    const numBlogs = blogs.length;

    let availableNumbers = Array.from({length: numBlogs}, (_, i) => i + 1)

    // Loop through each blog post and create HTML elements
    blogs.forEach(blog => {

        const randomClass = generateUniqueRandomClass(availableNumbers);
        // Create the blog post container div
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('blog-post', randomClass);

        // Create the img element for the blog post image
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img-container');

        const imgEl = document.createElement('img');
        imgEl.src = blog.image;
        imgEl.alt = blog.title;
        imgEl.classList.add('blog-img');

        imgDiv.appendChild(imgEl);

        // Create the h4 element for the blog post date
        const dateEl = document.createElement('p');
        dateEl.textContent = blog.date;
        dateEl.classList.add('blog-date');

        // Create h2 element for blog title
        const blogTitle = document.createElement('h2');
        blogTitle.textContent = blog.title;
        blogTitle.classList.add('blog-title');

        // Create the p element for the blog post content
        const contentEl = document.createElement('p');
        contentEl.textContent = blog.content;
        contentEl.classList.add('blog-info');

        // Append all elements to the blog post container
        blogDiv.appendChild(imgDiv);
        blogDiv.appendChild(dateEl);
        blogDiv.appendChild(blogTitle);
        blogDiv.appendChild(contentEl);

        // Append the blog post container to the main blog container
        blogContainer.appendChild(blogDiv);
    });
}

// Call the renderBlogs function to render the blog posts
renderBlogs();
