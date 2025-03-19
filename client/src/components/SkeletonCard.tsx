import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function SkeletonCard() {
  return (
    <Card maxW="sm" borderRadius={10} overflow="hidden">
      <Skeleton height={260} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default SkeletonCard;
