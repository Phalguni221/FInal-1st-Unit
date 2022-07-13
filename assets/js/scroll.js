//Disable Scroll

// function preventScroll(e){
//     e.preventDefault();
//     e.stopPropagation();

//     return false;
// }

<button id ="prevent" onclick="disable">
Prevent Scroll
</button>
function disable(){
  document.querySelector('grid').addEventListener('wheel', preventScroll);
}

// function enable(){
//     document.querySelector('.scrollable').removeEventListener('wheel', preventScroll);
// }

// document.querySelector('#prevent').addEventListener('click', disable);
// document.querySelector('#allow').addEventListener('click', enable);

// document.querySelector('#scrollable').addEventListener('wheel', preventScroll, {passive: false});