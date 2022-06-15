//////ODPRACHT 2.2

let someKittens = "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen.";
//substring 2.2.1
console.log(someKittens.substring(62))
console.log(someKittens.substring(32,62))
console.log(someKittens.substring(62,32))
console.log(someKittens.substring(0,32))
console.log(someKittens.substring(-19))
console.log(someKittens.substring(-27,-10))
//sloice  2.2.2  
console.log(someKittens.slice(62))
console.log(someKittens.slice(32,62))
console.log(someKittens.slice(62,32))
console.log(someKittens.slice(0,32))
console.log(someKittens.slice(-19))
console.log(someKittens.slice(-27,-10))
//////////////////////////////////
newStringKittens = someKittens.slice(0, 32);

console.log(newStringKittens)

    
console.log(someKittens.substring(62))
console.log(someKittens.substring(32,62))
console.log(someKittens.substring(62,32))
console.log(someKittens.substring(0,32))
console.log(someKittens.substring(-19))
console.log(someKittens.substring(-27,-10))
//OPDRACHT 2.3///////////////////////////

let oldKittens = "Die nieuwe kittens zijn zo schattig!"

const words = oldKittens.split(' ')
console.log(words)
console.log(oldKittens.split(' '))

const chars = oldKittens.split('')
console.log(chars)
console.log(oldKittens.split(''))
////////////////////////////!?!?!?!
const copy = oldKittens.split().filter(s=>s!='')
console.log(copy)



console.log(typeof oldKittens)
console.log(typeof copy)
