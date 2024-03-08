function updatePrice(quantity) {
    const pricePerUnit = 64;
    const totalPrice = pricePerUnit * quantity;
    document.querySelector('.product-price').textContent = 'レッドストーン' + totalPrice.toLocaleString();
}
