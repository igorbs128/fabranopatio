//variables
let slider = document.querySelectorAll('.slider'), 
arrowLeft = document.getElementById('arrow-left'),
arrowRight = document.getElementById('arrow-right'),
current = 0;

//Reset
function reset(){
    for(let i=0; i< slider.length; i++){
        slider[i].style.display = 'none';
    }
}

//Start
function startSlider(){
    reset()
    slider[0].style.display = 'block'
}

//*Função click left
function left() {
    reset()
    slider[current - 1].style.display = 'block'
    current--
}

//Função click right
function right() {
    reset()
    slider[current + 1].style.display = 'block'
    current++
}

arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = slider.length
    }    
    left()
})

arrowRight.addEventListener('click', function(){
    if(current === slider.length -1){
        current = -1
    }   
    right()
})    

startSlider()
