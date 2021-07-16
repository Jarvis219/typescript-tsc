"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const makePoke = (id, name, image, type) => {
    const pokemon = {
        id, name, image, type
    };
    return pokemon;
};
const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
const renderListPokemon = (listPokemon) => {
    let arrpoke = [];
    listPokemon.forEach((value, key) => __awaiter(void 0, void 0, void 0, function* () {
        const reponse = yield fetch(value.url);
        const info = yield reponse.json();
        // console.log(info);
        const pok = makePoke(info.id, value.name, info.sprites.back_default, info.types[0].type.name);
        // console.log(pok);
        arrpoke.push(pok);
    }));
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
        `;
        }).join("");
        document.querySelector('#poke').innerHTML = result;
    }, 1000);
};
const fetchListPokemon = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    const reponse = yield fetch(url);
    const data = yield reponse.json();
    // console.log(data.results);
    callback(data.results);
});
fetchListPokemon(renderListPokemon);
// const results = async (list: []) => {
//     console.log(list);
// }
