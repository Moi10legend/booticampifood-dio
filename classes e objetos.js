class formaBolo{
    constructor(saborDaMassa, saborDoRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio

    }
    escrever(){
        console.log(`Bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`)
    }
}

let boloFesta = new formaBolo("cenoura", "chocolate")
let boloCaseiro = new formaBolo("macaxeira", "chantily")
boloFesta.escrever
boloCaseiro.escrever