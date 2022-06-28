
////////////////////////OPDRACHT 6.1.1////////////////////
let pet = new Object()  //object constructor
    pet.name = 'Henk'
    pet.type = 'Steen'
        console.log(pet)


let petA = {            //literal constructor
    name: 'Reinier',
    type: 'Goat',
}       
        console.log(petA)


function Pet(name, type) {//function constructor
    this.name = name
    this.type = type
}
let petB = new Pet('Grijs', 'Huistijger')
        console.log(petB)

    
let petC = new function() { //singleton
    this.name = 'Rogier',
    this.type = 'Reiger'
}
        console.log(petC)


class noisyPet {            //class-based constructor
    constructor(name, type) {
        this.name = name
        this.type = type
        this.makesSound()
    }
    makesSound() {
        console.log(`${this.name} makes sound!`)
    }
}

const Lassie = new noisyPet('Lassie','GShepherd')
        console.log(Lassie)

 ////////////////////////OPDRACHT 6.1.2////////////////////       

 const objectPet = Object.create(pet)   
        objectPet.name = 'Kwik';
        objectPet.type = 'Duck'
            console.log(objectPet)

const objectAnotherPet = Object.create(petA)    
        objectAnotherPet.name= 'Kwok',
        objectAnotherPet.type= 'Deck';
            console.log(objectAnotherPet)
            
            
const morePetsOkay = Object.create(Pet) //type works, name doesnt?
        morePetsOkay.name ='Kwek'
        morePetsOkay.type ='Dack'
            console.log(morePetsOkay)


// const evenMorePet = Object.create(petC){ //cannot get this to work
//         evenMorePet.name='Kwuk'
// }
// console.log(evenMorePet)


const classPet = Object.create(noisyPet)    //cannot get this to work either :(
        classPet.name= 'Kwøk'
    console.log(classPet)

const nogEenEend = Object.create(pet)


 ////////////////////////OPDRACHT 6.1.3////////////////////
let arrayPeople = [A,B,C,D,E,F,G,H,I,J]

class person{
    constructor(name, age) {
    this.name= name
    this.age=age
}}

A = new person('Kevin','28')
B = new person('George','39')
C = new person('Elaine','37')
D = new person('Jerry','38')
E = new person('James','32')       
F = new person('Apache','19')
G = new person('Celot','24')
H = new person('Jack','27')
I = new person('Marcus','43')
J = new person('Deckard','52')

arrayPeople.sort((a, b) => a.age - b.age)
    console.log(arrayPeople)
