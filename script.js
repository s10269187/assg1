document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("main-image");
  
    image.addEventListener("click", () => {
      alert("(G)I-DLE Forever!");
    });
  });
  
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  const dots = Array.from(document.querySelectorAll('.dot'));
  
  let currentIndex = 0;
  
  function updateCarousel() {
      const slideWidth = slides[currentIndex].getBoundingClientRect().width;
      track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
  
      // Update dots
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
  }
  
  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length; // Loop back to the start
      updateCarousel();
  });
  
  prevButton.addEventListener('click', () => {
      // Change this line to correctly update the index
      currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the end
      updateCarousel();
  });
  
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          currentIndex = index; // Set current index to the clicked dot
          updateCarousel();
      });
  });

  function addToCart() {
    alert("Successfully added to cart");
  }

