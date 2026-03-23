// Sepet sayısını simüle edelim (İstersen her butona basıldığında artırabilirsin)
let count = 0;
function addToCartPreview() {
    count++;
    document.querySelector('.cart-count').innerHTML = count;
    // Sepeti salla
    const cart = document.querySelector('.floating-cart');
    cart.style.transform = "scale(1.2)";
    setTimeout(() => cart.style.transform = "scale(1)", 200);
}

// Ürün kartlarındaki butona basıldığında bu fonksiyonu çağırabilirsin
// Örn: <a onclick="addToCartPreview()" class="imo-btn">...</a>