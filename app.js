// Object creation

const cardTitle = document.querySelectorAll('.card-body > h2');
const cardImage = document.querySelectorAll('.section-img1');
const cardInfo = document.querySelectorAll('#info');
const cardDesc = document.querySelectorAll('.section-info');
const cardTech = document.querySelectorAll('.program-btns');
const cardBtn = document.querySelectorAll('.myBtn');

// building modal content

// Info for modal 1
const ul1 = document.createElement('ul');
ul1.className = 'info';
const li1 = document.createElement('li');
li1.textContent = 'Canopy';
ul1.appendChild(li1);
const li2 = document.createElement('li');
li2.textContent = 'Back-End';
ul1.appendChild(li2);
const li3 = document.createElement('li');
li3.textContent = '2015';
ul1.appendChild(li3);

// info for modal 2
const ul2 = document.createElement('ul');
ul2.className = 'info';
const li4 = document.createElement('li');
li4.textContent = 'facebook';
ul2.appendChild(li4);
const li5 = document.createElement('li');
li5.textContent = 'Back-end';
ul2.appendChild(li5);
const li6 = document.createElement('li');
li6.textContent = '2015';
ul2.appendChild(li6);

// info for modal 3
const ul3 = document.createElement('ul');
ul3.className = 'info';
const li7 = document.createElement('li');
li7.textContent = 'Facebook';
ul3.appendChild(li7);
const li8 = document.createElement('li');
li8.textContent = 'Back End';
ul3.appendChild(li8);
const li9 = document.createElement('li');
li9.textContent = '2015';
ul3.appendChild(li9);

// info for modal4
const ul4 = document.createElement('ul');
ul4.className = 'info';
const li10 = document.createElement('li');
li10.textContent = 'Uber';
ul4.appendChild(li10);
const li11 = document.createElement('li');
li11.textContent = 'Lead Developer';
ul4.appendChild(li11);
const li12 = document.createElement('li');
li12.textContent = '2015';
ul4.appendChild(li12);

// Techno for modal 1
const ul5 = document.createElement('ul');
ul5.className = 'program-btns';
const li13 = document.createElement('li');
li13.className = 'btn-ctn btn-html';
li13.textContent = 'html';
ul5.appendChild(li13);
const li14 = document.createElement('li');
li14.textContent = 'ruby on rails';
li14.className = 'btn-ctn btn-ruby';
ul5.appendChild(li14);
const li15 = document.createElement('li');
li15.textContent = 'css';
li15.className = 'btn-ctn btn-css';
ul5.appendChild(li15);
const li16 = document.createElement('li');
li16.textContent = 'javaScript';
li16.className = 'btn-ctn btn-js';
ul5.appendChild(li16);

// Create images

const image1 = document.createElement('img');
image1.src = './image/images-head/snapshoot (1).png';
image1.alt = 'images';
const image2 = document.createElement('img');
image2.src = './image/images-head/snapshoot (2).png';
image2.alt = 'images';
const image3 = document.createElement('img');
image3.src = './image/images-head/snapshoot (3).png';
image3.alt = 'images';
const image4 = document.createElement('img');
image4.src = './image/images-head/snapshoot (4).png';
image4.alt = 'images';

let card1 = {};
let card2 = {};
let card3 = {};
let card4 = {};

const cardObjects = [
  (card1 = {
    title: cardTitle[0].innerHTML,
    info: cardInfo[0],
    Image: cardImage[0],
    description: cardDesc[0],
    technologies: cardTech[0],
    cardbutton: cardBtn[0],
    Live: 'https://pasytchangwa.github.io/My-Portfolio/',
    Source: 'https://github.com/pasytchangwa/My-Portfolio',
  }),
  (card2 = {
    title: cardTitle[2].innerHTML,
    info: cardInfo[1],
    Image: cardImage[1],
    description: cardDesc[1],
    technologies: cardTech[1],
    cardbutton: cardBtn[3],
    Live: 'https://pasytchangwa.github.io/My-Portfolio/',
    Source: 'https://github.com/pasytchangwa/My-Portfolio',
  }),
  (card3 = {
    title: cardTitle[4].innerHTML,
    info: cardInfo[2],
    Image: cardImage[2],
    description: cardDesc[2],
    technologies: cardTech[2],
    cardbutton: cardBtn[4],
    Live: 'https://pasytchangwa.github.io/My-Portfolio/',
    Source: 'https://github.com/pasytchangwa/My-Portfolio',
  }),
  (card4 = {
    title: cardTitle[5].innerHTML,
    info: cardInfo[3],
    Image: cardImage[3],
    description: cardDesc[2],
    technologies: cardTech[3],
    cardbutton: cardBtn[5],
    Live: 'https://pasytchangwa.github.io/My-Portfolio/',
    Source: 'https://github.com/pasytchangwa/My-Portfolio',
  }),
];

