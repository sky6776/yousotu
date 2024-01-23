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

    document.getElementById('close-modal-button').addEventListener('click', function() {
        const disableModalCheckbox = document.getElementById('disable-modal-checkbox');
        if (disableModalCheckbox.checked) {
            setCookie('disableModal', 'true', 1);
        }

        document.getElementById('modal-window').style.display = 'none';
    });

    const disableModalCheckbox = document.getElementById('disable-modal-checkbox');
    if (!getCookie('disableModal')) {
        setTimeout(function() {
            document.getElementById('opening-layer').style.opacity = '0';
            setTimeout(function() {
                document.getElementById('opening-layer').style.display = 'none';
                document.getElementById('modal-window').style.display = 'flex';
            }, 3000);
        }, 1000);
    } else {
        document.getElementById('modal-window').style.display = 'none';
    }


    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
    }

    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }
});
