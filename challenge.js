let square = document.querySelectorAll('.square');
let button = document.querySelector('.clear');
let background = 'red';
let counter = document.querySelector('.turnCounter');
counter.innerText = "Red's Turn";
counter.style.color = 'red';
let win = [
    ['1', '2', '3'], 
    ['4', '5', '6'], 
    ['7', '8', '9'], 
    ['1', '4', '7'], 
    ['2', '5', '8'], 
    ['3', '6', '9'], 
    ['1', '5', '9'], 
    ['3', '5', '7']
];
let red = [];
let blue = [];
for(let i=0; i<square.length; i++){
    square[i].addEventListener('click', colorChange);
    function colorChange(e){
        e.preventDefault();
        square[i].style.backgroundColor = background;
        if(background == 'red'){
            background = 'blue';
            counter.innerText = "Blue's Turn";
            counter.style.color = 'blue';
            red.push(e.target.id)
            console.log(red)
            colorName = 'Red';
            checkForWinner(red);
        }else{
            background = 'red';
            counter.innerText = "Red's Turn";
            counter.style.color = 'red';
            blue.push(e.target.id)
            console.log(blue)
            colorName = 'Blue';
            checkForWinner(blue);
        }
        // console.log(e.target.id)
        square[i].removeEventListener('click', colorChange)
        
        }
    function checkForWinner(color){
            for(let i=0; i<win.length; i++){
                let count = 0;
                for(let j=0; j<color.length; j++){
                    if(color.includes(win[i][j]) === true){
                        count = count + 1;
                        if(count === 3){
                            console.log(colorName + ' wins!' )
                        }
                    }
                }
         }
    }
    // if(red.length>=3 || blue.length>= 3){}
    button.addEventListener('click', clearBoard);
    function clearBoard(e){
        e.preventDefault();
        square[i].style.backgroundColor = 'white';
        background = 'red';
        counter.innerText = "Red's Turn";
        counter.style.color = 'red';
        square[i].addEventListener('click', colorChange);
        }
    }

