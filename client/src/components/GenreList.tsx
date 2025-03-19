import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import SkeletonGenre from "./SkeletonGenre";

function GenreList() {
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
        data.map((g) => (
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
