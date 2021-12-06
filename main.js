let container = document.getElementById("container")

let width = 16;
let height = 16;

let widthPixel = 800;
let heightPixel = 800;

createElements(width, height)

function createElements(width, height){

    let singleWidth = 800/width;
    let singleHeight = 800/height;
    
    for(var i = 0; i < height; i++){
        let row = document.createElement("div")
        row.className = "row"
        for(var j = 0; j < width; j++){
            var div = makeDiv(singleWidth, singleHeight)
            row.appendChild(div)
        }
        container.append(row)
    }

}

function clear(){


    let rows = document.getElementsByClassName("row");
    let rowsamount = rows.length; 
    for(var i = 0; i < rowsamount; i++){
        rows[0].remove()
    }

}


var but = document.getElementById("reset");
but.addEventListener("click", () => {
    input = Number(prompt("Enter the new width/height"))
    if(input > 100 || input < 0){
        return
    }
    width = input
    height = input
    clear()
    createElements(width,height)
    
});


function makeDiv(width, height){
    var div = document.createElement("div");
    //div.innerHTML = "test"
    div.style.width = "" + width + "px";
    div.style.height = "" + height + "px";
    div.style.background = "white";
    //div.style.color = "white";
    //div.innerHTML = "x";

    div.addEventListener("mouseover", function(event){
        event.target.style.background = 'black'
    })
    return div
}