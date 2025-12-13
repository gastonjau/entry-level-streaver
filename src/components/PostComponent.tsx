import { Post } from "../types/types";

export const PostComponent = ({
  post,
}: {
  post: Post;
}) => {
  return (
    <div className="border p-3.5 gap-2.5 m-3 max-w-xl rounded-md shadow-md border-gray-300">
      <strong>UserId: {post.userId}</strong>
      <h2 className=" font-semibold">{post.title}</h2>
      <p className="font-sans">{post.body}</p>
    </div>
  );
};
