let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/thaci.png') {
      myImage.setAttribute('src','images/thaci2.png');
    } else {
      myImage.setAttribute('src','images/thaci.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Por favor, insira seu nome.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('nome', myName);
      myHeading.textContent = 'Conheça o Deus Thaciano, ' + myName;
    }
  }
  if(!localStorage.getItem('nome')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nome');
    myHeading.textContent = 'Conheça o Deus Thaciano, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  document.querySelector('img').addEventListener('click', function() {
    alert('Ae, para de me cutucar seu estranho! Não gostou da foto eu troco porra.');
  });
  