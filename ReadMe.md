Here's a clean, complete solution. I'll show the HTML, CSS, and JavaScript, then explain how to change the initial state.

## HTML

```html
<button id="btnVariable" type="button">ON</button>
```

## CSS

```css
#btnVariable {
  padding: 6px 16px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

/* ON state: red background, white text */
#btnVariable.on {
  background-color: red;
  color: white;
}

/* OFF state: green background, white text */
#btnVariable.off {
  background-color: green;
  color: white;
}
```

## JavaScript

```javascript
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
```

---

## How it works

1. **The variable `btnVariable` is the single source of truth.** The button's appearance is *derived* from it, never the other way around.
2. **`renderButton()`** reads the variable and updates both the text (`ON`/`OFF`) and the CSS classes (`on`/`off`), which drive the colors.
3. **The click handler** flips the variable and calls `renderButton()` to re-sync the visuals.
4. **On page load**, `renderButton()` is called once so the button matches whatever `btnVariable` started as.

## Changing the initial state

Just change this one line:

```javascript
let btnVariable = true;    // starts ON  (red, "ON")
let btnVariable = false;   // starts OFF (green, "OFF")
```

Because `renderButton()` runs at the bottom, the button will correctly show red/ON or green/OFF on load — no need to touch the HTML or CSS.

---

## Optional: Read the state from `localStorage`

If you want the state to *persist* across page reloads, replace the initialization block with:

```javascript
// Load saved state, defaulting to true (ON) if nothing is saved
let btnVariable = localStorage.getItem('btnVariable') !== 'false';

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
  // Persist on every render
  localStorage.setItem('btnVariable', btnVariable);
}
```

Now the button remembers its state between reloads. To *reset* it to ON at startup, the user can clear site data, or you can add a "Reset" button that calls `localStorage.removeItem('btnVariable'); location.reload();`.

---

## Optional: Access the state from elsewhere in your code

Since `btnVariable` is declared with `let` at module/top-level scope, any function in the same file can read it:

```javascript
function doSomething() {
  if (btnVariable) {
    // ON branch
  } else {
    // OFF branch
  }
}
```

If you need it accessible from *other* `<script>` files or from the console, either attach it to `window`:

```javascript
window.btnVariable = true;
// then read via: window.btnVariable
```

…or wrap everything in an object:

```javascript
const state = { btnVariable: true };
```

…and toggle `state.btnVariable` instead. For a single toggle, the top-level `let` is perfectly fine.