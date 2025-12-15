document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    // 1. Mobile Menu Toggle
    // Handles opening and closing the mobile navigation menu.
    mobileMenuBtn.addEventListener('click', () => {
        // Toggles the 'hidden' class to show/hide the menu
        mobileMenu.classList.toggle('hidden');
        
        // This is a simple implementation. For a smooth animation,
        // you would use Tailwind's `translate-y-full` and `max-h-0` classes
        // and transition them, but toggling `hidden` is the simplest method.
    });

    // 2. Smooth Scrolling and Mobile Menu Closing
    // Iterates over all navigation links and adds smooth scroll behavior.
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Get the target section's ID from the href attribute (e.g., #home)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Check if the element exists
            if (targetElement) {
                // Get the height of the fixed header (80px from HTML/CSS)
                const headerHeight = 80; 

                // Calculate the final scroll position, accounting for the fixed header
                const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                // Perform the smooth scroll
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
