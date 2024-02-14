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
    const searchInput = document.getElementById('searchInput');

    function selectAllCategories() {
        categoryButtons.forEach(button => {
            button.classList.remove('active');
        });
        categoryButtons[0].classList.add('active');
    }

    searchInput.addEventListener('input', function() {
        selectAllCategories();
        const searchTerm = this.value.trim().toLowerCase();

        if (searchTerm !== '') {
            products.forEach(product => {
                const productName = product.querySelector('.goods').textContent.trim().toLowerCase();
                if (productName.includes(searchTerm)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });

            const searchResultDiv = document.getElementById('searchResult');
            const searchResultMessage = document.createElement('p');
            searchResultMessage.textContent = '検索した商品はありません';
            searchResultDiv.innerHTML = '';
            searchResultDiv.appendChild(searchResultMessage);
        } else {
            products.forEach(product => {
                product.style.display = 'block';
            });
            document.getElementById('searchResult').innerHTML = '';
        }
    });

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

  