// Open Modal

for (let i = 0; i < cardObjects.length; i += 1) {
  cardObjects[i].cardbutton = cardBtn[i];
  if (cardObjects[i].cardbutton.classList.contains('myBtn1')) {
    cardObjects[i] = card1;
    const btn = cardObjects[i].cardbutton;
    btn.addEventListener('click', () => {
      const modal = document.querySelector('#myModal');
      modal.style.display = 'block';
      const h2 = document.getElementById('modal-title');
      h2.innerHTML = cardObjects[i].title;
      const closing = document.getElementById('close');
      closing.innerHTML = '&times;';
      const info = document.querySelector('.infos');
      info.appendChild(ul1);
      const modalimg = document.querySelector('.img1');
      modalimg.src = image1.src;
      const description = document.querySelector('.modal-desc');
      description.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
      const technologies = document.querySelector('.program-btn');
      technologies.appendChild(ul5);
    });
  }
  if (cardObjects[i].cardbutton.classList.contains('myBtn2')) {
    cardObjects[i] = card2;
    const btn = cardObjects[i].cardbutton;
    btn.addEventListener('click', () => {
      const modal = document.querySelector('#myModal');
      modal.style.display = 'block';
      const h2 = document.getElementById('modal-title');
      h2.innerHTML = cardObjects[i].title;
      const closing = document.getElementById('close');
      closing.innerHTML = '&times;';
      const info = document.querySelector('.infos');
      info.appendChild(ul1);
      const modalimg = document.querySelector('.img1');
      modalimg.src = image2.src;
      const description = document.querySelector('.modal-desc');
      description.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
      const technologies = document.querySelector('.program-btn');
      technologies.appendChild(ul5);
    });
  }
  if (cardObjects[i].cardbutton.classList.contains('myBtn3')) {
    cardObjects[i] = card3;
    const btn = cardObjects[i].cardbutton;
    btn.addEventListener('click', () => {
      const modal = document.querySelector('#myModal');
      modal.style.display = 'block';
      const h2 = document.getElementById('modal-title');
      h2.innerHTML = cardObjects[i].title;
      const closing = document.getElementById('close');
      closing.innerHTML = '&times;';
      const info = document.querySelector('.infos');
      info.appendChild(ul1);
      const modalimg = document.querySelector('.img1');
      modalimg.src = image3.src;
      const description = document.querySelector('.modal-desc');
      description.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
      const technologies = document.querySelector('.program-btn');
      technologies.appendChild(ul5);
    });
  } else if (cardObjects[i].cardbutton.classList.contains('myBtn4')) {
    cardObjects[i] = card4;
    const btn = cardObjects[i].cardbutton;
    btn.addEventListener('click', () => {
      const modal = document.querySelector('#myModal');
      modal.style.display = 'block';
      const h2 = document.getElementById('modal-title');
      h2.innerHTML = cardObjects[i].title;
      const closing = document.getElementById('close');
      closing.innerHTML = '&times;';
      const info = document.querySelector('.infos');
      info.appendChild(ul1);
      const modalimg = document.querySelector('.img1');
      modalimg.src = image4.src;
      const description = document.querySelector('.modal-desc');
      description.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
      const technologies = document.querySelector('.program-btn');
      technologies.appendChild(ul5);
    });
  }
}

//  Closing Modal
const modal = document.getElementById('myModal');
const span = document.getElementById('close');
span.onclick = function () {
  modal.style.display = 'none';
};
