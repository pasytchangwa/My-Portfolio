
const divValue = document.querySelector('nav-btn > div');
const portValue = document.getElementsByClassName('port');
const abtValue = document.getElementsByClassName('abt');
const contValue = document.getElementsByClassName('cont');

divValue.addEventListener('click', openNav());
portValue.addEventListener('click', closeNav());
abtValue.addEventListener('click', closeNav());
contValue.addEventListener('click', closeNav());

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

// Form Validation

const submit = document.getElementById('footer-form');
const emailInput = document.getElementById('email-detail');
const invalidMessage = document.getElementById('invalid');

submit.addEventListener('submit', (e) => {
  if (emailInput.value !== emailInput.value.toLowerCase() && emailInput.value == emailInput.toUpperCase()) {
    e.preventDefault();
    alert("Please fill in the 'Your Name' box.");
    invalidMessage.textContent = 'Please, use only lowercase letter for your email!';
  }
});
