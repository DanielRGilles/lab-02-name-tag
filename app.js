// 0) give your elements ids
// 1) grab the element by its id
const headerEl = document.getElementById('changed-name');
const protestEl = document.getElementById('protest');
const headstoneEl = document.getElementById('head-stone');
const headstoneimgEl = document.getElementById('head-stoneimg');
const trappedEl = document.getElementById('trapped');

// 0) give your button an id
// 1) grab the button from the DOM
const buttonEl = document.getElementById('change-button');

// 3) add a cool zone to the button (listen for the click)
// (cool zone is actually called a click handler or a callback)
buttonEl.addEventListener('click', () => {
    const inputEl = document.getElementById('word-input');

    console.log(inputEl.value);

  // cool zone -- this is where stuff happens after we click
  // post-click logic goes here!
  // 3) mutate whatever properties we want
    headerEl.textContent = inputEl.value;
    headerEl.style.backgroundColor = 'white';
    headerEl.style.color = 'Black'
    protestEl.style.color = 'white'
    protestEl.style.fontSize = '2.15em'
    headstoneEl.style.visibility = 'visible'
    headstoneimgEl.style.visibility = 'visible'
    trappedEl.style.visibility = 'visible'
});