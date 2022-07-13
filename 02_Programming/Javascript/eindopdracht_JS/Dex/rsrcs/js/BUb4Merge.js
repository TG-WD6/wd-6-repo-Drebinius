async function fetchPokemon() {
    const requestURL=`https://raw.githubusercontent.com/TG-WD6/wd-6-repo-Drebinius/b6d620546c44ed59651c4211ca21197e57cbf095/02_Programming/Javascript/eindopdracht_JS/Dex/rsrcs/js/pokedex.json`;
    // const spriteResponse = fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`);
    const request = new Request(requestURL)
    const response = await fetch(request)
    const pokeArray = await response.json()
    // let pokeArray = await pokeJSON.json()
    // let blob = await spriteResponse.blob()



genButton.addEventListener('click', fetchPokemon)
clearButton.addEventListener('click', wipePage)

genFilter(pokeArray)
}


wipePage = () => {
document.getElementById('card__container').innerHTML = ''
}


const cardContainer = document.getElementById('card__container')
const genButton = document.querySelector(`[data-button-gen]`)
const clearButton= document.querySelector('[data-button-clear]')
const genSelect = document.querySelector('#dropdown__gen')


function genFilter(pokeArray) {
const genFilteredArray = pokeArray.filter((data) => {
if(+genSelect.value == 1)    {
    return data.id <= 151                             //gen1
} else if (+genSelect.value === 2) {

    return data.id >= 152 && data.id <= 251//gen2
  } else if (+genSelect.value === 3) {

    return data.id >= 252 && data.id <= 386//gen3
  } else if (+genSelect.value === 4) {

    return data.id >= 387 && data.id <= 493//gen4
  } else if (+genSelect.value === 5) {

    return data.id >= 494 && data.id <= 649//gen5
  } else if (+genSelect.value === 6) {

    return data.id >= 650 && data.id <= 721//gen6
  } else if (+genSelect.value === 7) {

    return data.id >= 722 && data.id <= 809//gen7
  } else return
    })  

createPokeCard(data)     
}

    // for (const pokemon of genFilteredArray) {
    //   const pokemonid = pokemon.id;       
    //     pokemon['name'] = pokemon.name.english;
    //     pokemon['type'] = pokemon.type;
    //     // pokemon['type2'] = pokemon.type[1]
    //     // console.log(pokemon.type, pokemon.type2)              
    //     // pokemon['sprite'] = URL.createObjectURL(blob)
    //     pokemon['stats'] = pokemon.base;

    //     console.log(pokemon.name)      
  
createPokeCard = (obj) => {
const cardContainer = document.getElementById('card__container')
const cardElement = document.createElement('div')
cardElement.classList.add('pokemon')

const cardInnerHTML = `
<div class='container__top'>
    <span class='pokemon__id'>ID#${obj.id}</span><br>
    <img id='pokemon__image' src="" alt="sprite${obj.name}">
</div>
<div class='container__bottom'>
    <h3 class='pokemon__name'>${obj.name}</h3><br>
    <small class='type'>Type: <span style=font-weight:700>${obj.type}</span></small>

</div>
`;
//  <span class='pokemon__stats'>${pokemon.stats}</span> //temp removal from @54${obj.sprite}
cardElement.innerHTML = cardInnerHTML
cardContainer.appendChild(cardElement) 
}


fetchPokemon()
















    
    

//             const pokemon = { };   
//             pokemon['id'] = pokeArray[`${id}`].id;       
//             pokemon['name'] = pokeArray[`${id}`].name.english;
//             pokemon['type'] = pokeArray[`${id}`].type[0]
//             pokemon['type2'] = pokeArray[`${id}`].type[1]
//             console.log(pokemon.type, pokemon.type2)              
//             pokemon['sprite'] = URL.createObjectURL(blob)
//             pokemon['stats'] = Object.keys(pokeArray[`${id}`].base)
//             let entries = Object.entries(pokeArray[`${id}`].id)/// MAYBE ARRAY INSTD OBJ?
//             // console.log(entries)

//             let sorted = entries.sort((a, b) => a[1] - b[1])
//             // pokemon['stats'] = JSON.parse(pokeArray[`${id}`].base) parse/map dinnae work---try again as with ID
//             pokemon['idSrtd'] = sorted
    
//                 createPokeCard(pokemon)
    








//  iterateMons = ( ) => {   
//     for (let i = 0; i <= pokAmount; i++) {
//         // debugger
// }}