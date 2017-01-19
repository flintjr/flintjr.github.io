var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/studio.jpg') {
      myImage.setAttribute ('src','images/vegetable-stall.jpg');
    } else {
      myImage.setAttribute ('src','images/studio.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'FreeTech is now available!, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'FreeTech is now available!, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
