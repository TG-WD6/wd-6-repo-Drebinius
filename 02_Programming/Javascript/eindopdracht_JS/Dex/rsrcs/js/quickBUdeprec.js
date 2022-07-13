const cardContainer = document.getElementById('card__container')
const genButton = document.querySelector(`[data-button-gen]`)
const clearButton= document.querySelector('[data-button-clear]')
const genSelect = document.querySelector('#dropdown__gen')
const pokAmount = 150 //# of pokemon to ite, replace with genselectinput later
console.log(genSelect)


 iterateMons = ( ) => {   //fetch poke info/sprite for amount set in dec pokAmount
    for (let i = 0; i <= 150; i++) {
        // debugger

         fetchPokemon(i)
        //  toSort(i)               
        }}
        
         fetchPokemon = async (id) => {
            const pokJSON = await fetch(`https://raw.githubusercontent.com/TG-WD6/wd-6-repo-Drebinius/b6d620546c44ed59651c4211ca21197e57cbf095/02_Programming/Javascript/eindopdracht_JS/Dex/rsrcs/js/pokedex.json`);
            const spriteResponse = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1}.png`);
  
            const pokeArray = await pokJSON.json()
            const blob = await spriteResponse.blob()


            const pokemon = { };    ////maakt een object
            pokemon['id'] = pokeArray[`${id}`].id;
        
            pokemon['name'] = pokeArray[`${id}`].name.english;
            pokemon['type'] = pokeArray[`${id}`].type              
            pokemon['sprite'] = URL.createObjectURL(blob)
            // pokemon['stats'] = Object.keys(pokeArray[`${id}`].base) replaced intermediate value with temp set value
            pokemon['stats'] =(pokeArray[1].base['0'])
            let entries = Object.entries(pokeArray[`${id}`].id)/// MAYBE ARRAY INSTD OBJ?
            console.log(pokemon.stats)

            let sorted = entries.sort((a, b) => a[1] - b[1])
            // pokemon['stats'] = JSON.parse(pokeArray[`${id}`].base) parse/map dinnae work---try again as with ID
            pokemon['idSrtd'] = sorted
            
                createPokeCard(pokemon)
            };

 createPokeCard = (pokemon) => {
    const cardElement = document.createElement('div')
    cardElement.classList.add('pokemon')
    const cardInnerHTML = `
   <div class='container__top'>
            <span class='pokemon__id'>ID#${pokemon.idSrtd}${pokemon.id}</span><br>
            <img id='pokemon__image' src="${pokemon.sprite}" alt="sprite${pokemon.name}">
    </div>
    <div class='container__bottom'>
            <h3 class='pokemon__name'>${pokemon.name}</h3><br>
            <small class='type'>Type: <span style=font-weight:700>${pokemon.type}</span></small>

    </div>
    `;
    //  <span class='pokemon__stats'>${pokemon.stats}</span> //temp removal from @54
    cardElement.innerHTML = cardInnerHTML
    cardContainer.appendChild(cardElement) 
}

 wipePage = () => {
    document.getElementById('card__container').innerHTML = ''
}

genButton.addEventListener('click', iterateMons)
clearButton.addEventListener('click', wipePage)
