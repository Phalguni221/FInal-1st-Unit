// let modifier = 5;
// document.addEventListener('keydown', (event)=> {
//     const {style} = document.querySelector(".PrincessPeach");
//         if(event.repeat) return;

//     if(event.key === 'ArrowLeft'){
//         direction = 'west'
//     }
//     if(event.key === 'ArrowUp'){
//         direction = 'north'
//     }
//     if(event.key === 'ArrowRight'){
//         direction = 'east'
//     }
//     if(event.key === 'ArrowDown'){
//         direction = 'south'
//     }
//     callback(direction)
// })
//     if(event.repeat) return;

    let modifier = 50;
    document.addEventListener('keydown', (event)=> {
    let princess = document.querySelector(".PrincessPeach");
    let cloud = 50;

    princess.style.left = "0px"
    princess.style.top = "0px"
   
    switch(event.key) {
        case "ArrowUp": princess.style.top = `${parseInt(princess.style.top)-modifier-cloud}px`;break;
         case "ArrowDown": princess.style.top = `${parseInt(princess.style.top)+modifier+cloud}px`;break;
        case "ArrowLeft": princess.style.left = `${parseInt(princess.style.left)-modifier-cloud}px`;break;
        case "ArrowRight": princess.style.left = `${parseInt(princess.style.left)+modifier+cloud}px`;break;
    }
    // console.log(event.key);
});

const grid = document.querySelector('.grid')

for(let i = 0; i < 12; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const cupcakes = [
    1,2,3,4,
    9,10,11,12
]

function draw () {
    for (let i = 0; i<cupcakes.length; i++) {
        squares[cupcakes[i]].classList.add('.cupcake')
    }
}

