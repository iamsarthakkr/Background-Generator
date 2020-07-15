const backgroundPara = document.querySelector(
  "#gradientDiplay"
);
const leftColor = document.querySelector(".left_color");
const rightColor = document.querySelector(".right_color");
const body = document.getElementById("gradient");

setGradient();

//event = input : fires when the value of the input(in the input box i.e. color type), select or textarea element  changes
leftColor.addEventListener("input", setGradient);
rightColor.addEventListener("input", setGradient);

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " +
    leftColor.value +
    ", " +
    rightColor.value +
    ")";
  updatePara();
}

function updatePara() {
  backgroundPara.textContent = "";
  const newGradient = document.createTextNode(
    body.style.background
  );
  backgroundPara.appendChild(newGradient);
}
