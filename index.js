import { blogPosts as blogs } from './data.js';

const barsMenu = document.querySelector('.menu-bars-container');

barsMenu.addEventListener('click', () => {
    let barsOpen = document.querySelector('.bars-open');
    let barsClosed = document.querySelector('.bars-closed');

    barsOpen.classList.toggle('hidden');
    barsClosed.classList.toggle('hidden');

    let menuEl = document.querySelector('.menu-list');

    if (!barsClosed.classList.contains('hidden')) {
        menuEl.style.display = 'block';
    } else {
        menuEl.style.display = 'none';
    }
});

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

let showMore = false;

function renderBlogs() {
    let blogContainer = document.querySelector('.blog-section');
    blogContainer.innerHTML = ''; // Clear the container before adding new content

    const numBlogs = blogs.length;

    // Loop through each blog post and create HTML elements
    blogs.forEach((blog, index) => {
        // Create the blog post container div
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('blog-post');
        blogDiv.setAttribute('id', `blog-${index + 1}`);  // Set a unique ID for each blog post

        // Hide the blog posts with index >= 4 initially
        if (index >= 4 && !showMore) {
            blogDiv.classList.add('hidden');
        }

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

        // Determine if the last item should span 2 or 3 columns based on screen size
        const blogsPerRow = 3; // Default to 3 columns on larger screens

        // Check if the current blog is the last item
        const isLastItemAlone = (index + 1) % blogsPerRow === 1 && index === blogs.length - 1;

        if (isLastItemAlone) {
            const screenWidth = window.innerWidth;

            // If the screen width is smaller than 900px, span 2 columns; otherwise, span 3 columns
            if (screenWidth < 900) {
                blogDiv.classList.add('span-two-columns');
            } else {
                blogDiv.classList.add('span-three-columns');
            }
        }
    });

    const showMoreBtn = document.getElementById('show-more-btn');
    
    showMoreBtn.addEventListener('click', () => {
        showMore = !showMore;

        // Toggle visibility of blogs with id >= 5 based on showMore state
        for (let i = 4; i < blogs.length; i++) {
            const blogDiv = document.getElementById(`blog-${i + 1}`);
            blogDiv.classList.toggle('hidden');  // Toggle visibility
        }

        // Change button text based on the state of showMore
        showMoreBtn.textContent = showMore ? 'Show Less' : 'Show More'; 
    });
}

// Call the renderBlogs function to render the blog posts
renderBlogs();
