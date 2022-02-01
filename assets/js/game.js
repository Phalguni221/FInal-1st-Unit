

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
// for (let i = 0;  i < 70; i++) {
//     const squares = document.createElement('div')
//     grid.appendChild(squares)
// }

// const squares = grid.children
// let x = parseInt(squares[i].left)


let modifier = 7;
let princess = document.querySelector(".PrincessPeachCute");
princess.style.top = "0px";
princess.style.left = "0px";
document.addEventListener('keydown', (event) => {
    // console.log(`${parseInt(princess.style.top.replace('px', "")) - modifier}px`);
    switch (event.key) {
        case "ArrowUp": princess.style.top = `${parseInt(princess.style.top) - modifier}px`; break;
        case "ArrowDown": princess.style.top = `${parseInt(princess.style.top) + modifier}px`; break;
        case "ArrowLeft": princess.style.left = `${parseInt(princess.style.left) - modifier}px`; break;
        case "ArrowRight": princess.style.left = `${parseInt(princess.style.left) + modifier}px`; break;
    }
    console.log(key)
})


// for (let i = 0;  i < 70; i++) {
//     let prin = parseInt(princess.style.left)
//     let x = parseInt(squares[i].left)
// if (x < prin || prin < x + 100) {
//     let prin1 = parseInt(princess.style.top)
//     let y = parseInt(squares[i].top)
//     if ( y < prin1 || prin1 < y + 100) {
//         console.log("collision")

//     }
// }
// }

this.physics.add.overlap(princess, square, collectCupcake, null, this);

function collectCupcake (princess, square)
{
    square.disableBody(true, true);

    score += 10;
    scoreText.setText('Score: ' + score);
}

scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });



