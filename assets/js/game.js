

//Set the grid for the cupcakes falling from the sky
const grid = document.querySelector('.grid')
const DisplayResults = document.querySelector('.results')
let currentCollectorIndex = 50
let width = 15
let height = 30

let direction = 1
let cupcakesId = 1
let goingRight = true


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

// setInterval(draw => {
//     for (let i = 0;  i < 1;  i++) {
//         const squares = document.createElement('div')
//         canvas.appendChild(squares)   
//     }    
// },1000)

//Add and remove the cupcakes
// function draw() {
// grid.appendChild(squares)
// }

function remove() {
    for (let i = 0; i < grid.length; i++) {
        squares[grid[i]].classList.remove('.grid')
    }
}
remove()

// squares[currentCollectorIndex].classList.add('PrincessPeach')

//
function movePicture(e) {
    squares[currentCollectorIndex].classList.remove('PrincessPeach')
    switch (e.key) {
        case "ArrowUp": if (currentCollectorIndex % height < height - 1) currentCollectorIndex -= 1
            break
        case "ArrowDown": if (currentCollectorIndex % height < height - 1) currentCollectorIndex += 1
            break
        case "ArrowLeft": if (currentCollectorIndex % width !== 0) currentCollectorIndex -= 1
            break
        case "ArrowRight": if (currentCollectorIndex % width < width - 1) currentCollectorIndex += 1
            break
    }
    squares[currentCollectorIndex].classList.remove('PrincessPeach')
}

document.addEventListener('keydown', movePicture)

function moveCupcakes() {
    const leftEdge = cupcakes[0] % width === 0
    const rightEdge = cupcakes[cupcakes.length - 1] % width === width - 1
}

if (rightEdge && goingRight) {
    for (let i = 0; i < cupcakes.length; i++) {
        cupcakes[i] += width + 1
        direction = -1
        goingRight = false
    }
}

if (leftEdge && !goingRight) {
    for (let i = 0; i < cupcakes.length; i++) {
        cupcakes[i] += width - 1
        direction = 1
        goingRight = true
    }
}

for (let i = 0; i < cupcakes.length; i++) {
    cupcakes[i] += direction
}
// draw()

if (squares[currentCollectorIndex].classList.contains('cupcake', 'picture')) {
    DisplayResults.innerHTML("3 points!")
    // clearInterval(cupcakesId)
}

for (let i = 0; i < cupcakes.length; i++) {
    if (cupcakes[i] > squares.length) {
        let text = "Game Over! (Click Here to view your Scores!)";
        let result = text.link("scoreboard.html");
    }
}

// setInterval(moveCupcakes, 500)

