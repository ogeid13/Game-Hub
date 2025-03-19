import { Tag } from "@chakra-ui/react";

interface Props {
  score: number;
}

function ScoreTag({ score }: Props) {
  let color = "";

  if (score === 100) color = "cyan";
  else if (score >= 90) color = "green";
  else if (score >= 80) color = "yellow";
  else if (score >= 70) color = "orange";
  else color = "red";

  if (score === null) return null;
  return <Tag colorScheme={color}>{score}</Tag>;
}

export default ScoreTag;
