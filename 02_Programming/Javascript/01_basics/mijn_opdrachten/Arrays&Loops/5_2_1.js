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

const twentyArr = Array.from({ length: 20 }, (e, i) => i + 1)
const evenArr = []

for (let i = 0; i < twentyArr.length; i++) { 
    if(twentyArr[i] % 2 === 0) { evenArr.push(twentyArr[i]); } } 
console.log(evenArr);


//////////////OPDRACHT 5.2.4//////////////

for (let i = 0; i < 3; i++) {
    for (let j =1; 1 < 10; j++)
    break
    console.log(i,j);
} 