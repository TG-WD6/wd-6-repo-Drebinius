const cardContainer = document.getElementById('card__container')
const pokAmount = 150
const genButton = document.querySelector(`[data-button-gen]`)
const clearButton= document.querySelector('[data-button-clear]')
// const pokemon = require('fetchPokemon')


const iterateMons = ( ) => {   //fetch poke info/sprite for amount set in dec pokAmount
    for (let i = 0; i <= pokAmount; i++) {
        // debugger

         fetchPokemon(i)               
        }}
        
        const fetchPokemon = async (id) => {
            const pokJSON = await fetch(`https://raw.githubusercontent.com/TG-WD6/wd-6-repo-Drebinius/b6d620546c44ed59651c4211ca21197e57cbf095/02_Programming/Javascript/eindopdracht_JS/Dex/rsrcs/js/pokedex.json`);
            const spriteResponse = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1}.png`);
            // fetch(pokJSON)
            //     .then((res) => {
    //         return res.json();
        
        // .then(async (pokeArray)  => {  //////nu bevat dec pokeArray een array met alle pokemon
            // console.log(pokeArray); 
            const pokeArray = await pokJSON.json()
            const blob = await spriteResponse.blob()
            const pokemon = { };    ////maakt een object
            pokemon['id'] = pokeArray[`${id}`].id
            pokemon['name'] = pokeArray[`${id}`].name.english;
            pokemon['type'] = pokeArray[`${id}`].type
            // pokemon['type'] = ' '
            //             pokeArray[`${id}`].type.map((type) => {
                //                 pokemon['type'] = pokemon['type'] + ', ' +       
                //                 type.name})                                      
                pokemon['sprite'] = URL.createObjectURL(blob)
                pokemon['stats'] = Object.keys(pokeArray[`${id}`].base)
                console.log(typeof pokemon)
                // pokemon['stats'] = JSON.parse(pokeArray[`${id}`].base) parse/map dinnae work
                createPokeCard(pokemon)
                //call fnc createPokeCard with both info and sprite   
            } 
            
        
;
const createPokeCard = (pokemon) => {
    const cardElement = document.createElement('div')
    cardElement.classList.add('pokemon')
    const cardInnerHTML = `
   <div class='container__top'>
            <span class='pokemon__id'>ID#${pokemon.id}</span><br>
            <img id='pokemon__image' src="${pokemon.sprite}" alt="sprite${pokemon.name}">
    </div>
    <div class='container__bottom'>
            <h3 class='pokemon__name'>${pokemon.name}</h3>
            <small class='type'>Type: <span>${pokemon.type}</span></small>
            <p class='pokemon__stats'>${pokemon.stats}</p>
    </div>
    `;
    cardElement.innerHTML = cardInnerHTML
    cardContainer.appendChild(cardElement) 
}

const wipePage = () => {
    document.getElementById('card__container').innerHTML = ''
}


genButton.addEventListener('click', iterateMons)
clearButton.addEventListener('click', wipePage)
// genButton.addEventListener('click',  () => {
    // iterateMons()
// })