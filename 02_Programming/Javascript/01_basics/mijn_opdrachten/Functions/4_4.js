
// const inputValue = document.getElementById('nameInput').value
// const outputDiv = document.getElementById('generatedOutput')

const input = document.querySelector('#nameInput')
const output = document.getElementById('generatedOutput')

input.addEventListener('click', czecher)

function czecher() {
    let actualCheck = input.value;
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
                    result = `${input.value}  zit niet in deze groep :'(`;
                } return output.textContent = result
            }

   



