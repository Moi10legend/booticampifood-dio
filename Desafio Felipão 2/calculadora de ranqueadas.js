function calculateRanking(victorys, defeats){
    let ranking = victorys - defeats
    return ranking
}

let rankingNumber = calculateRanking(100, 1)

function ranking(){
    
    if (rankingNumber < 11){
        level = "Ferro"
    }
    else if ((rankingNumber > 10) && (rankingNumber <= 20 )){
        level = "Bronze"
    }
    else if ((rankingNumber > 20) && (rankingNumber <= 50)){
        level = "Prata"
    }
    else if ((rankingNumber > 50) && (rankingNumber <= 80)){
        level = "Ouro"
    }
    else if ((rankingNumber > 80) && (rankingNumber <= 90)){
        level = "Diamante"
    }
    else if ((rankingNumber > 90) && (rankingNumber <= 100)){
        level = "Lendário"
    }
    else {
        level = "Imortal"
    }

    

    return level
}

let rank = ranking()
console.log("O Herói tem de saldo de " + rankingNumber + " está no nível de " + rank)