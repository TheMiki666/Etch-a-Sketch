
//MAIN PROGRAM
document.body.onload=main;

function main(){

    createPixels (16, 16);
    
}

function createPixels (rows, cols){
    
    const container=document.querySelector("#container");
    for (let i=1; i<=rows; i++){
        const rowDiv=document.createElement("div");
        rowDiv.classList.add("rowDiv");
        for (let j=1;j<=cols; j++){
            const pixel=document.createElement("span");
            pixel.classList.add("pixel");
            rowDiv.appendChild(pixel);
        }

        container.appendChild(rowDiv);
    }
    

}
