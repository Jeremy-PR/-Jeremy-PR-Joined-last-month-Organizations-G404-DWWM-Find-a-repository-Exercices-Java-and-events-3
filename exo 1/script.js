// const cases = document.querySelectorAll('.case');
// const colors = ['black', 'yellow' , 'blue', 'red','purple']

// cases.forEach((carre) => {
//     carre.addEventListener('click' , handleClickChangeColor)
// })

// function handleClickChangeColor (event) {
    
//     let bloc = event.target;
//     let ColorIndex = colors.indexOf(bloc.style.backgroundColor);
  

//     const nextColorIndex = (ColorIndex + 1) % colors.length;

//     bloc.style.backgroundColor = colors[nextColorIndex];
 
// }


// correction

const boxes = document.querySelectorAll(".box");

const colors = [
  "bgcolor-green",
  "bgcolor-blue",
  "bgcolor-red",
  "bgcolor-yellow",
  "bgcolor-orange",
  "bgcolor-purple",
];

boxes.forEach((box) => {
  box.addEventListener("click", handleClickChangeColor);
});

function handleClickChangeColor(event) {
  const box = event.target;
  const currentColorClass = colors.find(color => box.classList.contains(color));
  const currentColorIndex = colors.indexOf(currentColorClass);
  const nextColorIndex = (currentColorIndex + 1) % colors.length;
  
  const nextColorClass = colors[nextColorIndex];

  box.classList.remove(currentColorClass);
  box.classList.add(nextColorClass);
  
}