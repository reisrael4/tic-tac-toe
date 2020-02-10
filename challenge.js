let square = document.querySelectorAll('.square');
let button = document.querySelector('.clear')
let background = 'red';
for(let i=0; i<square.length; i++){
square[i].addEventListener('click', colorChange);
function colorChange(e){
    e.preventDefault();
    square[i].style.backgroundColor = background;
    if(background == 'red'){
        background = 'blue'
    }else{
        background = 'red'
    }
    }
button.addEventListener('click', clearBoard);
function clearBoard(e){
    e.preventDefault();
    square[i].style.backgroundColor = 'white'
}
}
