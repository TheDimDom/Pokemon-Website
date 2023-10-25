import { getAllPokemon } from "../api/api.js";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import PokemonCard from "./PokemonCard.jsx";

export default function AllPokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getAllPokemon()
      .then((response) => {
        const data = response.data.results;
        const pokemonWithImages = data.map((pokemon, index) => {
          const id = index + 1; 
          return {
            ...pokemon,
            id,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
        });
        setPokemon(pokemonWithImages);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon", error);
      });
  }, []);

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {pokemon.map((poke) => (
        <Grid key={poke.id} item xs={12} sm={12} md={4}>
          <PokemonCard pokemon={poke} />
        </Grid>
      ))}
    </Grid>
  );
}
