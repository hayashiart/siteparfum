
        
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

// Récupère les éléments du DOM
const sliderMin = document.getElementById('slider-min'); // Curseur pour le prix minimum
const sliderMax = document.getElementById('slider-max'); // Curseur pour le prix maximum
const priceMin = document.getElementById('price-min');   // Affichage du prix minimum
const priceMax = document.getElementById('price-max');   // Affichage du prix maximum
const slider = document.querySelector('.slider');        // Barre de filtre

// Fonction pour mettre à jour les prix et la barre colorée
function updatePrice() {
  // Vérifie que le prix minimum ne dépasse pas le prix maximum
  if (parseInt(sliderMin.value) > parseInt(sliderMax.value)) {
    sliderMin.value = sliderMax.value; // Si c'est le cas, ajuste le prix minimum
  }

  // Met à jour l'affichage des prix
  priceMin.textContent = `${sliderMin.value}€`; // Affiche la valeur du curseur min dans l'élément priceMin
  priceMax.textContent = `${sliderMax.value}€`; // Affiche la valeur du curseur max dans l'élément priceMax

  // Calcule les positions en pourcentage pour le dégradé
  const minPosition = (sliderMin.value / 1000) * 100; // Position du curseur min (0% à 100%)
  const maxPosition = (sliderMax.value / 1000) * 100; // Position du curseur max (0% à 100%)

  // Met à jour les variables CSS pour le dégradé
  slider.style.setProperty('--slider-min-position', `${minPosition}%`); // Met à jour la position du curseur min
  slider.style.setProperty('--slider-max-position', `${maxPosition}%`); // Met à jour la position du curseur max
}

// Ajoute des écouteurs d'événements pour les curseurs
sliderMin.addEventListener('input', updatePrice); // Met à jour les prix quand le curseur min bouge
sliderMax.addEventListener('input', updatePrice); // Met à jour les prix quand le curseur max bouge

// Initialise la barre colorée au chargement de la page
updatePrice(); // Appelle la fonction pour afficher les valeurs initiales et configurer le dégradé
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

