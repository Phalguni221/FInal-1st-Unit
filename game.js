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

    let modifier = 5;
    document.addEventListener('keydown', (event)=> {
    const {style} = document.querySelector(".PrincessPeach");
    switch(event.key) {
        case 'ArrowUp': style.top = `${parseInt(style.top)-modifier}px`;break;
         case 'ArrowDown': style.top = `${parseInt(style.top)+modifier}px`;break;
        case 'ArrowLeft': style.left = `${parseInt(style.top)-modifier}px`;break;
        case 'ArrowRight': style.left = `${parseInt(style.top)+modifier}px`;break;
    }
    console.log(event.key);
});

// document.addEventListener('keydown', function(e){
//     if(e.repeat) return;

//     if(e.key === 'ArrowLeft'){
//         direction = 'west'
//     }
//     if(e.key === 'ArrowUp'){
//         direction = 'north'
//     }
//     if(e.key === 'ArrowRight'){
//         direction = 'east'
//     }
//     if(e.key === 'ArrowDown'){
//         direction = 'south'
//     }
//     callback(direction)
// })
// function tile (url, top, bottom, width, height){
//     for(let h = 0; h < height; h++){
//         for(let w = 0; w < width; w++){
//             newImage(url, top + w*100, bottom+h*100)
//         }
//     }
// }

// let GrassHeight = window.innerHeight / 2
// // let SkyHeight = window.innerHeight-GrassHeight

// // tile('assets/sky.png', 0, 500, window.innerWidth/100, SkyHeight/100)
// tile('assets/grass.png', 0, 0, window.innerWidth/100, GrassHeight/100)

// // newImage('.assets/sky.png',0,0)
// newImage('.assets/grass.png', 0, 0)
