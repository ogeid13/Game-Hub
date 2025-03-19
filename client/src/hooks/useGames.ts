import { useEffect, useState } from "react";
import http from "../services/DataService";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();

        http.get<FetchGamesResponse>("/getGames", {signal: controller.signal})
            .then((res) => {
                console.log(res);
                setGames(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return {games, error, isLoading}
}

export default useGames;
export type { Game, Platform };