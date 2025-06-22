document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navLinks = document.querySelector('.header-nav ul');
    
    // Toggle mobile menu
    hamburgerIcon.addEventListener('click', () => {
        navLinks.classList.add('active');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.add('visible');
    });
    
    closeIcon.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.remove('visible');
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.remove('visible');
        });
    });
});