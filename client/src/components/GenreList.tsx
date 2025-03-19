import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

function GenreList() {
  const { data, error, isLoading } = useGenre();

  return (
    <VStack alignItems="left">
      <Text fontSize={"3xl"} marginBottom={5}>
        Genres
      </Text>
      {data.map((g) => (
        <HStack key={g.id}>
          <Image
            src={g.image_background}
            height="40px"
            width="40px"
            borderRadius={10}
          ></Image>
          <Text>{g.name}</Text>
        </HStack>
      ))}
    </VStack>
  );
}

export default GenreList;
