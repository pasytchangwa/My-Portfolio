// Form Validation

const form = document.getElementById('footer-form');
const email = document.getElementById('email-detail');
const errorMessage = document.getElementById('invalid');
form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    errorMessage.style.color = 'white'
    errorMessage.style.fontWeight = 'bold'
    errorMessage.textContent = 'Please use only lowercase letters for your e-mail!';
  }
});