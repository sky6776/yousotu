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
    const modalWindow = document.getElementById('modal-window');
    const dontShowAgainCheckbox = document.getElementById('dont-show-again-checkbox');

    const today = new Date().toLocaleDateString();

    const storedDate = localStorage.getItem('dontShowAgainDate');

    if (!storedDate || storedDate !== today || !dontShowAgainCheckbox.checked) {
        setTimeout(function() {
            document.getElementById('opening-layer').style.opacity = '0';
            setTimeout(function() {
                document.getElementById('opening-layer').style.display = 'none';
                modalWindow.style.display = 'flex';
            }, 3000);
        }, 1000);
    }

    dontShowAgainCheckbox.addEventListener('change', function() {
        if (dontShowAgainCheckbox.checked) {
            localStorage.setItem('dontShowAgainDate', today);
        }
    });

    document.getElementById('close-modal-button').addEventListener('click', function() {
        modalWindow.style.display = 'none';
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
    const soldOutProducts = document.querySelectorAll('.product.sold-out');

    soldOutProducts.forEach(product => {
      const soldOutOverlay = document.createElement('div');
      soldOutOverlay.classList.add('sold-out-overlay');
      soldOutOverlay.innerHTML = '<p>在庫切れ</p>';
      product.appendChild(soldOutOverlay);
    });
  });
