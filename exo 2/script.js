
const showButton = document.querySelector('#showButton');
const body = document.querySelector('body'); 
const hiddenBox = document.querySelector('#hiddenBox');

showButton.addEventListener('click' , handleClick);
body.addEventListener('click' , handleClickOut);


function handleClick(){

hiddenBox.classList.remove('hidden');
body.classList.add('grey-background');
}

function handleClickOut(event) {
    
    if (event.target !== hiddenBox && event.target !== showButton) {
      hiddenBox.classList.add('hidden');
      body.classList.remove('grey-background');
    }
  }