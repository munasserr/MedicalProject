let page = document.querySelector(".first");

let imgsArr = [ "slider7.jpg" , "slider1.jpg" , "slider2.jpg" ,"slider3.jpg" ];

setInterval(() => {
    let rn = Math.floor(Math.random() * imgsArr.length);

    page.style.background = 'url("' +imgsArr[rn]+'")';
} , 5000)

window.addEventListener("scroll" , function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky" ,window.scrollY > 0);
})

const toggle_btn = document.getElementsByClassName('toggle-button')[0];
const navbar_links = document.getElementsByClassName('items')[0];

toggle_btn.addEventListener('click', () =>{
    navbar_links.classList.toggle('active');
})

const drop_2 = document.getElementsByClassName('drop2')[0];
const dropdown = document.getElementsByClassName('dropdown2')[0];

drop_2.addEventListener('click', () =>{
    dropdown.classList.toggle('active');
})