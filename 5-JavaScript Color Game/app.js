var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");
var number = 6;
var arr = [];

window.addEventListener("DOMContentLoaded", function () {
  reset.onclick();
});

function createColor() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  colors = `rgb(${r},${g},${b})`;
  return colors;
}

function init(colors) {
  var arr = [];
  for (i = 0; i < number; i++) {
    arr.push(createColor(colors));
  }
  var num = Math.round(Math.random() * number);
  h1.style.background = arr[num];
  colorDisplay.textContent = arr[num];
  return arr;
}

function childElement() {
  values = container.children;
  var i;
  var bgcolor;
  for (i = 0; i < number; i++) {
    values[i].onclick = function (e) {
      var str = e.target.style.backgroundColor;
      var bgcolor = str.replaceAll(" ", "");

      if (bgcolor == colorDisplay.textContent) {
        messageDisplay.textContent = "Successfully:))";
      } else {
        console.log(e.target);
        e.target.style.backgroundColor = "#232323";
      }
    };
  }
}

function colorPlace(arr) {
  init(arr).forEach((e) => {
    div = document.createElement("div");
    div.id = "square";
    div.style.backgroundColor = e;
    document.getElementById("container").appendChild(div);
  });
  return div;
}
function select() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].classList.remove("selected");
      }
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        number = 3;
      } else {
        number = 6;
      }
      reset.onclick();
    });
  }
}
resetButton.onclick = (arr) => {
  document.getElementById("container").innerHTML = "";
  messageDisplay.textContent = "";
  colorPlace(arr);
  childElement();
  select();
};
