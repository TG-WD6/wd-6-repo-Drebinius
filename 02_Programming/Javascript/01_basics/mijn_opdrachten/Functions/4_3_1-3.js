///////OPDRACHT 4.3.1/////////////////////

function randomNumber() {
    let x = Math.random()
    console.log(Math.round(x))//makes it either 1 or 0. cool.
}


///////OPDRACHT 4.3.2/////////////////////


function randomInputNumber(x) {
    let z = Math.floor(Math.random() * x)
    console.log(z)//
}


//////////ODPRACHT 4.3.3//////////////
let x = '99' * '89'
let y = '74' / '0.7294'
let z = x * (y * y) / x + y

console.log(x)
console.log(y)
console.log(z)

console.log(Math.floor(Math.min(x,y,z)))
console.log(Math.floor(Math.max(x,y,z)))
