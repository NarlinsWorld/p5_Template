/* utility function to add text(and latex) content to a named div.  Name and locate the div
in index.html.  For example <div id="Div1"></div>  or <div id="Div2"></div>
Each time the function is called, the stuffToAdd is appended to whatever is alread in the div.
example call:
appendHTML("Div1",`I have much text and some $\\LaTeX$ and a number ${varName}`)
Only difference between this and index.html latex, is the double \\
*/

function appendHTML(myDiv, stuffToAdd) {
  const ele = document.getElementById(myDiv);
  const newDiv = document.createElement("div");
  newDiv.innerHTML = stuffToAdd;
  ele.appendChild(newDiv);
  document.getElementById('Div1').scrollIntoView({ behavior: 'smooth' });
}

/*P is a point P[0],P[1] for x,y.  Q and point likewise
This returns the perpendicular distance from point to line PQ. */
function dist2LinePQ(P, Q, point) {
  let Qx = Q[0];
  let Qy = Q[1];
  let Px = P[0];
  let Py = P[1];
  let x = point[0];
  let y = point[1];
  let ux = Qx - Px; //direction P to Q
  let uy = Qy - Py;
  let upx = -uy; //perpendicular vectors
  let upy = ux;
  //vx and vy are the perpendicular direction vector components
  let vx = upx * (((Px - x) * upx + (Py - y) * upy) / (upx * upx + upy * upy));
  let vy = upy * (((Px - x) * upx + (Py - y) * upy) / (upx * upx + upy * upy));
  return Math.sqrt(vx * vx + vy * vy);
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.getElementById("clearr").addEventListener("click", () => {
  document.getElementById('Div1').innerHTML = "";

});


