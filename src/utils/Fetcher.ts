import { Post } from "../types/types";

const fetcher = (url: string): Promise<Post[]> => fetch(url).then((res) => 
{
    if (!res.ok) throw new Error('Error en la petición');
    return res.json()
}
);
export { fetcher };