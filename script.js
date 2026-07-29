const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");
hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

AOS.init({
    duration: 1000,
    once: true,
    offset: 120
});

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80
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

const toggle = document.getElementById("theme-toggle");
toggle.onClick=() => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        toggle.innerHTML = "☀️";
    }
    else {
        toggle.innerHTML = "🌙";
    }
};

const topBtn = document.getElementById("topBtn");
window.onsecroll = function() {
    if (document.documentElement.scrollTop>300) {
        topBtn.style.display = "block";
    }
    else {
        topBtn.style.display = "none"
    }
};

topBtn.onClick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};