/* Sidebar */

const sidebar = document.querySelector('.sidebar');
const sideToggle = document.querySelector('.sidebar__toggle');

sideToggle.addEventListener('click', function(){
    sidebar.classList.toggle('open');
});

const list = document.querySelectorAll('.sidebar__item');
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click', activeLink));

/* Slider */