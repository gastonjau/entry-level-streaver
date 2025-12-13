"use client";
import { fetcher} from "@/src/utils/Fetcher";
import { Post } from "@/src/types/types";
import { PostComponent } from "@/src/components/PostComponent";
import { SlowConnectionNotification } from "@/src/components/SlowConnectionNotification";
import { ChangeEvent, useEffect, useState } from "react";
import useSWR from "swr";
import { InputComponent } from "@/src/components/InputComponent";
import Link from "next/link";
import Arrow from "@/public/arrow";

export default function PostsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const [isSlowConnection, setIsSlowConnection] = useState<boolean>(false);

  const { data: posts = [], isValidating, error } = useSWR<Post[]>(
    debouncedSearchTerm
      ? `https://jsonplaceholder.typicode.com/posts?userId=${debouncedSearchTerm}`
      : "https://jsonplaceholder.typicode.com/posts",
    fetcher,
    {
      loadingTimeout: 1000,
      onLoadingSlow: () => setIsSlowConnection(true),
      onSuccess: () => setIsSlowConnection(false),
      onError: () => setIsSlowConnection(false),
      revalidateOnFocus: false,
    }
  );

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearchTerm(searchTerm), 2000);
    return () => clearTimeout(timer);
  }, [searchTerm]);


  function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-xl flex justify-center mb-8 mt-6">
        <Link
          href="/"
          className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600 transition-colors"
        >
          <Arrow />
        </Link>
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
          Posts Search
        </h1>
      </div>
      <InputComponent
        value={searchTerm}
        onChange={handleSearchTermChange}
        label="User ID:"
      />
      {error && <p className="text-red-500 font-medium m-4">Error loading posts</p>}
      <SlowConnectionNotification isSlow={isSlowConnection} />
      {!error && isValidating && <p className="text-gray-600 font-medium m-4">Loading...</p>}
      {!error && !isValidating && posts.length === 0 && debouncedSearchTerm && (
        <p className="text-gray-500 font-medium m-4">No posts found with userId {debouncedSearchTerm}</p>
      )}
      {posts.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </div>
  );
};
