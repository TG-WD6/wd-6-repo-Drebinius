///////////////OPDRACHT 4.2.1//////////////////////////////////////

const allMatchingClasses = document.getElementsByClassName('box')      
console.log(allMatchingClasses)

const allMatchingTags = document.getElementsByTagName("p")             
console.log(allMatchingTags)


const allMatchingQuery = document.querySelector(".box")
console.log(allMatchingQuery)  


const allMatchingQueries = document.querySelectorAll('div')
console.log(allMatchingQueries)

function pageWipe(){            //hah. it actually works.
    document.body.innerHTML=''
}    

const textFetcher = document.getElementById('hiddenboi').innerHTML + "this is my answer."
console.log(textFetcher) 

function fourdot2dot2() {
    const Oef = document.querySelector(".box".value) //getting either null or undefined
    console.log(Oef)  
    
}

//////////////////////////////////////////////
// function multiply (number, amount = 2, message) {
//     console.log(message)
//     return number * amount
// }

// console.log(multiply(1, 2, "hallo"))

// function findID(idHere){
//     const elementID = document.getElementById(idHere)
//         console.log(elementID)
//     }
