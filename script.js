// script.js

// Smooth scroll effect for future enhancements

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Placeholder for future dynamic features such as tournament countdown, live updates, etc.

console.log("TX ESPORTS Website Loaded Successfully");
