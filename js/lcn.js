let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "img/card_bg_blue.png") {
    myImage.setAttribute("src", "img/card_bg_yellow.png");
  } else {
    myImage.setAttribute("src", "img/card_bg_blue.png");
    console.log(mySrc);
  }
};

