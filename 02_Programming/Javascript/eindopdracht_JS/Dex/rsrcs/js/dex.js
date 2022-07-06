const cardContainer = document.getElementById('card__container')
const pokAmount = 151
// function printValues(obj) {
//     for (let k in obj) {
//         if (obj[k] instanceof Object) {
//             printValues(obj[k])
//         } else {
//             // document.write(obj[k] + "<br>")
//             console.log(obj[k])
//         }
//     }
// }

const iterateMons = async () => {
    for (let i = 0; i <= pokAmount; i++) {
        fetchPokemon(i)
    }
}


const fetchPokemon = (id) => {
    const pokJSON = `https://raw.githubusercontent.com/TG-WD6/wd-6-repo-Drebinius/b6d620546c44ed59651c4211ca21197e57cbf095/02_Programming/Javascript/eindopdracht_JS/Dex/rsrcs/js/pokedex.json`;
    fetch(pokJSON)
        .then((res) => {
            return res.json();
        })
        .then((pokeArray) => {  //////nu bevat dec pokeArray een array met alle pokemon
            // console.log(pokeArray); 

            const pokemon = { };    ////maakt een object?
            pokemon['id'] = pokeArray[`${id}`].id
            pokemon['name'] = pokeArray[`${id}`].name.english;
            pokemon['type'] = pokeArray[`${id}`].type
            pokemon['stats'] = pokeArray[`${id}`].base
            // pokemon['sprite'] = (await import(`../sprites/${this.props.picPath}`));
                // console.log(pokemon)    //logged de poke overeenkomend ID# als object
            createPokeCard(pokemon)
        })
};
const createPokeCard =(pokemon) => {
    const cardElement = document.createElement('div')
    cardElement.classList.add('pokemon')
    const cardInnerHTML = `
    ${pokemon.name}
    `;
    cardElement.innerHTML = cardInnerHTML
    cardContainer.appendChild(cardElement)
}


 iterateMons()


