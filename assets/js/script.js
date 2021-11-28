
    let modifier = 50;
    document.addEventListener('keydown', (event)=> {
    let princess = document.querySelector(".PrincessPeach");
    let cloud = 0

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