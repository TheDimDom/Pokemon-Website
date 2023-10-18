import axios from 'axios';

const API_BASE_URL = "https://pokeapi.co/api/v2/";

export const getAllPokemon =() => {
    return axios.get(API_BASE_URL + "pokemon");
}