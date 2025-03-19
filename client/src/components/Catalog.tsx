import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import http from "axios";
import { getGames, Game, FetchGamesResponse } from "../DataService";
import { Box, Show, Stack, Text } from "@chakra-ui/react";

function Catalog() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getGames()
      .then((res) => {
        console.log(res);
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.name}
          price={30}
          imageSrc={game.background_image}
        />
      ))}
      {error.length > 0 && <Text color="tomato">{error}</Text>}
    </>
  );
}

export default Catalog;
