/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the bg-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)


/*2Dart*/
const galleryImages = document.querySelectorAll(".image-container");
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");


galleryImages.forEach((imageContainer) => {
    const image = imageContainer.querySelector("img");
    const caption = imageContainer.querySelector(".caption");
    const overlay = imageContainer.querySelector(".overlay");

    imageContainer.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = image.src;
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    imageContainer.addEventListener("mouseenter", () => {
        overlay.style.opacity = 1;
        caption.style.display = "block"; // Hide the default caption
    });

    imageContainer.addEventListener("mouseleave", () => {
        overlay.style.opacity = 0;
        caption.style.display = "none"; // Show the default caption
    });
});
