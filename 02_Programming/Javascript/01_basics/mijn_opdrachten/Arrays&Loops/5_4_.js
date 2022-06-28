let arrayLike = document.querySelectorAll('div')
    console.log(arrayLike)

let newArray = Array.from(arrayLike)
    console.log(newArray)


///////////decs to be mutated///////////////////
const arrInstanceOne = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const arrInstanceTwo = Array.from({ length: 20 }, (_e, i) => i + 1)
const arrInstanceThree = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
/////////////////////////////////////////////////
let filteredArray = arrInstanceOne.filter(word => word.length > 6)// filtered for words with length >6
    console.log(filteredArray)

arrInstanceOne.find(function(value,index) { 
    console.log(value,index)
})

 const evensStevens = (e) => e % 2 === 0; // who'da thunk?
   
 //checks whether SOME are even numbers
 console.log(arrInstanceTwo.some(evensStevens))  

//checks whether ALL(every) are even numbers
 console.log(arrInstanceOne.every(evensStevens))

 //checks if provided parameter is included in selected array
console.log(arrInstanceOne.includes('May'))
console.log(arrInstanceTwo.includes(11))
