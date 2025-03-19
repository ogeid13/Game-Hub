import useData from "./useData";
import { Genre } from "./useGenre";

interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    genres: Genre[]
}

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const useGames = (selectedGenre: Genre | null) => useData<Game>("/getGames", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;
export type { Game, Platform };