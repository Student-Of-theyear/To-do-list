let inputs = document.querySelector(".inp");
let text = document.querySelector(".text");

function Add() {
  if (inputs.value === "") {
    alert("Message Daliye naa");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newEle);
    inputs.value = "";
    newEle.querySelector("i").addEventListener(
      "click",
      (remove = () => {
        newEle.remove();
      })
    );
  }
}
