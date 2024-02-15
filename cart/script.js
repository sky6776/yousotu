const products = [
    { name: "こだいのがれき", subName: "古代のがれき", price: { diamond: "3ダイヤモンド" }, image: "../image/Ancient.jpg" },
    { name: "きんブロック", subName: "金ブロック", price: { diamond: "1ダイヤモンド" }, image: "../image/Gold_block.jpg" },
    { name: "てつブロック", subName: "鉄ブロック", price: { diamond: "1ダイヤモンド" }, image: "../image/Iron_block.jpg" },
    { name: "こくようせき", subName: "黒曜石", price: { diamond: "1ダイヤモンド" }, image: "../image/Obsidian_block.jpg" },
    { name: "ポーション", subName: "ポーション", price: { emerald: "5エメラルド" }, image: "../image/poshon.png" },
    { name: "ネザーウォート", subName: "ネザーウォート", price: { redstone: "1レッドストーン" }, image: "../image/nether.png" },
    { name: "ようがんいりバケツ", subName: "マグマバケツ", price: { diamond: "1ダイヤモンド" }, image: "../image/Lava_Bucket.jpg" },
    { name: "ダメージ増加5アンデット特攻5水生特攻5効率5修繕", subName: "エンチャントサービス", price: { diamond: "2ダイヤモンド" }, image: "../image/Enchanted_Book.jpg" },
    { name: "ダメージ軽4ダメージ増加4アンデット特攻4ドロップ増加3射撃ダメージ増加5激流3忠誠3水生特攻4効率4耐久3", subName: "エンチャントサービス", price: { diamond: "1ダイヤモンド" }, image: "../image/Enchanted_Book.jpg" },
    { name: "無限射撃ダメージ増加4召雷幸運3シルクタッチ水中呼吸3水中採掘落下耐性4氷渡り2棘の鎧3", subName: "エンチャントサービス", price: { emerald: "8エメラルド" }, image: "../image/Enchanted_Book.jpg" },
    { name: "そのた", subName: "エンチャントサービスその他", price: { emerald: "4エメラルド" }, image: "../image/Enchanted_Book.jpg" },
    { name: "かいようのこころ", subName: "海洋の心", price: { emerald: "20エメラルド" }, image: "../image/Heartsea.jpg" },
    { name: "ダイヤモンドぼうぐ", subName: "ダイヤモンド防具", price: { diamond: "2ダイヤモンド" }, image: "../image/armor.jpg" },
    { name: "ダイヤモンドツール", subName: "ダイヤモンドツール", price: { diamond: "1ダイヤモンド" }, image: "../image/Pickaxe.jpg" },
    { name: "ブレイズロッド", subName: "ブレイズロッド", price: { lapis: "5ラピスラズリ" }, image: "../image/Rod.jpg" },
    { name: "ソウルスピード", subName: "ソウルスピード", price: { diamond: "10ダイヤモンド" }, image: "../image/Enchanted_Book.jpg" },
    { name: "ふしのトーテム", subName: "不死のトーテム", price: { diamond: "3ダイヤモンド" }, image: "../image/Totem.png" },
    { name: "エンダーパール", subName: "エンダーパール", price: { redstone: "2レッドストーン" }, image: "../image/enderpearl.jpg" },
    { name: "エンダーアイ", subName: "エンダーアイ", price: { redstone: "3レッドストーン" }, image: "../image/eye.jpg" },
    { name: "エンダーチェスト", subName: "エンダーチェスト", price: { diamond: "2ダイヤモンド" }, image: "../image/latest.png" },
    { name: "シェルカーのから", subName: "シェルカーの殻", price: { diamond: "1ダイヤモンド" }, image: "../image/shulker.jpg" }

];

const productsContainer = document.getElementById("products");
const cart = document.getElementById("cart");
const totalDiamond = document.getElementById("totalDiamond");
const totalEmerald = document.getElementById("totalEmerald");
const totalRedstone = document.getElementById("totalRedstone");
const totalLapis = document.getElementById("totalLapis");
const searchInput = document.querySelector(".search");

let cartItems = [];

function renderProducts() {
    productsContainer.innerHTML = "";
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.subName.toLowerCase().includes(searchTerm)
    );

    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        const price = Object.values(product.price)[0];
        const currency = Object.keys(product.price)[0];
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div>${product.subName}</div>
            <div>${price}</div>
            <button onclick="addToCart('${product.name}', '${price}', '${currency}')">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function addToCart(name, price, currency) {
    const existingItem = cartItems.find(item => item.name === name && item.currency === currency);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name, price, currency, quantity: 1 });
    }

    updateCart();
}

function removeFromCart(name, currency) {
    cartItems = cartItems.filter(item => !(item.name === name && item.currency === currency));
    updateCart();
}

function updateCart() {
    cart.innerHTML = "";
    let totalDiamondAmount = 0;
    let totalEmeraldAmount = 0;
    let totalRedstoneAmount = 0;
    let totalLapisAmount = 0;

    cartItems.forEach(item => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <div>${item.name}</div>
            <div>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', '${item.currency}', this.value)">
            </div>
            <div>${item.price}</div>
            <button onclick="removeFromCart('${item.name}', '${item.currency}')">Remove</button>
        `;
        cart.appendChild(productDiv);

        switch (item.currency) {
            case 'diamond':
                totalDiamondAmount += parseInt(item.price) * item.quantity;
                break;
            case 'emerald':
                totalEmeraldAmount += parseInt(item.price) * item.quantity;
                break;
            case 'redstone':
                totalRedstoneAmount += parseInt(item.price) * item.quantity;
                break;
            case 'lapis':
                totalLapisAmount += parseInt(item.price) * item.quantity;
                break;
        }
    });

    totalDiamond.textContent = `${totalDiamondAmount} ダイヤモンド`;
    totalEmerald.textContent = `${totalEmeraldAmount} エメラルド`;
    totalRedstone.textContent = `${totalRedstoneAmount} レッドストーン`;
    totalLapis.textContent = `${totalLapisAmount} ラピスラズリ`;
}

function updateQuantity(name, currency, quantity) {
    const item = cartItems.find(item => item.name === name && item.currency === currency);
    if (item) {
        item.quantity = parseInt(quantity);
        updateCart();
    }
}

searchInput.addEventListener("input", renderProducts);
window.onload = renderProducts;
