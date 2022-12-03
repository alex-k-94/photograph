/* Sidebar */

const sidebar = document.querySelector('.sidebar');
const sideToggle = document.querySelector('.sidebar__toggle');
const overlay = document.querySelector('.overlay');
const block = document.querySelector('.type__block-part-2');

sideToggle.addEventListener('click', function(){
    sidebar.classList.toggle('open');
    overlay.classList.toggle('o__active');
    block.classList.toggle('shadow');
});

const list = document.querySelectorAll('.sidebar__item');
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click', activeLink));

/* Carousel */

const images = document.querySelectorAll('.carousel__image');
const sliderLine = document.querySelector('.carousel__line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.carousel').offsetWidth; 
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
};

window.addEventListener('resize', init);

init();

document.querySelector('.carousel__prev').addEventListener('click', function() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

document.querySelector('.carousel__next').addEventListener('click', function() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.carousel__button-prev').addEventListener('click', function() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

document.querySelector('.carousel__button-next').addEventListener('click', function() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
};

/* Mobile */

const mobileList = document.querySelectorAll('.mobile__item');
function activeMobileLink(){
    mobileList.forEach((item) => 
    item.classList.remove('mobile__active'));
    this.classList.add('mobile__active');
}

mobileList.forEach((item) =>
item.addEventListener('click', activeMobileLink));