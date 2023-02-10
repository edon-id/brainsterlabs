// NAVBAR JS 

const hamburger = document.querySelector(".my-hamburger");
const navBar = document.querySelector(".my-nav-bar");
const closeHamburger = document.querySelector(".close-hamburger");

hamburger.addEventListener("click", () => {
    
    navBar.classList.toggle("is-active");
    closeHamburger.classList.toggle("is-active");
  });

////////////////////////////////////////////////////////////////////////

// CARDS JS //

document.querySelector('#show-coding').addEventListener("click", showCoding);
document.querySelector('#show-marketing').addEventListener("click", showMarketing);
document.querySelector('#show-design').addEventListener("click", showDesign);

function showCoding() {
  var allCards = document.querySelectorAll(".show-cards");

  allCards.forEach(card => {
    card.style.display = "none";
  });

  var codingCards = document.querySelectorAll(".coding");
  codingCards.forEach(codingCard => {
    codingCard.style.display = "inline-block";
  });

}

function showMarketing() {
  var allCards = document.querySelectorAll(".show-cards");

  allCards.forEach(card => {
    card.style.display = "none";
  });

  var marketingCards = document.querySelectorAll(".marketing");
  marketingCards.forEach(marketingCard => {
    marketingCard.style.display = "inline-block";
  });

}

function showDesign() {
  var allCards = document.querySelectorAll(".show-cards");

  allCards.forEach(card => {
    card.style.display = "none";
  });

  var designCards = document.querySelectorAll(".design");
  designCards.forEach(designCard => {
    designCard.style.display = "inline-block";
  });

}

//////////////////////////////////////////////////////////////////

// ----------------- SHOW MORE BUTTON ----------------------------

window.addEventListener("load", function () {
  var mobile = window.matchMedia("(max-width: 767px)");

  if (mobile.matches) {
  document.getElementById("load-more").style.display = "block";

  var remainingCards = document.querySelectorAll(".remaining-cards");
  for (var i = 0; i < remainingCards.length; i++) {
  remainingCards[i].style.display = "none";
  }
}

document.getElementById("load-more").addEventListener("click", function () {
  var initialCards = document.querySelectorAll(".initial-cards");
  var remainingCards = document.querySelectorAll(".remaining-cards");

  for (var i = 0; i < initialCards.length; i++) {
  initialCards[i].style.display = "inline-block";
  }

  for (var i = 0; i < remainingCards.length; i++) {
  remainingCards[i].style.display = "inline-block";
  }
  document.getElementById("load-more").style.display = "none";
  });
});

//////////////////////////////////////////////////////////////////
