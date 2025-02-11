        
document.addEventListener("DOMContentLoaded", function () {
    const menuBurger = document.getElementById("menu-burger");
    const sideMenu = document.getElementById("side-menu");
    const closeBtn = document.getElementById("close-btn");

    // Ouvrir le menu
    menuBurger.addEventListener("click", function (event) {
        event.stopPropagation(); // Empêche la fermeture immédiate si on clique directement sur le burger
        sideMenu.classList.add("open");
    });

    // Fermer le menu en cliquant sur la croix
    closeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        sideMenu.classList.remove("open");
    });

    // Fermer le menu si on clique en dehors (mais pas sur le menu lui-même)
    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && !menuBurger.contains(event.target)) {
            sideMenu.classList.remove("open");
        }
    });

    // Empêcher la fermeture quand on clique dans le menu
    sideMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});


 //recherche


 document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search-icon");
    const searchForm = document.getElementById("search-form");


    // Lorsque l'icône de recherche est cliquée, afficher ou cacher le formulaire
    searchIcon.addEventListener("click", function () {
        if (searchForm.style.display === "none" || searchForm.style.display === "") {
            searchForm.style.display = "flex";
        } else {
            searchForm.style.display = "none";
        }
    });
});







// logo , recherche et panier
document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.querySelector(".cart-count");

    // Exemple : simulation d'ajout d'articles
    let numberOfItems = 1;

    function addToCart() {
        numberOfItems++;
        cartCount.textContent = numberOfItems;
    }

    // Simulation d'ajout après 2 secondes (à remplacer par un vrai événement)
    setTimeout(addToCart, 2000);
});



// Gestion des slides
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}
function nextSlide() {
    if (slides.length > 0) {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
}
if (slides.length > 0) {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000);
}


//fleche

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scroll-to-top");


    // Afficher le bouton lorsque l'utilisateur fait défiler la page
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) { // Affiche le bouton après 200px de défilement
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });


    // Scroll au sommet de la page en douceur lorsque l'on clique sur le bouton
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});



