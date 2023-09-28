// Data for the dynamic menu
const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
        name: 'Our Products',
        id: 'product',
        child: [
            { name: 'Product 1', id: 'p1' },
            { name: 'Product 2', id: 'p2' },
            { name: 'Product 3', id: 'p3' },
            { name: 'Product 4', id: 'p4' },
        ],
    },
    { name: 'Contact Us', id: 'contact' },
];

// Function to generate the dynamic menu
function generateMenu() {
    const nav = document.getElementById('navbar');
    navbar.forEach(item => {
        const menuItem = document.createElement('a');
        menuItem.textContent = item.name;
        menuItem.href = `#${item.id}`;
        nav.appendChild(menuItem);
    });
}

// Function to fetch and display product listing
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        const productsSection = document.getElementById('products');
        productsSection.innerHTML = '<h2>Products</h2>';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
            `;
            productsSection.appendChild(productItem);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to validate the contact form
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
        // You can send the form data to a server here
    }
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
    generateMenu();
    fetchProducts();
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', validateForm);
});
