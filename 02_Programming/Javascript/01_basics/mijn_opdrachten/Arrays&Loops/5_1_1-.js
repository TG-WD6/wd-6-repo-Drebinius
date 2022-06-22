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


const pets = ["Bird", "Dog", "Cat"]
const outdoorPets = pets.slice(1,2)
pets.splice(1, 2, "Cat", "Dog")
outdoorPets.sort()
pets.forEach(pet => console.log(`My very own ${pet}`))
const favPets = pets.map(pet => `My favorite ${pet}`)

console.log(pets)
console.log(outdoorPets)
console.log(favPets)

const firstArray = [...Array(10).keys()]
const dirstArray = Array.from(Array(10).keys())

    console.log(firstArray)
    console.log(dirstArray)


const arr = [0, 1, 2, 3, 4, 5]
    arr.forEach(function(value, index) {
        if ( index != 0 ) {console.log(value)}})