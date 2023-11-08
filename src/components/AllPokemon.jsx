import { getAllPokemon } from "../api/api.js";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import PokemonCard from "./PokemonCard.jsx";
import PokemonCardLoading from "./PokemonCardLoading";
export default function AllPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Grid container spacing={4} sx={{ padding: 5 }}>
      {isLoading ? (
        <PokemonCardLoading />
      ) : (
        pokemon.map((poke) => (
          <Grid key={poke.id} item xs={12} sm={12} md={2}>
            <PokemonCard pokemon={poke} />
          </Grid>
        ))
      )}
    </Grid>
  );
}
