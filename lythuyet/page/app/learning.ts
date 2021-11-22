type Pokemon = {
    id: number, name: string, image: string, type: string
}

const makePoke = (id: number, name: string, image: string, type: string): Pokemon => {
    const pokemon = {
        id, name, image, type
    }
    return pokemon
}

const url = "https://pokeapi.co/api/v2/pokemon?limit=20"

const renderListPokemon = (listPokemon: []) => {
    let arrpoke: {
        id: number,
        name: string,
        image: string,
        type: string
    }[] = []
    listPokemon.forEach(async (value: { name: string, url: string }, key) => {
        const reponse = await fetch(value.url)
        const info = await reponse.json()

        // console.log(info);
        const pok = makePoke(info.id, value.name, info.sprites.back_default, info.types[0].type.name);
        // console.log(pok);
        arrpoke.push(pok);
    })

    // callback(results);
    setTimeout(() => {
        const randoms = arrpoke.sort((a, b) => 0.5 - Math.random());
        console.log(randoms);
        let result = arrpoke.map(element => {
            return `
        <div class="relative w-40 mx-auto my-4 h-32 shadow-2xl border border-blue-200 bg-gray-100">
        <img class="w-auto mx-auto my-4" src="${element.image}" alt="">
        <div class="absolute left-0 top-0">
           <span><strong>#$${element.id}</strong></span>
        </div>
    </div>
        `
        }).join("");
        document.querySelector('#poke')!.innerHTML = result
    }, 1000);

}

const fetchListPokemon = async (callback: Function) => {
    const reponse = await fetch(url);
    const data = await reponse.json()
    // console.log(data.results);
    callback(data.results)
}
fetchListPokemon(renderListPokemon)
// const results = async (list: []) => {
//     console.log(list);
// }
