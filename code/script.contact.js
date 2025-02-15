

        
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
// Mise à jour du total du panier
function updateTotal() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach(item => {
        let price = parseFloat(item.querySelector(".price").dataset.price);
        let quantity = parseInt(item.querySelector(".quantity").value);
        total += price * quantity;
    });


    const totalElement = document.querySelector(".cart-total");
    if (totalElement) totalElement.innerText = total.toFixed(2) + " €";
}


// Suppression d'un article dans le panier
document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", function () {
        const item = this.closest(".cart-item");
        if (item) {
            item.remove();
            updateTotal();
        }
    });
});


document.querySelectorAll(".quantity").forEach(input => {
    input.addEventListener("input", updateTotal);
});


updateTotal(); // Initialisation


// Gestion du carrousel
const carousel = document.querySelector(".carousel-items");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const items = document.querySelectorAll(".carousel-item");


if (carousel && prevBtn && nextBtn && items.length > 0) {
    let index = 0;
    const visibleItems = 2;
    const itemWidth = items[0].offsetWidth;


    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * itemWidth}px)`;
    }


    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });


    nextBtn.addEventListener("click", function () {
        if (index < items.length - visibleItems) {
            index++;
            updateCarousel();
        }
    });


    updateCarousel();
}



// Bouton de retour en haut
const scrollToTopBtn = document.getElementById("scroll-to-top");


if (scrollToTopBtn) {
    window.addEventListener("scroll", function () {
        scrollToTopBtn.style.display = (window.scrollY > 200) ? "block" : "none";
    });


    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}






//Maps
document.addEventListener("DOMContentLoaded", function () {
    // Initialisation de la carte avec les coordonnées de la zone 5 (Quartier Latin / Saint-Germain-des-Prés)
    const map = L.map('map').setView([48.852, 2.344], 15); // Coordonnées pour le centre du 5e arrondissement


    // Ajouter une couche de fond OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
        tileSize: 256,
    }).addTo(map);


    // Ajouter un marqueur pour l'adresse fictive
    const marker = L.marker([48.852, 2.344]).addTo(map);


    // Ajouter une popup avec une image
    const popupContent = `
        <div style="text-align: center;">
            <h3>Ina</h3>
            <p>20 Rue de la Parfumerie<br>Paris 5ème, France</p>
        </div>
    `;


    marker.bindPopup(popupContent);
});











