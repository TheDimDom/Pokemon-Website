import axios from 'axios';

const API_BASE_URL = "https://pokeapi.co/api/v2/";


export const getAllPokemon = () => {
    return axios.get(`${API_BASE_URL}pokemon?limit=151`);
}


export const getPokemonById = (id) => {
    return axios.get(`${API_BASE_URL}pokemon/${id}`);
}

// export const getPokemonImage = (id) => {
//     return axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`);
// }

// export const getPokemonSpecies = (id) => {
//     return axios.get(API_BASE_URL + "pokemon-species/" + id);
// }

// export const getPokemonEvolution = (id) => {
//     return axios.get(API_BASE_URL + "evolution-chain/" + id);
// }

// export const getPokemonType = (id) => {
//     return axios.get(API_BASE_URL + "type/" + id);
// }

