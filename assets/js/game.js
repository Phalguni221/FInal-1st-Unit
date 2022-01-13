

//Results Setup
const DisplayResults = document.querySelector('.results')

function getRandomInt() {
    return Math.floor(Math.random() * 800);
}
var score = 0;
var scoreText;

// const Canvas = document.querySelector(".gameScreen");
const grid = document.querySelector('.grid');
let squares = grid.children


//Adds cupcakes to sceen from left every 1000ms
setInterval(() => {
    let x = getRandomInt()
    console.log(x)
    let square = document.createElement('div');
    square.style.top = `${x}px`;
    square.style.left = `${x+600}px`;
    square.style.right = `${x-600}px`;
    square.style.bottom = `${x}px`;
    grid.appendChild(square);
    console.log(square);
//    let squares = grid.children
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
princess.style.top = "0px";
princess.style.left = "0px";
document.addEventListener('keydown', (event) => {
    console.log(`${parseInt(princess.style.top.replace('px', "")) - modifier}px`);
    switch (event.key) {
        case "ArrowUp": princess.style.top = `${parseInt(princess.style.top) - modifier}px`; break;
        case "ArrowDown": princess.style.top = `${parseInt(princess.style.top) + modifier}px`; break;
        case "ArrowLeft": princess.style.left = `${parseInt(princess.style.left) - modifier}px`; break;
        case "ArrowRight": princess.style.left = `${parseInt(princess.style.left) + modifier}px`; break;
    }
})

this.physics.add.overlap(princess, square, collectCupcake, null, this);

function collectCupcake (princess, square)
{
    square.disableBody(true, true);

    score += 10;
    scoreText.setText('Score: ' + score);
}

scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

// document.onclick = function(){
//     var e = document.getElementById('foo');
//     e.square.display = ((e.square.display != 'none') ? 'none' : 'block');
//  };

//     areCollisionsWithSquare(x, y) => {
//         // Note: sparkle is shown in the gameBoard by an element that is "true"
//         if (x < 0 || y < 0) {
//             return 0;  // Not a valid coordinate
//         }
//         let collisions = 0;
//         let xCoord = x / this.spriteSize;
//         let yCoord = y / this.spriteSize;
//         if (x % this.spriteSize === 0 && y % this.spriteSize === 0) {
//             // On exactly one square (so only need to check 1 tile)
//             collisions += this.isCollision(xCoord, yCoord);
//         } else if (x % this.spriteSize === 0) {
//             // Is in the same row (so only need to check 2 tiles)
//             yCoord = Math.floor(yCoord);
    
//             // Check top-most tile could be colliding with
//             collisions += this.isCollision(xCoord, yCoord);
    
//             // Check the tile one down
//             collisions += this.isCollision(xCoord, yCoord + 1);
//         } else if (y % this.spriteSize === 0) {
//             // Is in the same column (so only need to check 2 tiles)
//             xCoord = Math.floor(xCoord);
    
//             // Check the left-most tile could be colliding with
//             collisions += this.isCollision(xCoord, yCoord);
    
//             // Check the tile one down
//             collisions += this.isCollision(xCoord + 1, yCoord);
//         } else {
//             // Is not in the same row or column (so need to check 4 tiles)
//             xCoord = Math.floor(xCoord);
//             yCoord = Math.floor(yCoord);
//             collisions += this.isCollision(xCoord, yCoord);
//             collisions += this.isCollision(xCoord + 1, yCoord);
//             collisions += this.isCollision(xCoord, yCoord + 1);
//             collisions += this.isCollision(xCoord + 1, yCoord + 1);
//         }
//         return collisions;
//     }
//     console.log(event.key);
// });




