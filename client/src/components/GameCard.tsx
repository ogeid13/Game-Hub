import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card maxW="sm" borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt="Game Name" />
      <CardBody>
        <Heading fontSize="md">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
