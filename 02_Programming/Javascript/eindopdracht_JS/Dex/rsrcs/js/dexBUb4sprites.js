// async function fetchSprites(id) {
//   let spriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
//   const spriteReq = new Request(spriteURL)
//   const spriteResponse = await fetch(spriteReq)
//   const spriteVar = await spriteResponse.blob()
// }


async function fetchPokemon(id) {
            const requestURL=`https://raw.githubusercontent.com/TG-WD6/wd-6-repo-Drebinius/b6d620546c44ed59651c4211ca21197e57cbf095/02_Programming/Javascript/eindopdracht_JS/Dex/rsrcs/js/pokedex.json`;
            let spriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

            const request = new Request(requestURL)
            const spriteReq = new Request(spriteURL)

            const response = await fetch(request)
            const spriteResponse = await fetch(spriteReq)

            const pokeArray = await response.json()
            const spriteVar = await spriteResponse.blob()
            // let pokeArray = await pokeJSON.json()
            // let blob = await spriteResponse.blob()

 

// genButton.addEventListener('click', createPokeCard(pokeArray))
genButton.addEventListener('click', (e) => {
                e.preventDefault();
                wipePage(); //call to wipepage, otherwise genresults stack on page
                createPokeCard(pokeArray, spriteVar);});

clearButton.addEventListener('click', wipePage)
}





const cardContainer = document.getElementById('card__container')
const genButton = document.querySelector(`[data-button-gen]`)
const clearButton= document.querySelector('[data-button-clear]')
const genSelect = document.querySelector('#dropdown__gen')


function createPokeCard(pokeArray, spriteVar) { //verander mij in createPokeCard, voeg ons samen!
    const spriteNeedID = spriteVar 
    const genFilteredArray = pokeArray.filter((pokemon) => {
          if(+genSelect.value == 1)    {
            return pokemon.id <= 151                                   //gen1

          } else if (+genSelect.value === 2) {
            return pokemon.id >= 152 && pokemon.id <= 251//gen2

          } else if (+genSelect.value === 3) {
            return pokemon.id >= 252 && pokemon.id <= 386//gen3

          } else if (+genSelect.value === 4) {
            return pokemon.id >= 387 && pokemon.id <= 493//gen4

          } else if (+genSelect.value === 5) {
            return pokemon.id >= 494 && pokemon.id <= 649//gen5

          } else if (+genSelect.value === 6) {
            return pokemon.id >= 650 && pokemon.id <= 721//gen6

          } else if (+genSelect.value === 7) {
            return pokemon.id >= 722 && pokemon.id <= 809//gen7
          } else return
        })  
        
            for (const sprite of spriteNeedID) {

            }

  
            for (const pokemon of genFilteredArray) {
                const pokeID = pokemon.id;       
                const pokeName = pokemon.name.english;
               const pokeType = pokemon.type;
                // pokemon['type2'] = pokemon.type[1]                   plaats ons tussen filter en innerhtml!
                // console.log(pokemon.type, pokemon.type2)              
                // pokemon['sprite'] = URL.createObjectURL(blob)
                const pokeStats = pokemon.base;

                   console.log(pokemon)
    //debugger      

    const cardContainer = document.getElementById('card__container')
    const cardElement = document.createElement('div')
    cardElement.classList.add('pokemon')

    const cardInnerHTML = `
   <div class='container__top'>
            <span class='pokemon__id'>ID#${pokeID}</span><br>
            <img id='pokemon__image' src="" alt="sprite${pokeName}">
    </div>
    <div class='container__bottom'>
            <h3 class='pokemon__name'>${pokeName}</h3><br>
            <small class='type'>Type: <span style=font-weight:700>${pokeType}</span></small>

    </div>
    `;
    //  <span class='pokemon__stats'>${pokemon.stats}</span> //temp removal from @54${obj.sprite}
    cardElement.innerHTML = cardInnerHTML
    cardContainer.appendChild(cardElement) 
}}
 wipePage = () => {
    document.getElementById('card__container').innerHTML = ''
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
//             let entries = Object.entries(pokeArray[`${id}`].id)/// 
//             // console.log(entries)

//             let sorted = entries.sort((a, b) => a[1] - b[1])
//             // pokemon['stats'] = JSON.parse(pokeArray[`${id}`].base) parse/map dinnae work---try again as with ID
//             pokemon['idSrtd'] = sorted
            
//                 createPokeCard(pokemon)
            

//  iterateMons = ( ) => {   
//     for (let i = 0; i <= pokAmount; i++) {
//         // debugger
// }}