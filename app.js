
const divValue = document.querySelector('nav-btn > div');
const portValue = document.getElementsByClassName('port');
const abtValue = document.getElementsByClassName('abt');
const contValue = document.getElementsByClassName('cont');

// // divValue.addEventListener('click', openNav());
// portValue.addEventListener('click', closeNav());
// abtValue.addEventListener('click', closeNav());
// contValue.addEventListener('click', closeNav());

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

// Form Validation

const form = document.getElementById('footer-form');
const email = document.getElementById('email-detail');
const errorMessage = document.getElementById('invalid');
form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    errorMessage.textContent = 'Use only lowercase letters for your e-mail!';
  }
});