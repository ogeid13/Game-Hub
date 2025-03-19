import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { Show, SimpleGrid, Text } from "@chakra-ui/react";

function Catalog() {
  const { games, error } = useGames();

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding="10px"
      spacing={10}
    >
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      {error.length > 0 && <Text color="tomato">{error}</Text>}
    </SimpleGrid>
  );
}

export default Catalog;
