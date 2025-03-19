import http from "axios";
http.defaults.baseURL = "http://localhost:2000/api";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function getGames(){
  return http.get<FetchGamesResponse>("/getGames");
}


export { getGames };
export type { Game, FetchGamesResponse };


