let someValue = 6

if (someValue < 5) {
    console.log("kleiner dan vijf")
} else if (someValue > 5) {
    console.log("groter dan 5")
} else {
    console.log("precies 5")
}
////////SWITCH/////////////////////////
let condition = 1;

switch (condition) {
        case 0:
        case 1:
        case 2:
            console.log("the number is 0, 1 or 2")
            break;
        default:
            console.log("the number is not 0, 1 or 2")
}