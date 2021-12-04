const api_base_url = "<GET_THIS_FROM_INSTRUCTOR>"
const apiKey = "<GET_THIS_FROM_INSTRUCTOR>"

async function getHighScores() {
    let response = await fetch(api_base_url, {
        headers : {
            "x-api-key": apiKey
        }
    })
    let highscores = await response.json()
    return highscores;
}


async function sendHighScore(scoreData, UserId) {
    let response = await fetch(api_base_url, {
        method: "POST",
        headers : {
            "x-api-key": apiKey,
            "Content-Type": "application/json",   
        },
        body:  JSON.stringify({
            Data: scoreData,
            UserId: UserId
        })
    })
    let data = await response.json()
    //does new highscore show up?
    console.log('new',data)

    let highscores = await getHighScores();
    console.log(highscores)

}
