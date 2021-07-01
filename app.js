function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
const divValue = document.querySelector("nav-btn > div");
const portValue = document.getElementsByClassName("port");
const abtValue = document.getElementsByClassName("abt");
const contValue = document.getElementsByClassName("cont");

// Object creation

let cardTitle = document.querySelectorAll(".card-body > h2");
let cardImage = document.querySelectorAll(".section-img");
let cardInfo = document.querySelectorAll(".info");
let cardDesc = document.querySelectorAll(".section-info");
let cardTech = document.querySelectorAll(".program-btns");
let cardBtn = document.querySelectorAll(".myBtn");
let cards = document.querySelectorAll(".card");

let cardObjects = [
  card1 = {
    title: cardTitle[0].innerHTML,
    info: cardInfo[0],
    Image: cardImage[0],
    description: cardDesc[0],
    technologies: cardTech[0],
    linkVersion: "www.google.com",
    linkSource: "www.google.com",
    cardbutton: cardBtn[0],
  },
  
  card2 = {
    title: cardTitle[2].innerHTML,
    info: cardInfo[1],
    Image: cardImage[1],
    description: cardDesc[1],
    technologies: cardTech[1],
    linkVersion: "www.google.com",
    linkSource: "www.google.com",
    cardbutton: cardBtn[3],
  },

  card3 = {
    title: cardTitle[4].innerHTML,
    info: cardInfo[2],
    Image: cardImage[2],
    description: cardDesc[2],
    technologies: cardTech[2],
    linkVersion: "www.google.com",
    linkSource: "www.google.com",
    cardbutton: cardBtn[4],
  },

  card4 = {
    title: cardTitle[5].innerHTML,
    info: cardInfo[3],
    Image: cardImage[3],
    description: cardDesc[2],
    technologies: cardTech[3],
    linkVersion: "www.google.com",
    linkSource: "www.google.com",
    cardbutton: cardBtn[5],
  },
]

// modal creation

let div = document.createElement("div");
div.className = "modal";
div.id = "myModal";
div.setAttribute('data-close-button', '');
let div2 = document.createElement("div");
div2.className = "modal-content modal-card";

let div3 = document.createElement("div");
div3.id = "modal-header";
let h2 = document.createElement("h2");
h2.id = 'modal-title'
h2.innerHTML = 'ffff';
div3.appendChild(h2);
let button1 = document.createElement("span");
button1.setAttribute("class", "close");
button1.innerHTML = '&times;';
div3.appendChild(button1);
div2.appendChild(div3);

let div8 = document.createElement("div");
div8.className = "modal-float2";

let p = document.createElement("p");
p.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
p.className = "modal-desc";
div8.appendChild(p);

let div7 = document.createElement('div');
div7.className = 'modal-float';

let div5 = document.createElement("div");
div5.id = "modal-foot";
let button2 = document.createElement("button");
button2.setAttribute("type", "button");
button2.className = "btn4 btn";
button2.textContent = "See live";
let livesee = document.querySelector(".modallive");
livesee.style.display = "block";
livesee.firstElementChild.style.width = '25px'
livesee.firstElementChild.style.height = '25px'
livesee.style.heigth = '8px'
livesee.style.marginLeft = '5px'
button2.appendChild(livesee);
div5.appendChild(button2);

let button3 = document.createElement("button");
button3.setAttribute("type", "button");
button3.className = "btn4 btn";
button3.textContent = "See Source";
let git = document.querySelector(".modalgit");
git.style.display = "block";
git.style.marginLeft = '5px'
button3.appendChild(git);
div5.appendChild(button3);

div7.appendChild(div5)

div8.appendChild(div7);
div2.appendChild(div8);

let div6 = document.createElement("div");
div6.id = "modal-line";
div.appendChild(div2);
div.appendChild(div6);

let body = document.getElementById("body");
body.appendChild(div);
console.log(body);

// Open

for(let i = 0; i < cardObjects.length; i++) {
  cardObjects[i].cardbutton = cardBtn[i]
  if(cardObjects[i].cardbutton.classList.contains('myBtn1')) {
    cardObjects[i].cardbutton = cardBtn[0];
    let btn = cardObjects[i].cardbutton;
    btn.onclick = function () {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    h2.innerHTML = cardObjects[i].title;
    div2.insertBefore(cardObjects[i].Image, div8);
    div2.insertBefore(cardObjects[i].info, cardObjects[i].Image);
    div7.insertBefore(cardObjects[i].technologies, div5);
    }
  } 
  if (cardObjects[i].cardbutton.classList.contains("myBtn2")) {
    cardObjects[i].cardbutton = cardBtn[1];
    let btn = cardObjects[i].cardbutton;
    btn.onclick = function () {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    h2.innerHTML = cardObjects[i].title;
    div2.insertBefore(cardObjects[i].Image, div8);
    div2.insertBefore(cardObjects[i].info, cardObjects[i].Image);
    div7.insertBefore(cardObjects[i].technologies, div5);
    }
  }
  if (cardObjects[i].cardbutton.classList.contains("myBtn3")) {
    cardObjects[i].cardbutton = cardBtn[2];
    let btn = cardObjects[i].cardbutton;
    btn.onclick = function () {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    h2.innerHTML = cardObjects[i].title;
    div2.insertBefore(cardObjects[i].Image, div8);
    div2.insertBefore(cardObjects[i].info, cardObjects[i].Image);
    div7.insertBefore(cardObjects[i].technologies, div5);
    }
  }
  else if (cardObjects[i].cardbutton.classList.contains("myBtn4")) {
    cardObjects[i].cardbutton = cardBtn[3];
    let btn = cardObjects[i].cardbutton;
    btn.onclick = function () {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    h2.innerHTML = cardObjects[i].title;
    div2.insertBefore(cardObjects[i].Image, div8);
    div2.insertBefore(cardObjects[i].info, cardObjects[i].Image);
    div7.insertBefore(cardObjects[i].technologies, div5);
  } 
 }
}

// Closing

// let modal = document.getElementById("myModal");
// let span = document.getElementsByClassName("close")[0];
// span.onclick = function () {
//   modal.style.display = "none";
// };
// window.onclick = function (event) {
//  if (event.target == modal) {
//  modal.style.display = "none";
// }
// }


