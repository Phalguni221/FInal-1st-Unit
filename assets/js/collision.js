function update() {
    game.physics.arcade.collide(princess, div);
    game.physics.arcade.collide(princess, div, collectDiv, null, this);
}

function collectDiv(princess, div) {
    div.kill();
    scoreText.text = "Results: " + score++
    // divResults.play();
}
