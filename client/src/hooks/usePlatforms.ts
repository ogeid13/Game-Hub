import useData from "./useData";

interface ParentPlatform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<ParentPlatform>("/getParentPlatforms");

export default usePlatforms;
export type { ParentPlatform };