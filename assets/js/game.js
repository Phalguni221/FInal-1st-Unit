

//Set the grid for the cupcakes falling from the sky
const grid = document.querySelector('.grid')
const DisplayResults = document.querySelector('.results')

let width = 800
let height = 300

const squares = grid.children


setInterval(draw => {
for (let i = 0;  i < 1;  i++) {
    const squares = document.createElement('div')
    grid.appendChild(squares)
} 
},1000)

// //set Princess Peach movements
let modifier = 125;
document.addEventListener('keydown', (event) => {
    let princess = document.querySelector(".PrincessPeach");
    princess.style.left = "0px"
    princess.style.top = "0px"

    switch (event.key) {
        case "ArrowUp": princess.style.top = `${parseInt(princess.style.top) - modifier}px`; break;
        case "ArrowDown": princess.style.top = `${parseInt(princess.style.top) + modifier}px`; break;
        case "ArrowLeft": princess.style.left = `${parseInt(princess.style.left) - modifier}px`; break;
        case "ArrowRight": princess.style.left = `${parseInt(princess.style.left) + modifier}px`; break;
    }
    console.log(event.key);
});

//
// function movePicture(e) {
//     squares[currentCollectorIndex].classList.remove('PrincessPeach')
//     switch (e.key) {
//         case "ArrowUp": if (currentCollectorIndex % height < height - 1) currentCollectorIndex -= 1
//             break
//         case "ArrowDown": if (currentCollectorIndex % height < height - 1) currentCollectorIndex += 1
//             break
//         case "ArrowLeft": if (currentCollectorIndex % width !== 0) currentCollectorIndex -= 1
//             break
//         case "ArrowRight": if (currentCollectorIndex % width < width - 1) currentCollectorIndex += 1
//             break
//     }
//     squares[currentCollectorIndex].classList.remove('PrincessPeach')
// }

// document.addEventListener('keydown', movePicture)

// let goUp = "./assets/images/PrincessPeachCute.jpg";
// let goLeft = "./assets/images/PrincessPeachCute.jpg";
// let goDown = "./assets/images/PrincessPeachCute.jpg";
// let goUp = "./assets/images/PrincessPeachCute.jpg";

// let moves = {
//     directionChanges: {
//         // Move with arrow keys
//         "ArrowLeft": {  // West
//             // x: -1, y: 0,
//             // backgroundImage: "./assets/images/PrincessPeachCute.jpg",
//             // PrincessPeachImg: goLeft,
//         },
//         "ArrowUp": {  // North
//             x: 0, y: 1,
//             backgroundImage: "./assets/images/PrincessPeachCute.jpg",  // TODO: Want a different one for each direction
//             PrincessPeachImg: goUp,
//         },
//         "ArrowRight": {  // East
//             x: 1, y: 0,
//             backgroundImage: "./assets/images/PrincessPeachCute.jpg",
//             PrincessPeachImg: goRight,
//         },
//         "ArrowDown": {  // South
//             x: 0, y: -1,
//             backgroundImage: "./assets/images/PrincessPeachCute.jpg",  // TODO: Want a different one for each direction
//             PrincessPeachImg: goDown,
//         },
//         // TODO: Allow WASD movement, too?
//     },

