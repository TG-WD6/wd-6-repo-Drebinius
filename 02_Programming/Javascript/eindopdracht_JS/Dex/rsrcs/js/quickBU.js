const cardContainer = document.getElementById('card__container')
const pokAmount = 150
const genButton = document.querySelectorAll(`[data-button-gen]`)



const iterateMons = async ( ) => {   //fetch poke info/sprite for amount set in dec pokAmount
    for (let i = 0; i <= pokAmount; i++) {
        fetchPokemon(i)
        fetchPokemonSprite(i)
        
    }
}

const fetchPokemonSprite = async (id) => {// aparte spritefetcher
    // const url= `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id+1}.png`;
    const response = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1}.png`);
    const blob = await response.blob()
 
            const pokemon = { }
            pokemon['sprite'] = URL.createObjectURL(blob)
            // console.log(pokemon.sprite)
            document.getElementById('pokemon__image').src = URL.createObjectURL(blob)        
}; 

const fetchPokemon = async (id) => {
    const pokJSON = `https://raw.githubusercontent.com/TG-WD6/wd-6-repo-Drebinius/b6d620546c44ed59651c4211ca21197e57cbf095/02_Programming/Javascript/eindopdracht_JS/Dex/rsrcs/js/pokedex.json`;
    // const spritePath = `https://github.com/TG-WD6/wd-6-repo-Drebinius/tree/eindopdracht_JS/02_Programming/Javascript/eindopdracht_JS/Dex/rsrcs/sprites`
    fetch(pokJSON)
        .then((res) => {
            return res.json();
        })
        .then((pokeArray) => {  //////nu bevat dec pokeArray een array met alle pokemon
            // console.log(pokeArray); 

            const pokemon = { };    ////maakt een object
                pokemon['id'] = pokeArray[`${id}`].id
                pokemon['name'] = pokeArray[`${id}`].name.english;
                pokemon['type'] = pokeArray[`${id}`].type
                // pokemon['type'] = ' '
                //             pokeArray[`${id}`].type.map((type) => {
                //                 pokemon['type'] = pokemon['type'] + ', ' +       
                //                 type.name})                                      

                pokemon['stats'] = Object.keys(pokeArray[`${id}`].base)
                
                // pokemon['stats'] = JSON.parse(pokeArray[`${id}`].base) parse/map dinnae work

            //call spritefetch to combine with pokefetch
            fetchPokemonSprite(id)  
            createPokeCard(pokemon)
            //call fnc createPokeCard with both info and sprite
        })
        
};
const createPokeCard = (pokemon) => {
    const cardElement = document.createElement('div')
    cardElement.classList.add('pokemon')
    const cardInnerHTML = `
   <div class='container__top'>
            <span class='pokemon__id'>${pokemon.id}</span><br>
            <img id='pokemon__image' src="${pokemon.sprite}" alt="sprite${pokemon.name}">
    </div>
    <div class='container__bottom'>
            <h3 class='pokemon__name'>${pokemon.name}</h3>
            <small class='type'>Type: <span>${pokemon.type}</span></small>
            <p class='pokemon__stats'>${pokemon.stats}</p>
    </div>
    <br>
    <br>
    `;
    cardElement.innerHTML = cardInnerHTML
    cardContainer.appendChild(cardElement)
    
}

//  iterateMons()
// genButton.addEventListener('click',  () => {
    iterateMons()
// })