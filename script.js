<<<<<<< HEAD
/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    const icon =
        menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");

    icon.classList.toggle("fa-xmark");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

document
    .querySelectorAll(".nav-link")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.add("fa-bars");

            icon.classList.remove("fa-xmark");

        });

    });


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const icon =
        themeBtn.querySelector("i");

    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


/* =========================
   LOAD SAVED THEME
========================= */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    const icon =
        themeBtn.querySelector("i");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}


/* =========================
   SCROLL ANIMATION
========================= */

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(function (element) {

        observer.observe(element);

    });


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";

        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navigationLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================
   BACK TO TOP
========================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    }
);


topBtn.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year")
    .textContent =
=======
/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    const icon =
        menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");

    icon.classList.toggle("fa-xmark");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

document
    .querySelectorAll(".nav-link")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.add("fa-bars");

            icon.classList.remove("fa-xmark");

        });

    });


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const icon =
        themeBtn.querySelector("i");

    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


/* =========================
   LOAD SAVED THEME
========================= */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    const icon =
        themeBtn.querySelector("i");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}


/* =========================
   SCROLL ANIMATION
========================= */

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(function (element) {

        observer.observe(element);

    });


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";

        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navigationLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================
   BACK TO TOP
========================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    }
);


topBtn.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year")
    .textContent =
>>>>>>> ce064486109745101d85b1b05547ed673ca2a51f
    new Date().getFullYear();