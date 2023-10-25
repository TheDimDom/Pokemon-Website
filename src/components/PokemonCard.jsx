import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const PokemonCard = ({ pokemon }) => {
  const { name, imageUrl } = pokemon;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="100"
          image={imageUrl}
        />
        <Typography>{name}</Typography>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
