function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
const divValue = document.querySelector('nav-btn > div');
const portValue = document.getElementsByClassName('port');
const abtValue = document.getElementsByClassName('abt');
const contValue = document.getElementsByClassName('cont');

divValue.addEventListener('click', openNav());
portValue.addEventListener('click', closeNav());
abtValue.addEventListener('click', closeNav());
contValue.addEventListener('click', closeNav());
