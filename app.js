let ul = document.getElementsByTagName('ul')[0];
let btn = document.getElementsByClassName('bi-list')[0];

btn.addEventListener('click', ()=> {
    ul.classList.toggle('ul_active');
})