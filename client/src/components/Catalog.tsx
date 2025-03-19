import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid, Text } from "@chakra-ui/react";
import SkeletonCard from "./SkeletonCard";
import { Genre } from "../hooks/useGenre";
import { ParentPlatform } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: ParentPlatform | null;
}

function Catalog({ selectedGenre, selectedPlatform }: Props) {
  const { data, error, isLoading } = useGames({
    selectedGenre,
    selectedPlatform,
  });
  const skeletons = Array<number>(15).fill(0);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding="10px"
      spacing={10}
    >
      {isLoading && skeletons.map((i, index) => <SkeletonCard key={index} />)}
      {!isLoading && data.map((game) => <GameCard key={game.id} game={game} />)}
      {error.length > 0 && <Text color="tomato">{error}</Text>}
    </SimpleGrid>
  );
}

export default Catalog;
