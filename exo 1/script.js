const cases = document.querySelectorAll('.case');
const colors = ['black', 'yellow' , 'blue', 'red','purple']

cases.forEach((carre) => {
    carre.addEventListener('click' , handleClickChangeColor)
})

function handleClickChangeColor (event) {
    
    let bloc = event.target;
    let ColorIndex = colors.indexOf(bloc.style.backgroundColor);
  

    const nextColorIndex = (ColorIndex + 1) % colors.length;

    bloc.style.backgroundColor = colors[nextColorIndex];

 
    // colors.forEach((color) => {
    //     bloc.style.backgroundColor  = 
        
    // })
}
