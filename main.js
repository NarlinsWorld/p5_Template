//Example appendHTML with literal notice two slashes
appendHTML("Div1","From javascript"); //double quote and no latex
appendHTML("Div1",`$\\LaTeX$`);   //tic marks and double \\
appendHTML("Div1",`$$\\text{Display math: }7\\equiv 11 \\pmod 4$$ <br>
  <li>an example list element</li>`);
//if you use a different "Div2" be sure to put it into index.html and css

function setup() {
 const cnvs = createCanvas(400, 400);
  cnvs.parent('cvs');
}

function draw() {
 
}