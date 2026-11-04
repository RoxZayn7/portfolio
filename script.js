// Mobile menu
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");
hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu when a link is clicked
document.querySelectorAll("#nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        hamburger.setAttribute("aria-expanded", false);
    });
});

// Scroll animations (only runs if the AOS library is loaded)
if (window.AOS) {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 120
    });
}

// Particle background (only runs if the particles library is loaded)
if (window.particlesJS && !reduceMotion) {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: window.innerWidth < 768 ? 40 : 80
            },
        color: {
            value: "#ff4b2b"
        },
        shape: {
            value: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 3
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ff4b2b",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2
        }
    }
});
}

// Typing effect (only runs if the Typed library is loaded)
if (window.Typed && !reduceMotion) {
    new Typed("#typing", {
        strings:[
            "Front-End Web Developer",
            "Web Designer",
            "HTML & CSS Enthusiast",
        "Responsive Website Developer"
    ],

    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});
}

// Light / Dark 
const toggle = document.getElementById("theme-toggle");
function applyTheme(light) {
    document.body.classList.toggle("light-mode", light);
    toggle.textContent = light ? "☀️" : "🌙";
    try {
        localStorage.setItem("portfolio-theme", light ? "light" : "dark");
    } catch (e) {
        // Private mode: just skip remembering the choice
    }
};

try {
    applyTheme(localStorage.getItem("portfolio-theme") === "light");
} catch (e) {
    applyTheme(false);
}

toggle.addEventListener("click", () => {
    const isLight = !document.body.classList.contains("light-mode");
    applyTheme(isLight);
});


// Back to top button
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});