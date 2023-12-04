class hero{
    constructor(name, age, type, attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack

    }
   
    attackType(){
       
        if (this.type === "mago"){
            this.attack = "magia"
        }
        else if (this.type === "guerreiro"){
            this.attack = "espada"
        }
        else if (this.type === "monge"){
            this.attack = "artes marciais"
        }
        else{
            this.attack = "shuriken"
    }
    }
    message(){
        console.log(`O ${this.type} atacou usando ${this.attack}`)
    }
    
}
let hero1 = new hero("Moisés", 18, "guerreiro")
hero1.attackType()
hero1.message()
