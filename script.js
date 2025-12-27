
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only do smooth scrolling for same-page hash links
            if (href && href.startsWith('#')) {
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            // For other hrefs (like "page2.html"), do nothing so browser navigates normally
        });
    });

    // Add scroll effects
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const background = document.querySelector('.geometric-background');
        if (background) {
            background.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Add hover effects to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '20';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = 'auto';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Function to scroll to contact section
function scrollToContact() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Function to handle project start
function startProject() {
    // You can customize this function to handle form submission
    // or redirect to a contact form
    alert('Ready to start your project! Please contact me at your preferred method.');
    scrollToContact();
}

// Add some interactive animations
function addInteractiveEffects() {
    // Rotate elements slightly on hover
    const rotatableElements = document.querySelectorAll('.service-content, .stat, .request-block');
    rotatableElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const currentTransform = this.style.transform || '';
            const rotation = Math.random() * 4 - 2; // Random rotation between -2 and 2 degrees
            this.style.transform = currentTransform + ` rotate(${rotation}deg)`;
        });
        
        element.addEventListener('mouseleave', function() {
            // Reset to original transform
            this.style.transform = this.style.transform.replace(/rotate\([^)]*\)/g, '');
        });
    });
}

// Initialize interactive effects when DOM is loaded
document.addEventListener('DOMContentLoaded', addInteractiveEffects);

// Add some chaos to the background elements
function animateBackgroundElements() {
    const shapes = document.querySelectorAll('.shape, .triangle, .dot');
    shapes.forEach((shape, index) => {
        // Random movement
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            shape.style.transform += ` translate(${randomX}px, ${randomY}px)`;
            
            // Reset position after some time
            setTimeout(() => {
                shape.style.transform = shape.style.transform.replace(/translate\([^)]*\)/g, '');
            }, 2000);
        }, 5000 + index * 1000);
    });
}

// Start background animations
document.addEventListener('DOMContentLoaded', animateBackgroundElements);


// Function to handle free livery request
function handleFreeRequest(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const aircraft = formData.get('aircraft');
    const style = formData.get('style');
    
    console.log('Free livery request:', { email, aircraft, style });
    
    // Add visual feedback
    const submitBtn = event.target.querySelector('.free-submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = 'CHAOS INITIATED...';
    submitBtn.style.background = '#059669';
    
    setTimeout(() => {
        submitBtn.innerHTML = 'REQUEST SENT!';
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '#dc2626';
            event.target.reset();
        }, 2000);
    }, 1500);
    
    // You can replace this with actual form submission logic
    alert(`Thanks for joining the chaos! We'll send free liveries to ${email}`);
}

// Enhanced portfolio interactions
function enhancePortfolioEffects() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach((item, index) => {
        // Add stagger effect on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = entry.target.style.transform.replace('translateY(50px)', 'translateY(0)');
                    }, index * 100);
                }
            });
        });
        
        item.style.opacity = '0';
        item.style.transform += ' translateY(50px)';
        observer.observe(item);
        
        // Enhanced hover effects
        item.addEventListener('mouseenter', function() {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.top = '50%';
            ripple.style.left = '50%';
            ripple.style.width = '10px';
            ripple.style.height = '10px';
            ripple.style.background = 'rgba(248, 113, 113, 0.6)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%) scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize enhanced effects
document.addEventListener('DOMContentLoaded', enhancePortfolioEffects);




// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a.nav-link');
  const currentPath = window.location.pathname.split('/').pop(); // get filename

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (href === 'index.html' && currentPath === '')) {
      link.classList.add('active');
    }
  });
});

  document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('additional');

    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto'; // reset height
      textarea.style.height = textarea.scrollHeight + 'px'; // adjust
    });
  });




const openBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
     popup.style.display = 'none';
}
});



  const path = window.location.pathname.replace(/\/$/, "");

  document.querySelectorAll("nav a").forEach(link => {
    const page = "/" + link.dataset.page;
    if (path === page || (page === "/home" && path === "")) {
      link.classList.add("active");
    }
  });
