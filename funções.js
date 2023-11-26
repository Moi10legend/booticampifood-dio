let userName = getFirstName("Moisés Freire Lopes Filho", " " )
let userName2 = getFirstName("Júlia-Vitória-Melo-da-Silva", "-")

console.log("Olá, seja bem vindo(a) " + userName + "!")
console.log("Olá, seja bem vindo(a) " + userName2 + "!")

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}

