// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add animation on scroll for service cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// CTA button click handler
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Phone Number Swap Script
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const phone1Input = document.getElementById('phone1');
    const phone2Input = document.getElementById('phone2');
    const swapBtn = document.getElementById('swapBtn');
    const resultDiv = document.getElementById('result');

    // Add event listener to swap button
    swapBtn.addEventListener('click', function() {
        swapPhoneNumbers();
    });

    // Add event listeners for Enter key on inputs
    phone1Input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            phone2Input.focus();
        }
    });

    phone2Input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            swapPhoneNumbers();
        }
    });

    // Function to swap phone numbers
    function swapPhoneNumbers() {
        const phone1 = phone1Input.value.trim();
        const phone2 = phone2Input.value.trim();

        // Validate that both fields have values
        if (!phone1 || !phone2) {
            showResult('Please enter both phone numbers before swapping.', 'error');
            return;
        }

        // Validate phone number format (basic validation)
        if (!isValidPhoneNumber(phone1) || !isValidPhoneNumber(phone2)) {
            showResult('Please enter valid phone numbers (minimum 7 digits).', 'error');
            return;
        }

        // Store current values
        const tempPhone1 = phone1;
        const tempPhone2 = phone2;

        // Swap the values
        phone1Input.value = tempPhone2;
        phone2Input.value = tempPhone1;

        // Show success message
        showResult(`Phone numbers swapped successfully!`, 'success');
        
        // Clear result after 3 seconds
        setTimeout(() => {
            resultDiv.innerHTML = '';
            resultDiv.className = 'result';
        }, 3000);
    }

    // Function to validate phone number format
    function isValidPhoneNumber(phone) {
        // Remove all non-digit characters for validation
        const digitsOnly = phone.replace(/\D/g, '');
        // Check if it has at least 7 digits (basic validation)
        return digitsOnly.length >= 7;
    }

    // Function to show result messages
    function showResult(message, type) {
        resultDiv.innerHTML = message;
        resultDiv.className = `result ${type}`;
    }

    // Add some sample phone numbers for testing
    phone1Input.addEventListener('focus', function() {
        if (!this.value) {
            this.placeholder = 'e.g., (555) 123-4567';
        }
    });

    phone2Input.addEventListener('focus', function() {
        if (!this.value) {
            this.placeholder = 'e.g., (555) 987-6543';
        }
    });

    // Clear placeholders when user starts typing
    phone1Input.addEventListener('input', function() {
        if (this.value) {
            this.placeholder = 'Enter first phone number';
        }
    });

    phone2Input.addEventListener('input', function() {
        if (this.value) {
            this.placeholder = 'Enter second phone number';
        }
    });
});
