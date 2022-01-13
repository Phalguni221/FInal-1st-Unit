
var config = {
    type: Phaser.AUTO,
    width: 1800,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

    var game = new Phaser.Game(config);
    var score = 0;
    var scoreText;

// //     function preload ()
// // {
// //     this.load.image('sky', "./assets/images/sky.png");
// //     this.load.image('ground', "./assets/images/platform.png");
// //     this.load.image('star', 'assets/star.png');
// //     this.load.image('bomb', 'images/bomb.png');
// //     this.load.spritesheet('dude', 
// //         'assets/dude.png',
// //         { frameWidth: 32, frameHeight: 48 }
// //     );
// // }

// // var platforms;
// // function create ()
// //     {
// //         platforms = this.physics.add.staticGroup();
// //         platforms.create(400, 568, 'ground').setScale(2).refreshBody();

// //         platforms.create(600, 400, 'ground');
// //         platforms.create(50, 250, 'ground');
// //         platforms.create(750, 220, 'ground');
// //     }
    

//     // function update ()
//     // {
//     // }

//     function collectCupcake (princess, square)
//     {
//         square.disableBody(true, true);
    
//         score += 10;
//         scoreText.setText('Score: ' + score);
//     }