/* utility function to add text(and latex) content to a named div.  Name and locate the div
in index.html.  For example <div id="Div1"></div>  or <div id="Div2"></div>
Each time the function is called, the stuffToAdd is appended to whatever is alread in the div.
example call:
appendHTML("Div1",`I have much text and some $\\LaTeX$ and a number ${varName}`)
Only difference between this and index.html latex, is the double \\
*/

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

