// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 10,
                behavior: 'smooth'
            });
        }
    });
});

// Contact button alert
function contactAlert() {
    alert("Thanks for reaching out! Harsh Chaudhary will contact you soon.");
}