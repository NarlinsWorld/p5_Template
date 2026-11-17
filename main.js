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
    Printing Library in London, took a 1914 `)
  appendHTML("Div3",`Div3<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum.`)
//========  ERASE EVERYTHING ABOVE HERE ==================================================


// ==========  ON OFF TOGGLE  =============================
const btn = document.getElementById('btnVariable');

// --- INITIAL STATE: change this line to control startup state ---
let btnVariable = true;   // true = ON (red), false = OFF (green)
// ---------------------------------------------------------------

// Sync the button's visual state to the variable
function renderButton() {
  if (btnVariable) {
    btn.textContent = 'ON';
    btn.classList.add('on');
    btn.classList.remove('off');
  } else {
    btn.textContent = 'OFF';
    btn.classList.add('off');
    btn.classList.remove('on');
  }
}

// Toggle on click
btn.addEventListener('click', () => {
  btnVariable = !btnVariable;
  renderButton();
});

// Apply the initial state on page load
renderButton();
//  ========== E N D   T O G G L E   S T A T E  =========================

function setup() {
 const cnvs = createCanvas(400, 400);
  cnvs.parent('cvs');
}

function draw() {
 
}


function doSomething() {
  if (btnVariable) {
    // ON branch
  } else {
    // OFF branch
  }
}