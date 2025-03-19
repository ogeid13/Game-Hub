import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ImagePlacehoder from "../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp";

interface GameProps {
  title: string;
  desc?: string;
  imageSrc?: string;
  price: number;
}

function GameCard(game: GameProps) {
  let desc = game.hasOwnProperty("desc")
    ? game.desc
    : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
            est facere. Sit, iste voluptatem reiciendis vel alias nobis
            molestiae! Amet culpa ullam ex non, nam eaque? Sint reprehenderit
            earum eveniet!`;

  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={game.imageSrc} alt="Game Name" borderRadius="lg"></Image>
        <Stack>
          <Heading size="md">{game.title}</Heading>
          <Text>{desc}</Text>
          <Text fontSize="2xl">${game.price}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
