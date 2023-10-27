import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const PokemonCard = ({ pokemon }) => {
  const { name, imageUrl } = pokemon;

  const pokemonName = name[0].toUpperCase() + name.slice(1);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={pokemonName}
          height="150"
          image={imageUrl}
   
        />
        <Typography>{pokemonName}</Typography>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
