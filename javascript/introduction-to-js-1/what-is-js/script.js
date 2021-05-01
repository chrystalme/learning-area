function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}

function deleteParagraph() {
  let para = document.getElementsByTagName("p");
  para.textContent = "Welcome";
}

for (let i = 0; i < para.length; i++) {
  para[i].addEventListener("click", deleteParagraph);
}
