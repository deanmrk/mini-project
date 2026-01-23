const shopContainer = document.querySelector('.shop-container');
const addCartBtn = document.querySelectorAll('.btnAddcart')
renderProducts()
function renderProducts() {
    let html = '';
    products.forEach((value, i) => {
        html += `
            <div class="product-container">
                <div class="product-image">
                    <img class="image-style" src="${value.image}" alt="product-image">
                </div>
                
                <div class="product-name">
                    <p class="name-text">${value.name}</p>
                </div>

                <div class="product-price">
                    <p class="price-text">$${(value.price / 100).toFixed(2)}</p>
                </div>

                <div class="product-about">
                    <p class="about-text">${value.about}</p>
                </div>

                <div class="button-container">
                    <button class="btnAddcart" onclick="">Add to cart</button>
                </div>
             </div>
        `;
    }) 

    shopContainer.innerHTML = html;
}