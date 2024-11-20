const message = document.querySelector('#message')
document.addEventListener("keyup", handleKeyup);

function handleKeyup(e){
   console.log(e);
   
   e.preventDefault();
    if (e.altKey === true && e.code === "KeyC"){
        message.style.visibility = "d-none";

    }
}



// code a simon 

// const keysPressed = {};
// const bravo = document.querySelector("#bravo");

// document.addEventListener("keydown", (event) => {
//   keysPressed[event.key] = true;

//   // Check if both 'a' and 'z' keys are pressed
//   if (keysPressed["a"] && keysPressed["z"]) {
//     bravo.classList.remove("d-none");
//   }
// });

// document.addEventListener("keyup", (event) => {
//   // Remove key from keysPressed when key is released
//   delete keysPressed[event.key];
// });




// code Mohand

// const TexteApparait = document.querySelector("#TexteApparait");

// // document.addEventListener("keydown", handleKeyDownTexteApparait);


// document.addEventListener( 'keydown', (event) => {
//     event.preventDefault();
//     if ( event.code === 'KeyB' && event.ctrlKey === true ) {
//       TexteApparait.style.visibility = "visible";
//     }
// });
