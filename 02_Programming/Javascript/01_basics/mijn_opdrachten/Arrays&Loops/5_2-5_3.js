/////////OPDRACHT 5.2.1/////////////


const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen']
// console.log(dutchSports.slice(0,1))
// console.log(dutchSports.slice(1,2))
// console.log(dutchSports.slice(2,3))


/////////OPDRACHT 5.2.2/////////////

function forIn() {
    for (let i in dutchSports) {
        console.log(dutchSports[i])
    }
}

function forOf() {
    for (const sport in dutchSports) {
        console.log(sport)
    }
}

//////////////OPDRACHT 5.2.3//////////////

const twentyArray = Array.from({ length: 20 }, (_e, i) => i + 1)
const evenArray = []

for (let i = 0; i < twentyArray.length; i++) {
    if (twentyArray[i] % 2 === 0) { evenArray.push(twentyArray[i]); }
}
console.log(evenArray);


//////////////OPDRACHT 5.2.4-5//////////////

for (let i = 1; i < 4; i++) { //dont do math, kids. Fairly certain i would not have arrived at this solution without a lot of peer help.
    console.log(i)
    for (let j = 1; j < 11; j++)
        console.log(i * j)
}




//////////////OPDRACHT 5.2.6//////////////
const fibo = [0, 1];

for (let i = 2; i < 50; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
} console.log(fibo)

////////////OPDRACHT 5.2.BUBBLESORT//////////////

const toBeBubbled = [2, 7, 5, 10, 4, 9, 3, 1, 8, 6]


function bubbler(toSort) {
    let temp = toSort.length;

    for (let i = 0; i < temp; i++) {
        for (let j = 0; j < temp - i - 1; j++) {
            if (toSort[j] > toSort[j + 1]) {

                let hold = toSort[j];
                toSort[j] = toSort[j + 1];
                toSort[j + 1] = hold;
            }
        }
    }
    return toSort
}
console.log(bubbler(toBeBubbled))

////////////OPDRACHT 5.3.1-7//////////////

const hutchSports = ['Voetbal','Hockey','Schaatsen']

    hutchSports.push('Zeilen', 'Zwemmen') //.push() END OF selected array
        console.log(hutchSports)

    hutchSports.unshift('Volleybal') //.unshift() START OF selected array
        console.log(hutchSports)

let ballSports = hutchSports.slice(0,3) //new array ballSports
    console.log(hutchSports)
    console.log(ballSports)

    hutchSports.splice(0,3) //items now in ballSports are spliced out of hutchSports
    console.log(hutchSports)

    hutchSports.sort((a, b) => a.length - b.length)// items are sorted by length
    console.log(hutchSports)

// function lister(array) { //function to list every item in the console separately
//     array.forEach(x => console.log(x))
// } 
// lister(hutchSports) //logs every item in the console separately

for (const sports of hutchSports) {
    console.log(sports)
}

console.log(hutchSports.map(hutchSports => hutchSports.length));

hutchSports.map(hutchSports => console.log(hutchSports.length))

hutchSports.forEach(function(item, index, _array) {
    console.log(item, index)
})



