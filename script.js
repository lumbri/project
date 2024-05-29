document.addEventListener("DOMContentLoaded", (event) => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  const toggleNav = () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  };

  burger.addEventListener("click", toggleNav);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
    });
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const emailInput = document.getElementById("email");
const errorEmail = document.getElementById("error_email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("input", () => {
  const isValidEmail = emailRegex.test(emailInput.value);
  if (!isValidEmail) {
    errorEmail.textContent = "Please enter a valid email address.";
  } else {
    errorEmail.textContent = "";
  }
});

//*gallery

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
