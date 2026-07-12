function appendHTML(myDiv, stuffToAdd) {
  const ele = document.getElementById("Div1");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = stuffToAdd;
  ele.appendChild(newDiv);
  document.getElementById('Div1').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("clearr").addEventListener("click", () => {
  document.getElementById('Div1').innerHTML = "";

});

