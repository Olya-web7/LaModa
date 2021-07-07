const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Your city';

headerCityButton.addEventListener('click', () => {
    const city = prompt('Please choose your city');
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city);
})