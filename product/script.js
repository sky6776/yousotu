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
    const soldOutProducts = document.querySelectorAll('.product.sold-out');

    soldOutProducts.forEach(product => {
      const soldOutOverlay = document.createElement('div');
      soldOutOverlay.classList.add('sold-out-overlay');
      soldOutOverlay.innerHTML = '<p>在庫切れ</p>';
      product.appendChild(soldOutOverlay);
    });
});
