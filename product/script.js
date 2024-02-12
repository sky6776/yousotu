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

document.addEventListener("DOMContentLoaded", function() {
  const categoryButtons = document.querySelectorAll('.category-button');
  const products = document.querySelectorAll('.product');

  const searchBox = document.getElementById('search-box');
  const searchButton = document.getElementById('search-button');
  const searchResults = document.getElementById('search-results');

  searchButton.addEventListener('click', function() {
      searchProducts();
      clearSearchBox();
  });

  searchBox.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          searchProducts();
          clearSearchBox();
      }
  });

  function searchProducts() {
      const searchTerm = searchBox.value.trim().toLowerCase();


      products.forEach(product => {
          product.style.display = 'none';
      });

      let found = false;

      products.forEach(product => {
          const productName = product.querySelector('.goods').textContent.trim().toLowerCase();
          if (productName.includes(searchTerm)) {
              product.style.display = 'block';
              found = true;
          }
      });

      if (!found) {
          searchResults.textContent = '検索した商品はありません';
      } else {
          searchResults.textContent = '';
      }

      categoryButtons.forEach(btn => btn.classList.remove('active'));
      categoryButtons[0].classList.add('active');
  }

  function clearSearchBox() {
      searchBox.value = '';
  }

  categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
          searchResults.textContent = '';
      });
  });
});
