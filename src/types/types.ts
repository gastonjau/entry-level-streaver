export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}


export type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  posts : Post[];
};