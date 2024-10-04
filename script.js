const menuIcon = document.getElementById('menuIcon');
const blobButton = document.querySelector('.button-container');
const heroSection = document.getElementById('heroSection');
let isMenuOpen = false;

menuIcon.addEventListener('click', function () {
    if (!isMenuOpen) {
        // Show the "Get Started" button (move it down from top and center for mobile)
        blobButton.classList.add('show');
        
        // Slide the hero section down
        heroSection.classList.remove('up');
        heroSection.classList.add('down');
        
        // Change icon to 'x' when the menu is open
        menuIcon.innerHTML = "<i class='bx bx-x'></i>";
        isMenuOpen = true;
    } else {
        // Hide the "Get Started" button (move it up)
        blobButton.classList.remove('show');
        
        // Slide the hero section back up
        heroSection.classList.remove('down');
        heroSection.classList.add('up');
        
        // Change back to menu icon
        menuIcon.innerHTML = "<i class='bx bx-menu'></i>";
        isMenuOpen = false;
    }
});


//hero///////////////
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#ffffff"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            }
        },
        "retina_detect": true
    });
});



//patrner///////////////
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.partner-card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('scroll-visible');
        } else {
            card.classList.remove('scroll-visible');
        }
    });
});



//review//////////////////
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.nav-dot');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide after every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Dots interaction
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval); // Stop auto-slide when manually navigating
        currentSlide = parseInt(dot.getAttribute('data-index'));
        showSlide(currentSlide);
        slideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
    });
});

// Left and right arrow interaction
leftArrow.addEventListener('click', () => {
    clearInterval(slideInterval); // Stop auto-slide when manually navigating
    prevSlide();
    slideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
});

rightArrow.addEventListener('click', () => {
    clearInterval(slideInterval); // Stop auto-slide when manually navigating
    nextSlide();
    slideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
});

// Initialize the first slide
showSlide(currentSlide);





//faq's////////////
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
  
      // Toggle active class on the clicked item
      faqItem.classList.toggle('active');
  
      // Close other items when one is opened
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });
    });
  });
  
