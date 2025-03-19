import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { Text } from "@chakra-ui/react";

function Catalog() {
  const { games, error } = useGames();

  return (
    <>
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.name}
          price={30}
          imageSrc={game.background_image}
        />
      ))}
      {error.length > 0 && <Text color="tomato">{error}</Text>}
    </>
  );
}

export default Catalog;
