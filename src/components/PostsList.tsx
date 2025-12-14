import { Post } from "../types/types"
import { PostComponent } from "./PostComponent"

export const PostsList = ({posts}: {posts: Post[]}) => {
  return (
    <>
    {posts.map((post: Post) => (
            <PostComponent key={post.id} post={post} />
          ))}
    </>
  )
}
