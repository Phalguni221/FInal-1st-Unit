

const grid = document.querySelector('.grid')
const DisplayResults = document.querySelector('.results')
let currentCollectorIndex = 50
let width = 15
let height= 30

let direction = 1
let cupcakesId = 1
let goingRight = true



for(let i = 0; 0< i < 100; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const cupcakes = [
    1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31,32,33
]

function draw () {
    for (let i = 0; i<cupcakes.length; i++) {
        squares[cupcakes[i]].classList.add('cupcake')
    }
}



function remove () {
    for (let i = 0; i<cupcakes.length; i++) {
        squares[cupcakes[i]].classList.remove('cupcake')
    }
}

squares[currentCollectorIndex].classList.add('picture')

function movePicture(e) {
    squares[currentCollectorIndex].classList.remove('picture')
    switch(e.key) {
        case "ArrowUp": if (currentCollectorIndex % height < height-1) currentCollectorIndex -=1
        break
         case "ArrowDown":if (currentCollectorIndex % height < height-1) currentCollectorIndex +=1
         break
        case "ArrowLeft": if (currentCollectorIndex % width !==0) currentCollectorIndex -=1
        break
        case "ArrowRight": if (currentCollectorIndex % width < width-1) currentCollectorIndex +=1
        break
}
squares[currentCollectorIndex].classList.remove('picture')
}

document.addEventListener('keydown', moveCollector)

function moveCupcakes() {
    const leftEdge = cupcakes[0] % width === 0
    const rightEdge = cupcakes[cupcakes.length - 1] % width === width-1
    remove()
}

if (rightEdge && goingRight) {
    for (let i=0; i < cupcakes.length; i++) {
        cupcakes[i] += width +1
        direction = -1
        goingRight = false
    }
}

if(leftEdge && !goingRight) {
    for(let i =0; i<cupcakes.length;i++) {
        cupcakes[i] += width -1
        direction = 1
        goingRight = true
    }
}

for (let i=0; i < cupcakes.length; i++) {
    cupcakes[i] += direction
}
draw()

if (squares[currentCollectorIndex].classList.contains('cupcake', 'picture')) {
    DisplayResults.innerHTML("3 points!")
    // clearInterval(cupcakesId)
}

for(let i=0; i <cupcakes.length; i++) {
    if(cupcakes[i] > squares.length) {
        let text = "Game Over! (Click Here to view your Scores!)";
let result = text.link("scoreboard.html");
    }
}

cupcakesId = setInterval(moveCupcakes,500)

