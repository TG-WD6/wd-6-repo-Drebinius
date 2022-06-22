const inputElement = document.getElementById('nameInput')
const inputValue = inputElement.value;
// console.log(inputElement, inputValue)

function czecher() {
    const outPutElement = document.getElementById('generatedOutput')
    const outputChange = outPutElement.textContent
// console.log(outPutElement, outputChange)


    let actualCheck = inputValue;
        switch (actualCheck) {
            case "Esther":
                result = "Esther zit in deze groep!" 
                break;
            case "Luisa": 
                result = "Luisa zit in deze groep!" 
                break;
            case "Madhwi": 
                result = "Madhwi zit in deze groep!" 
                break;
            case "Nathan":
                result = "Nathan zit in deze groep!" 
                break;
                default: 
                    result = (inputValue +" zit niet in deze groep!")
                } console.log(result)

    }

   



