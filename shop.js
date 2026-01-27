import { cart } from "./cart.js";
import { products } from "./product.js";

const shopContainer = document.querySelector('.shop-container');
const addCartBtn = document.querySelectorAll('.btnAddcart')

let html = '';
products.forEach((value) => {
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
                <select class="js-product-quantity-${value.id}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
        </select>
            </div>

            <div class="product-about">
                <p class="about-text">${value.about}</p>
            </div>

            <div class="button-container">
                <button class="btnAddcart addCart" data-item-id="${value.id}">Add to cart</button>
            </div>
            </div>
    `;
}) 

shopContainer.innerHTML = html; //DISPLAY THE PRODUCTS


const addtoCart = document.querySelectorAll('.btnAddcart');
const cartQuantityTag = document.querySelector('.cart-quantity');
const cartHTML = document.querySelector('.cart-quantity');

addtoCart.forEach( (button) => {
    button.addEventListener( 'click', () => {
        const productId = button.dataset.itemId;
        const quantity = document.querySelector(`.js-product-quantity-${productId}`);
        const itemQuantity = Number(quantity.value);
        
        //CHECK THE PRODUCT IF THERES A SAME PRODUCT
        let matchingItem;
        cart.forEach( (value) => {
            if (productId === value.productId) {
                matchingItem = value;
            }
        });

        //ANIMATION WHEN CLICKING ADD BUTTON
        button.innerHTML = 'Added'
            button.classList.add('triggerAdd')
            setTimeout(() => {
                button.innerHTML = 'Add to cart';
                button.classList.remove('triggerAdd');
            }, 1000);
            
        if (matchingItem) {
            matchingItem.quantity += 1;
        }
        else {
            
            cart.push({productId: productId, quantity: itemQuantity})
        }


        //LIVE CART QUANTITY IN NAV BAR
        let cartQty = 0;
        cart.forEach( (qty) => {
            cartQty += qty.quantity;
        })

        cartHTML.innerHTML = cartQty;

        console.log(cart)
    })
})