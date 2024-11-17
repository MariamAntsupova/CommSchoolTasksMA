const products = [
    { id: 1, name: "MSI Cyborg 15 AI A1VEK-084XGE", oldPrice: 3799, newPrice: 3199, category: "Laptops", image: "https://pcshop.ge/wp-content/uploads/I31201.jpg" },
    { id: 2, name: "Acer Aspire 5 A515-58P-33UJ", oldPrice: 1399 , newPrice: 1249, category: "Laptops", image: "https://pcshop.ge/wp-content/uploads/I30490.jpg" },
    { id: 3, name: "HP 15-fd0078ci", oldPrice: 1549 , newPrice: 1349, category: "Laptops", image: "https://pcshop.ge/wp-content/uploads/I30150.jpg" },
    { id: 4, name: "Samsung Galaxy S24 Ultra", oldPrice: 3549, newPrice: 3000, category: "Smartphones", image: "https://taon.ge/storage/537/jHMUWqyvfaxtpJF4H06Wd7A3cQHmEK-metaRzE5aVk5Y0V0ZkdlUjFkUlhQZU96bHV2UlZLQlZILW1ldGFhM1kxY2prd2JFWmtTR1pWZUZGd1ZVcGhUM3BWZURaMVFXSlpUamhJWWtscVpETm1hMjFoVlM1cWNHYz0tLmpwZw==-.jpg" },
    { id: 5, name: "Samsung Galaxy Z Flip 6", oldPrice: 4000 , newPrice: 3500, category: "Smartphones", image: "https://assets.ee.ge/elit-product-images/IMG-000066214-1.jpg" },
    { id: 6, name: "Apple iPhone 16 Pro", oldPrice: 5000 , newPrice: 4500, category: "Smartphones", image: "https://sonic.ge/dyn/NY9HhRzEZ7g28yf2GmIbdQDCEsX2HRvOg8RLQoZgi_8/rs:fit:720:0/plain/images/products/original/113b0741-adf0-43e4-bba9-295e90ad3202.jpg" },
    { id: 7, name: "Apple AirPods Max", oldPrice: 1989 , newPrice: 1600, category: "Headphones", image: "https://taon.ge/storage/1393/pVZ16NUVF2JEfFZkIFBXkBqdtxYgGr-metaMTE2MTUzXzEuanBn-.jpg" },
    { id: 8, name: "BANG & OLUFSEN ", oldPrice: 3079 , newPrice: 2700, category: "Headphones", image: "https://cdn0.it4profit.com/s3size/rt:fill/w:900/h:900/g:no/el:1/f:webp/plain/s3://cms/product/b4/15/b4154de7294695a7bf112fcf3f1d80c1/240530140012603232.webp" },
    { id: 9, name: "Marshall Major IV", oldPrice: 499 , newPrice: 299, category: "Headphones", image: "https://sonic.ge/dyn/JtRbwbBqJCw8vkuOGLHfsq_FE985M_YNygsrn9zFvmY/rs:fit:720:0/plain/images/products/original/113315f6-afe4-4671-be11-e6349d7adb85.jpg" },
    { id: 10, name: "Canon EOS 4000D", oldPrice: 4000 , newPrice: 3500, category: "Cameras", image: "https://media.veli.store/media/product/3011C004AA.jpg" },
    { id: 11, name: "Sony", oldPrice: 4860 , newPrice: 3950, category: "Cameras", image: "https://i.ebayimg.com/images/g/0moAAOSwPuZlvVA8/s-l1600.webp" },
    { id: 12, name: "Fuji X-T5", oldPrice: 8000 , newPrice: 7800, category: "Cameras", image: "https://ts2.store/8203-medium_default/fuji-x-t5-xf16-80mm-black-kit.jpg" },
] 
let cart = JSON.parse(sessionStorage.getItem("cart")) || []  ;
const cartsContainer = document.querySelector(".carts")  ;
const cartTableBody = document.getElementById("cart-table-body")  ;

function saveCart() {
    sessionStorage.setItem("cart", JSON.stringify(cart)) 
}

function displayProducts(category = "All") {
    cartsContainer.innerHTML = products
        .filter(product => category === "All" || product.category === category)
        .map(product => `
            <div class="cart">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="cart-bottom">
                    <div class="prices">
                        <p class="old_price">₾${product.oldPrice}</p>
                        <p class="new_price">₾${product.newPrice}</p>
                    </div>
                </div>
                <button onclick="addToCart(${product.id})">Add to Cart</button>

            </div>
        `).join("")  ;

}


document.getElementById("category-filter").addEventListener("change", (e) => {
    displayProducts(e.target.value) ;
}) 


function updateCartTable() {
    cartTableBody.innerHTML = cart.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>₾${item.newPrice}</td>
            <td>
                <button onclick="changeQuantity(${item.id}, -1)">-</button>
                ${item.quantity}
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
            </td>
            <td>₾${item.newPrice * item.quantity}</td>
            <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
        </tr>
    `).join("") 
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId)  ;
    const cartItem = cart.find(item => item.id === productId);  
    cartItem ? cartItem.quantity++ : cart.push({ ...product, quantity: 1 })  
    saveCart()  ;
    updateCartTable();  
}



function changeQuantity(productId, amount) {
    const cartItem = cart.find(item => item.id === productId); 
    if (cartItem) {
        cartItem.quantity += amount; 
        if (cartItem.quantity <= 0) cart.splice(cart.indexOf(cartItem),1); 
    }
    saveCart() ;
    updateCartTable()  ;
}

function removeFromCart(productId) {
    const cartItemIndex = cart.findIndex(item => item.id === productId)
    if (cartItemIndex > -1) cart.splice(cartItemIndex, 1) 
    saveCart() ;
    updateCartTable()  ;
}


window.onload = () => {
    displayProducts();
    updateCartTable();
}