import { getAllPokemon } from "../api/api.js";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

export default function AllPokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getAllPokemon()
      .then((data) => {
        console.log(data.data.results);
        setPokemon(data.data.results);
      })
      .catch((error) => {
        console.error("Error fetching pokemon", error);
      });
  }, []);

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {pokemon.map((poke) => (
        <Grid key={poke.name} item xs={12} sm={12} md={4}>
          {poke.name}
        </Grid>
      ))}
    </Grid>
  );
}
