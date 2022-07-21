let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "../img/card_bg_blue.png") {
    myImage.setAttribute("src", "../img/card_bg_yellow.png");
  } else {
    myImage.setAttribute("src", "../img/card_bg_blue.png");
    console.log(mySrc);
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "好的" + myName;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storeName = localStorage.getItem("name");
  myHeading.textContent = "好样的" + storeName;
}

myButton.onclick = function () {
  setUserName();
};
