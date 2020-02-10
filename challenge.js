let square = document.querySelectorAll('.square');
let button = document.querySelector('.clear');
let background = 'red';
let counter = document.querySelector('.turnCounter')
counter.innerText = "Red's Turn"
counter.style.color = 'red';
for(let i=0; i<square.length; i++){
square[i].addEventListener('click', colorChange);
function colorChange(e){
    e.preventDefault();
    square[i].style.backgroundColor = background;
    if(background == 'red'){
        background = 'blue';
        counter.innerText = "Blue's Turn";
        counter.style.color = 'blue';
    }else{
        background = 'red';
        counter.innerText = "Red's Turn";
        counter.style.color = 'red';
    }
    square[i].removeEventListener('click', colorChange)
    }
button.addEventListener('click', clearBoard);
function clearBoard(e){
    e.preventDefault();
    square[i].style.backgroundColor = 'white';
    background = 'red';
}
}
