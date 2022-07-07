const cardContainer = document.getElementById('card__container')
const pokAmount = 150

const iterateMons = async () => {   //fetch poke info/sprite for amount set in dec pokAmount
    for (let i = 0; i <= pokAmount; i++) {
        fetchPokemon(i)
        fetchPokemonSprite(i)
    }
}

const fetchPokemonSprite = (id) => {// aparte spritefetcher
    const url= `https://pokeapi.co/api/v2/pokemon/${id+1}`;
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            const pokemon = { }
            pokemon['sprite'] = data.sprites['front_default']
            // console.log(pokemon['sprite'])
        })
}; 

const fetchPokemon = (id) => {
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

                pokemon['stats'] = pokeArray[`${id}`].base
                // pokemon['stats'] = JSON.parse(pokeArray[`${id}`].base) parse/map dinnae work

            //call spritefetch to combine with pokefetch
            fetchPokemonSprite(id)  
            createPokeCard(pokemon)
            //call fnc createPokeCard
        })
};
const createPokeCard =(pokemon) => {
    const cardElement = document.createElement('div')
    cardElement.classList.add('pokemon')
    const cardInnerHTML = `
    ${pokemon.id}
    ${pokemon.name}
    ${pokemon.type}
    `;
    cardElement.innerHTML = cardInnerHTML
    cardContainer.appendChild(cardElement)
}

 iterateMons()
