

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

const grid = document.querySelector('.grid');
 
setInterval(draw => {
    for (let i = 0;  i<1;  i++) {
        const squares = document.createElement('div');
        grid.appendChild(squares);
    }
    
    },1000)

 const squares = grid.children

 var myGameArea = {
    div : document.createElement("div"),
    start : function() {
        this.div.width = 40;
        this.div.height = 40;
        this.context = this.div.getContext("2d");
        document.body.insertBefore(this.div, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {

    this.type = type;
    this.width = width;
    this.height = height;
    this.speed = 1;
    this.angle = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);        
        ctx.restore();    
    }
    this.newPos = function() {
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}


//PrincessPeachMovements

let modifier = 200;
document.addEventListener('keydown', (event) => {
    let princess = document.querySelector(".PrincessPeachCute");
    princess.style.left = "0px"
    princess.style.top = "0px"

    switch (event.key) {
        case "ArrowUp": princess.style.top = `${parseInt(princess.style.top)-modifier}px`; break;
        case "ArrowDown": princess.style.top = `${parseInt(princess.style.top)+modifier}px`; break;
        case "ArrowLeft": princess.style.left = `${parseInt(princess.style.left)-modifier}px`; break;
        case "ArrowRight": princess.style.left = `${parseInt(princess.style.left)+modifier}px`; break;
    }
    console.log(event.key);
});


function movePicture(e) {
    squares[currentCollectorIndex].classList.remove('PrincessPeachCute')
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
    squares[currentCollectorIndex].classList.remove('PrincessPeachCute')
}

document.addEventListener('keydown', movePicture)

// let goLeft = "/assets/images/PrincessPeachCute.jpg";
// let goUp = "/assets/images/PrincessPeachCute.jpg";
// let goRight = "./assets/images/PrincessPeachCute.jpg";
// let goDown = "./assets/images/PrincessPeachCute.jpg";

// let moves = {
//     goLeft, //Encapsulate goLeft,
//         goUp, //Encapsulate goUp,
//         goRight, //Encapsulate goRight,
//         goDown, //Encapsulate goDown
//         // Move with arrow keys
//     directionChanges: {
//         "ArrowLeft": {  // West
//             x: -1, y: 0,
//             backgroundImage: "./assets/images/PrincessPeachCute.jpg",
//             PrincessPeachImg: goLeft,
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

// }
