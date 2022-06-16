/////////////////OPDRACHT 3.2.1
let n2c = 4;

if (n2c == 3) {
    console.log("i am equal to 3")
} else if (n2c > 4) {
    console.log("i am larger than 4")
} else if (n2c > 11) {
    console.log("i am larger than 11")
} else if (n2c < 3) {
    console.log("i am smaller than 3")
}


//////OPDRACHT 3.2.3


// let monthNu = 0;

// if (monthNu == 1) {
//     console.log("January")
// } else if (monthNu == 2) {
//     console.log("February")
// } else if (monthNu == 3) {
//     console.log("March") 
// } else if (monthNu == 4) {
//     console.log("April")
// } else if (monthNu == 5) {
//     console.log("May")
// } else if (monthNu == 6) {
//     console.log("June")
// } else if (monthNu == 7) {
//     console.log("July")
// } else if (monthNu == 8) {
//     console.log("August")
// } else if (monthNu == 9) {
//     console.log("September")
// } else if (monthNu == 10) {
//     console.log("October")
// } else if (monthNu == 11) {
//     console.log("November")
// } else if (monthNu == 12) {
//     console.log("December")
// } else {
//     console.log("not a valid month.")
// }

let monthNu = 1; //1-12 corresponds to month, else error msg
    if (monthNu == 1) {
        result = "January"
    } else if (monthNu == 2) {
        result = "February"
    } else if (monthNu == 3) {
        result = "March" 
    } else if (monthNu == 4) {
        result = "April"
    } else if (monthNu == 5) {
        result = "May"
    } else if (monthNu == 6) {
        result = "June"
    } else if (monthNu == 7) {
        result = "July"
    } else if (monthNu == 8) {
        result = "August"
    } else if (monthNu == 9) {
        result = "September"
    } else if (monthNu == 10) {
        result = "October"
    } else if (monthNu == 11) {
        result = "November"
    } else if (monthNu == 12) {
        result = "December"
    } else {
        result = "not a valid month."
    }   console.log(result)

//////OPDRACHT 3.2.4//////////////////////////////////////////////////

let inputMonth = 2;
switch (inputMonth) {
        case 1:
            result = "January"
            break;
        case 2:
            result = "February"
            break;
        case 3:
            result = "March"
            break;
        case 4:
            result = "April"
            break;
        case 5:
            result = "May"
            break;
        case 6:
            result = "June"
            break;
        case 7: 
            result = "July"
            break;
        case 8:
            result = "August"
            break;
        case 9:
            result = "September"
            break;
        case 10:
            result = "October"
            break;
        case 11:
            result = "November"
            break;
        case 12:
            result = "December"
            break;
        default:
            result = "Not a valid month"
}   console.log(result)


//////OPDRACHT 3.2.5 voorbeeld//////////////////////////////////////////////////

let x = 1;
let results;
if (x<=4 && x>=0) { ////als x 4 of kleiner is EN 0 of groter/ = x 0-4
    results = 2;
} else { 
    results = 5;
} 
console.log(results)

//////OPDRACHT 3.2.5////////////////////////////////////////////////// 

let X = 1;
let results1 = (X<=4&&X>=0) ? 2 : 5;
    console.log(results1);