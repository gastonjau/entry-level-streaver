export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
const fetcher = (url: string): Promise<Post[]> => fetch(url).then((res) => res.json());
export { fetcher };