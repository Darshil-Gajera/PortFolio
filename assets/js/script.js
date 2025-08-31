// Function to set the theme and update UI
 function setTheme(theme) {
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    var switchThemeBtn = document.getElementById('switchTheme');
    if (switchThemeBtn) {
        switchThemeBtn.innerHTML = theme === 'dark' ?  '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
    }
    //console.log(`Switched to ${theme} theme`);
}

var currentTheme = localStorage.getItem('theme') || 'dark';
setTheme(currentTheme);

// Event listener for the switch theme button
var switchThemeBtn = document.getElementById('switchTheme');
if (switchThemeBtn) {
    switchThemeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
    });
}

//AOS Initiliaze
AOS.init();

// Fixed Header & back to top button on Scroll
window.addEventListener('scroll', () => {
    // fixed header
    const header = document.getElementById('header');
    if (window.scrollY > 30 && !header.classList.contains('fixed-top')) {
        header.classList.add('fixed-top');
        document.getElementById('offcanvasNavbar').classList.add('fixedHeaderNavbar');
    } else if (window.scrollY <= 30 && header.classList.contains('fixed-top')) {
        header.classList.remove('fixed-top');
        document.getElementById('offcanvasNavbar').classList.remove('fixedHeaderNavbar');
    }

    //backtotop
    const backToTopButton = document.getElementById("backToTopButton");
    if (window.scrollY > 400 && backToTopButton.style.display === 'none') {
        backToTopButton.style.display = 'block';
    } else if (window.scrollY <= 400 && backToTopButton.style.display === 'block') {
        backToTopButton.style.display = 'none';
    }
});


//jumping to top function
function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Testimonial Slider
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        nav:true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1170:{
                items:3,
            }
        }
    });
});


// Project cards cycling animation
function cycleProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectContainer = document.querySelector('#projects .row');
    let currentIndex = 0;

    setInterval(() => {
        // Get current and next card
        const currentCard = projectCards[currentIndex];
        currentIndex = (currentIndex + 1) % projectCards.length;
        const nextCard = projectCards[currentIndex];

        // Animate current card out
        currentCard.classList.add('sliding-out');
        
        setTimeout(() => {
            // Move current card to end
            projectContainer.appendChild(currentCard);
            currentCard.classList.remove('sliding-out');
            
            // Animate next card in
            nextCard.classList.add('sliding-in');
            setTimeout(() => {
                nextCard.classList.remove('sliding-in');
            }, 500);
        }, 500);
    }, 3000); // Change cards every 3 seconds
}

// Add this function to cycle testimonials
function cycleTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialContainer = document.querySelector('#testimonial-slider');
    let currentIndex = 0;

    setInterval(() => {
        // Get current and next testimonial
        const currentTestimonial = testimonials[currentIndex];
        currentIndex = (currentIndex + 1) % testimonials.length;
        const nextTestimonial = testimonials[currentIndex];

        // Animate current testimonial out
        currentTestimonial.classList.add('sliding-out');
        
        setTimeout(() => {
            // Move current testimonial to end
            testimonialContainer.appendChild(currentTestimonial);
            currentTestimonial.classList.remove('sliding-out');
            
            // Animate next testimonial in
            nextTestimonial.classList.add('sliding-in');
            setTimeout(() => {
                nextTestimonial.classList.remove('sliding-in');
            }, 500);
        }, 500);
    }, 4000); // Change testimonials every 4 seconds
}

// Start both animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    cycleProjects();
    cycleTestimonials();
});
