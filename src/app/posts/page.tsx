"use client";
import { fetcher, Post } from "@/src/utils/Fetcher";
import { PostComponent } from "@/src/components/PostComponent";
import { ChangeEvent, useEffect, useState } from "react";
import useSWR from "swr";


export default function PostsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  const { data: posts = [], isValidating, error } = useSWR<Post[]>(
    debouncedSearchTerm
      ? `https://jsonplaceholder.typicode.com/posts?userId=${debouncedSearchTerm}`
      : "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearchTerm(searchTerm), 2000);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Country Search</h1>
      <input
        type="number"
        onChange={handleSearchTermChange}
        style={{ border: "1px solid black" }}
      />
      {error && <p>Error loading posts</p>}
      {!error && isValidating && <p>Loading...</p>}
      {!error && !isValidating && posts.length === 0 && debouncedSearchTerm && (
        <p> No posts found with userId {debouncedSearchTerm}</p>
      )}
      {posts.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </div>
  );
};
