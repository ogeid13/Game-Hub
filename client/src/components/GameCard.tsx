import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card maxW="sm" borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt="Game Name" />
      <CardBody>
        <PlatformIcon
          platforms={game.parent_platforms.map((obj) => obj.platform)}
        />
        <Heading fontSize="md">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
