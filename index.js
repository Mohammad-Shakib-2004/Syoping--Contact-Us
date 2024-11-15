// Smooth Scroll to Section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// FAQ Accordion with Icons
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
        } else {
            answer.style.display = 'block';
            icon.textContent = '-';
        }
    });
});

// Modal functionality with animations
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', () => {
        const modalId = item.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.classList.add('show-modal');
        setTimeout(() => modal.querySelector('.modal-content').classList.add('show-content'), 100);
    });
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        modal.querySelector('.modal-content').classList.remove('show-content');
        setTimeout(() => modal.classList.remove('show-modal'), 300);
    });
});

// Close modals when clicking outside content
window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        const modalContent = event.target.querySelector('.modal-content');
        modalContent.classList.remove('show-content');
        setTimeout(() => event.target.classList.remove('show-modal'), 300);
    }
});

// Form Validation with Dynamic Error Messages
const form = document.querySelector('.appointment-form');
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const submitBtn = form.querySelector('button[type="submit"]');

function validateName() {
    const nameError = document.querySelector('.name-error');
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return false;
    } else if (nameInput.value.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    const emailError = document.querySelector('.email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        return false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateName() & validateEmail()) {
        alert("Appointment successfully booked!");
    }
});

// Custom Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight * 0.9;
    revealElements.forEach(elem => {
        if (scrollPosition > elem.offsetTop) {
            elem.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Custom Scrollbar
document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.style.scrollBehavior = "smooth";
    const scrollBar = document.createElement("style");
    scrollBar.innerHTML = `
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #555; }
    `;
    document.head.appendChild(scrollBar);
});

// Loading Spinner for Modals
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', () => {
        const modalId = item.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        const spinner = modal.querySelector('.spinner');
        spinner.style.display = 'block';
        setTimeout(() => {
            spinner.style.display = 'none';
            modal.querySelector('.modal-content').style.display = 'block';
        }, 1000);  // Simulate loading delay
    });
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        modal.querySelector('.modal-content').style.display = 'none';
    });
});



// Get the "Call Us" span by its ID
const callUs = document.getElementById('callUs');

// Add a hover effect and click event to start a call
callUs.addEventListener('mouseenter', () => {
    callUs.style.cursor = 'pointer';
    callUs.style.textDecoration = 'underline';
});

callUs.addEventListener('mouseleave', () => {
    callUs.style.textDecoration = 'none';
});

// On click, redirect to the phone call system
callUs.addEventListener('click', () => {
    window.location.href = 'tel:+18001234567';
});
