// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const navbar = document.getElementById('mainNav');

// Check for saved user preference
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
}

darkModeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        darkModeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }
});

// Navbar Scroll Effect
const handleScroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled', 'shadow');
        if (body.getAttribute('data-theme') === 'dark') {
             navbar.classList.remove('navbar-light');
             navbar.classList.add('navbar-dark');
        } else {
             navbar.classList.remove('navbar-dark');
             navbar.classList.add('navbar-light');
        }
    } else {
        navbar.classList.remove('navbar-scrolled', 'shadow', 'navbar-light');
        navbar.classList.add('navbar-dark'); // Keep text white on hero section
    }
};

window.addEventListener('scroll', handleScroll);

// Update navbar on theme change if scrolled
const updateNavbarOnThemeChange = () => {
    handleScroll(); // Re-run scroll logic to apply correct classes
}

darkModeToggle.addEventListener('click', updateNavbarOnThemeChange);


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Close responsive menu when a scroll trigger link is clicked
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add('was-validated');
    } else {
        // Mock submission
        document.getElementById('submitButton').classList.add('d-none');
        document.getElementById('submitSuccessMessage').classList.remove('d-none');
        contactForm.reset();
        contactForm.classList.remove('was-validated');
    }
}, false);

// Initial call to set navbar state
handleScroll();
