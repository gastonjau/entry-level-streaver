import { StatusMessagesProps } from "../types/types";

export const StatusMessages = ({
  error,
  isValidating,
  posts,
  debouncedSearchTerm,
}: StatusMessagesProps) => {
  return (
    <>
      {error && (
        <p className="text-error font-medium m-4">Error loading posts</p>
      )}
      {!error && isValidating && (
        <p className="text-loading font-medium m-4">Loading...</p>
      )}
      {!error && !isValidating && posts.length === 0 && debouncedSearchTerm && (
        <p className="text-loading font-medium m-4">
          No posts found with userId {debouncedSearchTerm}
        </p>
      )}
    </>
  );
};
