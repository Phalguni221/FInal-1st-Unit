

//Results Setup
const DisplayResults = document.querySelector('.results')


//CloudMovement
// var cloudImage = null;
// var cloudVelocity = 1;
// var cloudAnimation;

// var cloudImage2 = null;
// var cloudVelocity2 = 1;
// var cloudAnimation2;

// function init() {
//     cloudImage= document.getElementById('cloudImage');
//     cloudImage.style.left = 0;
//  cloudAnimation = setInterval(leftcloudMovement,1000);
// }
// function leftcloudMovement() {
//     if (cloudImage.style.left > 50 &&  cloudVelocity < 0) {
//         cloudVelocity = -cloudVelocity;
//     }
//     cloudImage.style.left = parseInt(cloudImage.style.left) + cloudVelocity * 100 + 'px';
// }

// init()

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
        let c = squares[i];
        console.log("Did it hit the ground?", c)
        // if cupcake is at height of ground, then remove it 
        // if cupcake(vertical position) >= ground(vertical position) then remove cupcake 
        console.log("What is squares?", squares)
        if (c.style.top = "0px") {
            console.log("Kill the cupcake!");
        }
    }
}, 500)



// function checkGround() {
//     for(let i=0; i<1; i++) {
// console.log(square[i])

//     }
// }

//games.js

// //create cupcakes once -> list
// squares = [] 
// ​
// //creating cupcakes
// setInterval(() => {
//     //createElement...
// },1000)
// ​
// //checking for ground collision
// setInterval (() => {
//     for (let index = 0; index < squares.length; index++) {
//         let c = squares[index];
//         //where on screen?
//         //remove if top > 1000 (whever the ground is)
//     }
// }, 500)



//
//Stop function draw() at a height

//PrincessPeachMovements

let modifier = 5;
let princess = document.querySelector(".PrincessPeachCute");
princess.style.top = "0px";
princess.style.left = "0px";
document.addEventListener('keydown', (event) => {
    console.log(`${parseInt(princess.style.top.replace('px', "")) - modifier}px`)
    switch (event.key) {
        case "ArrowUp": princess.style.top = `${parseInt(princess.style.top) - modifier}px`; break;
        case "ArrowDown": princess.style.top = `${parseInt(princess.style.top) + modifier}px`; break;
        case "ArrowLeft": princess.style.left = `${parseInt(princess.style.left) - modifier}px`; break;
        case "ArrowRight": princess.style.left = `${parseInt(princess.style.left) + modifier}px`; break;
    }

    console.log(event.key);
});




