export const PostComponent = ({
  post,
}: {
  post: { userId: number; title: string; body: string };
}) => {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <strong>UserId: {post.userId}</strong>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
