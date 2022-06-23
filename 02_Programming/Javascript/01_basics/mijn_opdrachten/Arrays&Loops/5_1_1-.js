let array = ["Blink", 182]
for (const index in array) {
        console.log(index)
}

let array2 = ["Blink", 182]
for (const item of array2) {
    console.log(item)
}

// let pets = ["Bird", "Dog", "Cat"]
//     console.log(pets.shift() + " has escaped!")
//     console.log(pets.pop() + " has escaped!")
//     console.log(pets)
//     console.log(pets.unshift("Bird"))
//     console.log(pets.push("Cat"))
//     console.log(pets)


const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
console.log(Months)

const selectMonths = Months.slice(1,2)
console.log(selectMonths)

Months.splice(1, 2, "Maypril", "Fejunary")
// this code sorts shit    selectMonths.sort((a, b) => a - b)
Months.forEach(Month => {console.log(`My very own ${Month}`)})



const favMonths = Months.map(Month => `My favorite ${Month}`)
console.log(favMonths)

const firstArray = [...Array(10).keys()]
const dirstArray = Array.from(Array(10).keys())
    console.log(firstArray)
    console.log(dirstArray)


const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    arr.forEach(function(value, index) {
        if ( index != 0 ) {console.log(value)}
    })

/////////////////OPDRACHT 5.1.1////////////////////
                        //this is the mess
// const arrRandom = [7, 8, 10, 9, 1, 4, 5, 2, 6, 3]   //moved lower for reuse
//     console.log(arrRandom)
                             //this sorts the mess
        // console.log(arrRandom.sort((a, b) => a - b))

/////////////////OPDRACHT 5.1.2-3////////////////////


const fruitArr = ['Banaan', 'Ananas', 'Mango', 'Appel', 'Aardbei']
    console.log(fruitArr)
        console.log(fruitArr.slice(3))

/////////////////OPDRACHT 5.1.4-6////////////////////

 const arrRandom = [7, 8, 1, 9, 0, 4, 5, 2, 6, 3]   
    console.log(arrRandom.length)


 function picker() { 
    let pickedNumber = arrRandom[Math.floor(Math.random() * arrRandom.length)]                
        return pickedNumber
}   console.log(picker(arrRandom))

function fruitPicker() {
    let pickedNumber =  arrRandom[Math.floor(Math.random() * arrRandom.length)]
    let adjNumber = (pickedNumber % 5)
    selectFruit = fruitArr.slice(adjNumber, (adjNumber + 1))
    return console.log(selectFruit)    
}

 
//  let Number = 
//     arrRandom[Math.floor(Math.random() * arrRandom.length)]
//         console.log(Number)

 
 //this picks a random number from 1- 10
    console.log(Math.floor(Math.random() * (1 + 10 - 1)) + 1) 
 // console.log(Math.floor(Math.random(arrRandom)))
//fuck. this just shuffles.
function shuffler(arrRandom) {
    let currentIndex = arrRandom.length, randomIndex;

        while (currentIndex != 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--

            [arrRandom[currentIndex], arrRandom[randomIndex]] = 
            [arrRandom[randomIndex], arrRandom[currentIndex]]
        }
        return arrRandom
}

shuffler(fruitArr)
    console.log(fruitArr)




