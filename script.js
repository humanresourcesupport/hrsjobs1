document.addEventListener('DOMContentLoaded', () => {
    // 1. Element Selectors
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    // Selects both desktop (.nav-link) and mobile (.mobile-nav-link) links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    // The height of the fixed header is 80px (defined in CSS/HTML structure)
    const HEADER_HEIGHT = 80;

    // 2. Mobile Menu Toggle Logic
    // Handles opening and closing the mobile navigation menu on hamburger click.
    mobileMenuBtn.addEventListener('click', () => {
        // Toggles the 'hidden' class to show/hide the menu
        mobileMenu.classList.toggle('hidden');
    });

    // 3. Smooth Scrolling Logic
    // Ensures smooth transition to sections and accounts for the fixed header.
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the browser's default instant jump behavior
            e.preventDefault();

            // Get the target section's ID from the href attribute (e.g., #home, #menu)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate the final scroll position: 
                // Target position - Fixed Header Height
                const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;

                // Perform the smooth scroll
                window.scrollTo({
                    top: topOffset,
                    behavior: 'smooth'
                });

                // After clicking, if the mobile menu is open, close it.
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
});
                window.scrollTo({
                    top: topOffset,
                    behavior: 'smooth'
                });

                // Close the mobile menu if a link inside it was clicked
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
});
