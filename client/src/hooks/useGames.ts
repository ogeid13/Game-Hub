import { useEffect, useState } from "react";
import http from "../DataService";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();

        http.get<FetchGamesResponse>("/getGames", {signal: controller.signal})
            .then((res) => {
                console.log(res);
                setGames(res.data.results);
            })
            .catch((err) => {
                if(err instanceof CanceledError) return;
                setError(err.message)
            });

        return () => controller.abort();
    }, []);

    return {games, error}
}

export default useGames;
export type { Game };