export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
}

export type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
};

export interface StatusMessagesProps {
  error: any;
  isValidating: boolean;
  posts: any[];
  debouncedSearchTerm: string;
}

export interface InputComponentProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  id?: string;
}