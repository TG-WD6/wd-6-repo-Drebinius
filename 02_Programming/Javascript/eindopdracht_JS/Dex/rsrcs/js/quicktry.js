
    const pokJSON = `https://raw.githubusercontent.com/TG-WD6/wd-6-repo-Drebinius/b6d620546c44ed59651c4211ca21197e57cbf095/02_Programming/Javascript/eindopdracht_JS/Dex/rsrcs/js/pokedex.json`;

    function printValues(obj) {
        for (let k in obj) {
            if (obj[k] instanceof Object) {
                printValues(obj[k])
            } else {
                // document.write(obj[k] + "<br>")
                console.log(obj[k])
            }
        }
    }
    
    const fetchPokemon = (id) => {
        fetch(pokJSON)
            .then((res) => {
                return res.json();
            })
            .then((pokeArray) => {  //////nu bevat dec pokeArray een array met alle pokemon
                console.log(pokeArray); 
                          const pokemon = { };    ////maak een object?
                    // const pokeId = pokemon.id
                    // const pokeName = pokemon.name.english
                    // const pokeTypes = pokemon.type[0]
                    // const pokeStats = pokemon.base
                    // console.log(pokeTypes)
                // console.log(pokeId,pokeName,pokeType,pokeStats)
                //  printValues(pokeTypes)

    //                    for (const pokemon of pokeArray){   
    
    //                 // console.log(pokemon.name.english)
    //                 // console.log(pokemon.id)
    //                 // console.log(pokemon.type)
    //                 // console.log(pokemon.base)              
                    // console.log(Object.values(pokemon)) //dit logged per pokemon een array, way to go?
    //             }
            })
    };
    fetchPokemon(0)
    
    
    
    