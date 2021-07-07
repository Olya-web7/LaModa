const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Your city';

headerCityButton.addEventListener('click', () => {
    const city = prompt('Please choose your city');
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city);
})

//modal

const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');


const cartModalOpen = () => {
    cartOverlay.classList.add('cart-overlay-open');
};

const cartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay-open');
};

subheaderCart.addEventListener('click', () => {
    cartModalOpen();
});

cartOverlay.addEventListener('click', event => {
    const target = event.target;

    if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
        cartModalClose();
    }
});