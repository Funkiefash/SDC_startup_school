document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Dropdown functionality for mobile
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            // Only handle dropdown toggle on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                
                // Get the parent dropdown element
                const parent = this.parentElement;
                
                // Toggle active class
                if (parent.classList.contains('active')) {
                    parent.classList.remove('active');
                } else {
                    // Close all other dropdowns
                    document.querySelectorAll('.dropdown').forEach(item => {
                        if (item !== parent) {
                            item.classList.remove('active');
                        }
                    });
                    
                    // Open this dropdown
                    parent.classList.add('active');
                }
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.mobile-menu-toggle') && !e.target.closest('nav')) {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for header
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        mobileMenuToggle.classList.remove('active');
                    }
                }
            }
        });
    });
});