

//Results Setup
const DisplayResults = document.querySelector('.results')

function getRandomInt() {
    return Math.floor(Math.random() * 800);
}

const grid = document.querySelector('.grid');
let squares = grid.children

//Adds cupcakes to sceen from left every 1000ms
setInterval(() => {
    let x = getRandomInt()
    console.log(x)
    let square = document.createElement('div');
    square.style.top = `${x}px`;
    square.style.left = `${x}px`
    grid.appendChild(square);
    console.log(square)
    squares = grid.children
}, 1000)

//Remove cupcakes when they touch ground
setInterval(() => {
    for (let i = 0; i < squares.length; i++) {
       let c= squares[i];
        console.log("Did it hit the ground?", c)
        // if cupcake is at height of ground, then remove it 
        // if cupcake(vertical position) >= ground(vertical position) then remove cupcake 
        console.log("What is squares?", squares)
        if (c.style.top = "0px") {
            console.log("Kill the cupcake!");
        }
    }
}, 500)

//PrincessPeachMovements

let modifier = 7;
let princess = document.querySelector(".PrincessPeachCute");
let princessCoord = {x:0,y:0, width:20, height:20}
princess.style.top = "0px";
princess.style.left = "0px";
document.addEventListener('keydown', (event) => {
    console.log(`${parseInt(princess.style.top.replace('px', "")) - modifier}px`)
    switch (event.key) {
        case "ArrowUp": princess.style.top = `${parseInt(princess.style.top) - modifier}px`;
        ArrowUp.y = event.clientY;break;
        case "ArrowDown": princess.style.top = `${parseInt(princess.style.top) + modifier}px`; break;
        case "ArrowLeft": princess.style.left = `${parseInt(princess.style.left) - modifier}px`; break;
        case "ArrowRight": princess.style.left = `${parseInt(princess.style.left) + modifier}px`; break;
    }

    console.log(event.key);
});

//Collision of Objects 
if(squareCoord.x < princessCoord.x +princessCoord.width &&
    squareCoord.x +squareCoord.width > princessCoord.x &&
    squareCoord.y < princessCoord.y + princessCoord.height &&
    squareCoord.y + squareCoord.height > princessCoord.y 
    ){
        visibility:hidden;
    } else {
        //no collision
    }

//Get Score on Collision
