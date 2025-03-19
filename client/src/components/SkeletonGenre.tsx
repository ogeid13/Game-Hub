import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

function SkeletonGenre() {
  return (
    <HStack>
      <Skeleton height="40px" width="40px" borderRadius={8}></Skeleton>
      <SkeletonText
        noOfLines={1}
        skeletonHeight="2"
        height="10px"
        width="65%"
      ></SkeletonText>
    </HStack>
  );
}

export default SkeletonGenre;
