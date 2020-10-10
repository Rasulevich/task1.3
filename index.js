let openList = document.querySelector('.brands');

let nextButton = document.querySelector('.next-button');

nextButton.addEventListener('click', function (){
    if (!openList.classList.contains('brands--open')){
        openList.classList.add('brands--open');
        nextButton.textContent = "Скрыть";
        }
    else {
        openList.classList.remove('brands--open');
        nextButton.textContent = "Показать все";
    }
});

 var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    pagination: {
    el: '.swiper-pagination' }
    });

swiper();
