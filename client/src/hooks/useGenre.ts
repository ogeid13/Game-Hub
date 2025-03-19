import { useEffect, useState } from "react";
import http from "../services/DataService";
import { CanceledError } from "axios";

interface Genre{
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

interface FetchGenresResult{
    count: number;
    results: Genre[];
}

const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        const controller = new AbortController();

        http.get<FetchGenresResult>("/getGenres", {signal: controller.signal}).then((res)=>{
            console.log("Genres", res);
            setGenres(res.data.results);
            setLoading(false);
        }).catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });

        return () => controller.abort();
    }, [])

    return {genres, error, isLoading}
}

export default useGenre;
export type { Genre };