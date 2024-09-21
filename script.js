const MAX_SIZE=960; //Number of pixels of the grid


//MAIN PROGRAM
document.body.onload=main;

function main(){
    document.querySelector("#start").addEventListener("click", start);
}

function start(){

    let pixPerSide;
    let correct=false;
    do{
        
        pixPerSide=parseInt(prompt(`Number of pixels per side (min=2, max=${MAX_SIZE/10})`));
        
        if (isNaN(pixPerSide)){
            alert ("I need a number"); 
        }else {
            pixPerSide=Math.floor (pixPerSide);
            if (pixPerSide>MAX_SIZE/10){ 
                alert (`The maximum number of pixels per side is ${MAX_SIZE/10}`); 
            }else if (pixPerSide<2){
                alert (`The minimum number of pixels per side is 2`); 
            }else{
                correct=true;
            }
            
        }
        
    }while (!correct);
    createPixels(pixPerSide,pixPerSide);
}

function createPixels (rows, cols){
    
    const container=document.querySelector("#container");
    container.innerHTML="";
    for (let i=1; i<=rows; i++){
        const rowDiv=document.createElement("div");
        rowDiv.classList.add("rowDiv");
        for (let j=1;j<=cols; j++){
            const pixel=document.createElement("span");
            pixel.classList.add("pixel");
            //Setting the size of the pixel
            let size= pixelSize(cols); 
            pixel.style.width=size + "px";
            pixel.style.height=size + "px";
            
            rowDiv.appendChild(pixel);
            //Give funcionality to each pixel
            pixel.addEventListener("mouseover", paintMe);
        }

        container.appendChild(rowDiv);
    }
    
}

function paintMe (event){

    event.target.style.backgroundColor = randomColor();
} 


function pixelSize(numOfPixels){
    return Math.floor(MAX_SIZE/numOfPixels)-2;  //We substract two pixels for the border
    
}

//Extra credit 1 - Randomize Color - Returns and hexa format color (ex: #5F90A5)
function randomColor(){
    let colorConstruct="#";
    for (let i=1; i<=6; i++){
        let dice=Math.floor(Math.random()*16);
        switch (dice){
            case 10:
                colorConstruct=colorConstruct.concat("A");
            break;
            case 11:
                colorConstruct=colorConstruct.concat("B");
            break;
            case 12:
                colorConstruct=colorConstruct.concat("C");
            break;
            case 13:
                colorConstruct=colorConstruct.concat("D");
            break;
            case 14:
                colorConstruct=colorConstruct.concat("E");
            break;
            case 15:
                colorConstruct=colorConstruct.concat("F");
            break;
            default:
                colorConstruct=colorConstruct.concat(dice);
            break;
        }
    }
    return colorConstruct;
}
