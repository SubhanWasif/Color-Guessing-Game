
const sqaures = document.querySelectorAll('#color');
const answerDisplay = document.querySelector('#correct');
const colourDisplay = document.querySelector('#text');
const button = document.querySelector('#button');
let colour = [];
GenerateColour();
assign_colours();

function GenerateColour(){
    for (let i=0;i<sqaures.length;i++){
        colour.push( `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`);

    }
}



function assign_colours(){
    colour.forEach((colour,index) => {
        sqaures[index].style.background = colour;
        sqaures[index].setAttribute('data-colour',colour);

    });
}



function getrandomPickedColor(){
    const randomcolor = colour[Math.floor(Math.random()*colour.length)];
    colourDisplay.innerText = randomcolor;
    return randomcolor;
}
let pickedcolor = getrandomPickedColor();

function checkcolor(){
    sqaures.forEach((sqaure) =>{
        sqaure.addEventListener("click",(e) =>{

            if (e.target.dataset.colour === pickedcolor){
                answerDisplay.innerText = "Correct";
                
            }else{
                answerDisplay.innerText = "Wrong";
                    e.target.style.opacity = 0
            }
        });
    });
}
checkcolor();



function reset(){
    colour = [];
    GenerateColour();
    sqaures.forEach((sqaure) => sqaure.style.opacity = 1);
    assign_colours();
    checkcolor();
    return pickedcolor = getrandomPickedColor();
}


button.addEventListener('click',reset);