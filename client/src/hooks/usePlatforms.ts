import useData from "./useData";

interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platform>("/getParentPlatforms");

export default usePlatforms;
export type { Platform };