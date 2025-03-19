import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import SkeletonGenre from "./SkeletonGenre";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, error, isLoading } = useGenre();
  const skeletons = Array<number>(15).fill(0);

  if (error) return null;
  return (
    <VStack alignItems="left">
      <Text fontSize={"3xl"} marginBottom={5}>
        Genres
      </Text>
      {isLoading && skeletons.map((i, index) => <SkeletonGenre key={index} />)}
      {!isLoading &&
        data.map((genre) => (
          <HStack key={genre.id}>
            <Image
              src={genre.image_background}
              height="40px"
              width="40px"
              borderRadius={8}
            ></Image>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant={"link"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        ))}
    </VStack>
  );
}

export default GenreList;
