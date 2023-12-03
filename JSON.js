let match = {
    team1 : "Santa Cruz",
    team2 : "Real Madrid",
    playersTeam1: {
        0: ["Grafite", 23],
        1: ["Caça Rato", 11],
        2: ["Tará", 10]
    },
    playersTeam2 : {
        0: ["Vini Jr", 7],
        1: ["Rodrygo", 11],
        2: ["Bellingham", 5]
     }


}

function matching(match){
    console.log(`A partida de hoje será pela final do mundial amigos! Será ${match.team1} contra ${match.team2}`)
    for(let index in match.playersTeam1){
        let[playerName, playerNumber] = match.playersTeam1[index]
        console.log(`Os principais jogadores do ${team1} são ${playersteam1}`)
    }
}

matching(match)