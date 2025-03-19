import useData from "./useData";
import { Genre } from "./useGenre";
import { ParentPlatform } from "./usePlatforms";

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

interface Props{
    selectedGenre: Genre | null;
    selectedPlatform: ParentPlatform | null;
}

const useGames = ({selectedGenre, selectedPlatform}:Props) => useData<Game>("/getGames", {params: {genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;
export type { Game, Platform };