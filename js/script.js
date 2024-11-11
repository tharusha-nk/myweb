// Add this JavaScript to your existing script.js file

document.addEventListener("DOMContentLoaded", function() {
    const welcomeSection = document.querySelector('.welcome');

    // Function to check if the element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add the reveal class when the element is in the viewport
    function revealOnScroll() {
        if (isInViewport(welcomeSection)) {
            welcomeSection.classList.add('reveal');
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', revealOnScroll);

    // Initial check in case the element is already in the viewport
    revealOnScroll();
});