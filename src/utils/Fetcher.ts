import { Post } from "../types/types";

const fetcher = (url: string): Promise<Post[]> => fetch(url).then((res) => res.json());
export { fetcher };