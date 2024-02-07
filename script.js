document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {
        document.getElementById('opening-layer').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('opening-layer').style.display = 'none';
            document.getElementById('modal-window').style.display = 'flex';
        }, 3000);
    }, 1000);

    document.getElementById('close-modal-button').addEventListener('click', function() {
        document.getElementById('modal-window').style.display = 'none';
    });
});


document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.getElementById('opening-layer').style.opacity = '0';
      setTimeout(function() {
          document.getElementById('opening-layer').style.display = 'none';
      }, 3000);
  }, 1000);
});

const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
  }

  function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function startSlider() {
    showSlide(currentSlide);
    setInterval(nextSlide, 5000);
  }

  startSlider();
