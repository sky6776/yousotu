document.addEventListener("DOMContentLoaded", function() {

  const categoryButtons = document.querySelectorAll('.category-button');
  const products = document.querySelectorAll('.product');

  categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
          const category = this.getAttribute('data-category');

          categoryButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');

          products.forEach(product => {
              product.style.display = 'none';
              if (category === 'all' || product.classList.contains(category)) {
                  product.style.display = 'block';
              }
          });
      });
  });
});

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
document.addEventListener("DOMContentLoaded", function() {

    const hideModalCheckbox = document.getElementById('hide-modal-checkbox');
    const modalWindow = document.getElementById('modal-window');

    if (localStorage.getItem('hideModalToday') === 'true') {
        modalWindow.style.display = 'none';
    }

    hideModalCheckbox.addEventListener('click', function() {
        if (hideModalCheckbox.checked) {
            localStorage.setItem('hideModalToday', 'true');
        }
    });

});
