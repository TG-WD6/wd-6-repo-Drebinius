/////////OPDRACHT 5.2.1/////////////


const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen']
    console.log(dutchSports.slice(0,1))
    console.log(dutchSports.slice(1,2))
    console.log(dutchSports.slice(2,3))


/////////OPDRACHT 5.2.2/////////////

function hoeVeel() {
for (const sport in dutchSports) {
      return console.log(`${sport}: ${dutchSports[sport]}`)
}
}
for (const sport of dutchSports) {
        console.log(sport)
}
