import { Stack, Skeleton } from "@mui/material";

export default function PokemonCardLoading() {
  return (
    <Stack>
      <Skeleton variant="text" />
      <Skeleton variant="circular" />
      <Skeleton variant="text" />
    </Stack>
  );
}
