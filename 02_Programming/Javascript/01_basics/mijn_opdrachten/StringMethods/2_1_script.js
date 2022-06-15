let someKittens = "De poes van de buurman heeft kittens gehad! " + "Hij vraagt of wij nog kittens willen.";
//OPDRACHT 2.1.1
var A = "De poes van de buurman heeft kittens gehad! ";
var B = "Hij vraagt of wij nog kittens willen.";
// 2.1.2
let newKittens = someKittens.replace(A+B, (match) => {//
    console.log({match});
    return match.toUpperCase();

});
console.log(newKittens)
// 2.1.3
const findCat = 'kittens';
const indexOfFirst = someKittens.indexOf(findCat);
const indexOfLast = someKittens.lastIndexOf(findCat);

console.log(findCat, indexOfFirst)
console.log(findCat, indexOfLast)
// 2.1.4
console.log(someKittens.charAt(29))
console.log(someKittens.charAt(66))
// 


let newishKittens = (A.replace(A.toUpperCase()), + B);
console.log(newishKittens)
console.log(typeof newishKittens); 
     //verandert naar een number ipv string. why? object? prototypal inheritance?


    
    


console.log(A.toUpperCase());
console.log(A + B)
console.log(typeof someKittens); 
console.log(typeof A); 
console.log(someKittens);
console.log(A.length);

console.dir(findCat)
