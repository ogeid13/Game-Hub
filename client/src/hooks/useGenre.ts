import useData from "./useData";

interface Genre{
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

const useGenre = () => useData<Genre>("/getGenres");

export default useGenre;
export type { Genre };