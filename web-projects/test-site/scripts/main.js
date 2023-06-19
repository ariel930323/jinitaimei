document.querySelector("html").addEventListener("click", function () {
    alert("不要碰我屁眼!!!!!!!!");
  });
  
let myImage = document.querySelector('img');

myImage.onclick = function() {
      let mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/屁眼.png') {
        myImage.setAttribute('src', 'images/chicken.png');
      } else {
        myImage.setAttribute('src', 'images/屁眼.png');
      }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('小黑子你叫什麼?');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('粉絲', myName);
         myHeading.textContent = '坤坤將會代替只因來懲罰你，' + myName;
    }
  }

if(!localStorage.getItem('粉絲')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('粉絲');
  myHeading.textContent = '坤坤將會代替只因來懲罰你，' + storedName;
}

myButton.onclick = function() {
    setUserName();
 }
   
  