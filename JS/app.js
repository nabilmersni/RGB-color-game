var numSquare = 6;
var colors = [];
var pickColor;
var modeButton = document.querySelectorAll('.mode');
var resetbutton = document.querySelector('#reset');
var currentColor = document.querySelector('#rgb');
var squares = document.querySelectorAll('.square');
var message = document.querySelector('#message');
var h1 = document.querySelector('h1');


init();


//----------------------------------------------------
function init(){
    setupModeButton();
    setupsquares();
    reset();
}
//----------------------------------------------------
function setupModeButton(){
    for(var i=0; i< modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove('selected')
            modeButton[1].classList.remove('selected')
            this.classList.add('selected');
            this.textContent === 'EASY' ? numSquare = 3 : numSquare = 6;
            reset();
        })
    }   
}
//------------------------------------------------

function setupsquares(){
    for(var i=0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.background;
            if(clickedColor === pickColor ){
                changeColor(clickedColor);
                message.textContent = 'Correct!';
                resetbutton.textContent = 'PLAY AGAIN?';
                h1.style.background = clickedColor;
            }else{
                this.style.background = '#232323';
                message.textContent = 'Try Again';
            }
        })
    }
}
//----------------------------------------------------
function reset(){
    colors = getRandomColor(numSquare);
    pickColor = pickColorfun();
    message.textContent = '';
    resetbutton.textContent = 'NEW COLORS';
    currentColor.textContent = pickColor;
    h1.style.background = '#4682B4';
    for(var i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = 'none';
        }
    }
}
resetbutton.addEventListener("click", function(){
    reset();
})



//----------------------------------------------------
function changeColor(color){
    for(var i=0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
//-----------------------------------------------------
function pickColorfun(){
        var randomm = Math.floor(Math.random() * colors.length);
        return colors[randomm];
} 

//-------------------------------------------------
function getRandomColor(num){
    var arr = []
    for(var i=0; i < num; i++ ){
        arr.push(randomColor());
    }
    return arr
}

//-------------------------------------------------
function randomColor(){
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    return ('rgb' + '(' + red + ', ' + green + ', ' + blue + ')');
}

//----------------------------------------------------

