import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PokemonCardLoading from "./PokemonCardLoading"; 

const PokemonCard = ({ pokemon, isLoading }) => {
  const { name, imageUrl } = pokemon;

  const pokemonName = name[0].toUpperCase() + name.slice(1);

  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardActionArea>
        {isLoading ? (
          <PokemonCardLoading /> 
        ) : (
          <>
            <CardMedia
              component="img"
              alt={pokemonName}
              height="128"
              image={imageUrl}
            />
            <Typography>{pokemonName}</Typography>
          </>
        )}
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
