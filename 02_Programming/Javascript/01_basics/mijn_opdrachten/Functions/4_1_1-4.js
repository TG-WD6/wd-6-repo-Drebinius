/////////OPDRACHT 4.1.1///////////////////////
function forButtonOne() {
        console.log("Hello world!")
};

// document.getElementById('buttonOne').onclick = function forButtonOne() {
//         console.log("hello world!")
// }



//////////OPDRACHT 4.1.2///////////////////////

const elemID = document.getElementById('inputOne');
console.log(elemID)

///////////OPDRACHT 4.1.3-4///////////////////////


function inputOneTest(number) {
        // console.log("godverdomme wat is dit af en toe verwarrend") 4.1.3
        let result = number * 2
        return result
}
console.log(inputOneTest(10))



// function double(number) {
//         const result = number * 2
//     return result
// }

// console.log(double())


function inputTester() {
        const inputText = document.getElementById('inputOne').value //the value of (html number input) inputOne is set (equal to/to be) the dec *inputText*
        const valueMlp = inputText * 2    //mlp of *2 on *inputText*, which is set to be equal to dec *valueMlp*. so the multiplied value is now called *valueMlp*
        const outPutParag = document.getElementById('outPut').textContent = valueMlp//the multiplied value of inputOne, which has been declared *valueMlp* is set to be the textContent of a paragraph id'ed as outPut
                // debugger;
        return  outPutParag
} //huh. this works!

// function inputTester() { working doublah 4.1.4
//         const inputText = document.getElementById('inputOne').value
//         const result = inputText * 2
//         return document.getElementById('outPut').textContent = result
//         return console.log(result)
// }
