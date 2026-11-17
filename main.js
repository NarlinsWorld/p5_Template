//Example appendHTML with literal notice two slashes
appendHTML("Div1","From javascript"); //double quote and no latex
appendHTML("Div1",`$\\LaTeX$`);   //tic marks and double \\
appendHTML("Div1",`\\[\\text{Display math: }7\\equiv 11 \\pmod 4\\] <br>
  $$\\sqrt{\\frac{7}{2}}$$
  <ul>
  <li>an example list element</li></ul>`);

  appendHTML("Div2",`This is Div2 <br>Put what ever you want here.vLorem 
    Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since 1966, 
    when designers at Letraset and James Mosley, the librarian at St Bride 
    Printing Library in London, took a 1914 Cicero translation and 
    scrambled it to make dummy text for Letraset's Body Type sheets. 
    It has survived not only many decades, but also the leap into electronic 
    typesetting, remaining essentially unchanged. It was popularised thanks to these 
    sheets and more recently with desktop publishing software like Aldus PageMaker and 
    Microsoft Word including versions of Lorem Ipsum.`)
  appendHTML("Div3",`Div3<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum.`)

function setup() {
 const cnvs = createCanvas(400, 400);
  cnvs.parent('cvs');
}

function draw() {
 
}