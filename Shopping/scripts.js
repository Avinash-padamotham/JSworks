document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', event => {
            const productCard = event.target.closest('.card');
            const productName = productCard.querySelector('.card-title').textContent;
            const productPrice = productCard.querySelector('.card-text').textContent;

            const product = {
                name: productName,
                price: parseFloat(productPrice.replace('$', ''))
            };

            cart.push(product);
            updateCart();
        });
    });

    cartIcon.addEventListener('click', () => {
        displayCart();
        $('#cart-modal').modal('show');
    });

    function updateCart() {
        cartCount.textContent = cart.length;
    }

    function displayCart() {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            const removeButton = document.createElement('button');
            removeButton.classList.add('btn', 'btn-danger', 'btn-sm');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                cart.splice(index, 1);
                updateCart();
                displayCart();
            });
            cartItem.appendChild(removeButton);
            cartItems.appendChild(cartItem);
        });
    }
});

let MyBtn = document.querySelector(".SubBtn");
let dataValue = document.querySelectorAll(".box");

dataValue.forEach(function(item){
    //console.log(item);
    MyBtn.addEventListener('click' , function(){
        let mini = parseInt(document.getElementById("min").value);
        let maxi = parseInt(document.getElementById("max").value);

        let DataItems = item.getAttribute('data-value');

        if(DataItems >= mini && DataItems <= maxi ){
            item.style.display="block"
        }
        else{
            item.style.display="none"
        }
    })
})
