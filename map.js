const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');                              
    const selected = dropdown.querySelector('.selected');


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});


var kb = "https://www.google.com/maps/d/embed?mid=17ICyNuTy-Gfy-h3MNLEZMngKT5G9SNg&ehbc=2E312F"
var bk = "https://www.google.com/maps/d/embed?mid=10EtcxwlQlFT6Zoh3LJvJKca1fFAbGDc&ehbc=2E312F"
var gk = "https://www.google.com/maps/d/embed?mid=12gNH-YUIYabWXVkuuXSGOaHKObyQxNM&ehbc=2E312F"
var kg = "https://www.google.com/maps/d/embed?mid=1iV7X6cfgon_fSVYs355fiaVO2FLZtz4&ehbc=2E312F"
var yk = "https://www.google.com/maps/d/embed?mid=1zgrWDWYZMEoY1Vcfubwaiutgrkmtk_k&ehbc=2E312F"
var ky = "https://www.google.com/maps/d/embed?mid=1SHQKX3sfLcHD-8AKwibzKHqxCY4cxSo&ehbc=2E312F"
var bg = "https://www.google.com/maps/d/embed?mid=1KL7_DnuXvpteR-_qtiQpbwpr5FxGE4Q&ehbc=2E312F"
var by = "https://www.google.com/maps/d/embed?mid=1phPt9aHrpP8PUoKYAQ29QF1AnYE4hTQ&ehbc=2E312F"
var yg = "https://www.google.com/maps/d/embed?mid=1tlU6IuDOzDoR_wkNGNESFNPFYcHeovU&ehbc=2E312F"
var gy = "https://www.google.com/maps/d/embed?mid=1oJya01mPcJCxoMcFkrLFlfsx853HdGE&ehbc=2E312F" 
var gb ="https://www.google.com/maps/d/embed?mid=1b2y9Prg6CTSBk9jKORpByc_BBlAcYKI&ehbc=2E312F"
var yb = "https://www.google.com/maps/d/embed?mid=1xPxuE2lb5AZlsjRG2g5SOS93Zq5Bi5U&ehbc=2E312F"

var loc ;
var a;
var b;

function se(event) {
    a = event.target.innerHTML;
    sevar = a;
}
function des(event) {
    b= event.target.innerHTML;
    desvar = b;
}

function getValues() {

    if(a==b){
        alert("plz enter valid details");
        return ;
    }
    if(( a=="Kedarnath" && b == "Badrinath") ){
        loc = kb;
    }else if((b=="Kedarnath" && a == "Badrinath")){
        loc=bk;
    }
     else if( (b=="Kedarnath" && a == "Gangotri")){
        loc = gk;
    }else if((a=="Kedarnath" && b == "Gangotri") ){
        loc = kg;
    }
     else if(  (b=="Kedarnath" && a == "Yamunotri")){
        loc = yk;
    }else if((a=="Kedarnath" && b == "Yamunotri")){
      loc = ky;  
    }
     else if((a=="Badrinath" && b == "Gangotri")){
        loc = bg;
    }else if ((b=="Badrinath" && a == "Gangotri")){
        loc = gb;
    }
     else if((a=="Badrinath" && b == "Yamunotri") ){
        loc = by;
    }else if( (b=="Badrinath" && a == "Yamunotri")){
        loc = yb;
    }
     else if(b=="Gangotri" && a == "Yamunotri"){
        loc = yg;
    } else if(a=="Gangotri" && b == "Yamunotri"){
        loc=gy;
    }

    // <iframe id="demo"src="${loc}" width="640" height="480"></iframe>
    document.getElementById("demo").innerHTML = "<iframe id='demo' src='" + loc + " ' width='640' height='480'></iframe>"
    
}

// const items = document.querySelectorAll('.menu li');
// const select = document.querySelector('.select');

// items.forEach(item => {
//     item.addEventListener('click', () => {
//         select.textContent = item.textContent;
//     });
// });
