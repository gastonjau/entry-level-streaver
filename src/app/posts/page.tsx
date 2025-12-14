"use client";
import { fetcher } from "@/src/utils/Fetcher";
import { PostsResponse } from "@/src/types/types";
import { SlowConnectionNotification } from "@/src/components/SlowConnectionNotification";
import { ChangeEvent, useEffect, useState } from "react";
import useSWR from "swr";
import { InputComponent } from "@/src/components/InputComponent";
import { PaginationComponent } from "@/src/components/PaginationComponent";
import { PostsFounds } from "@/src/components/PostsFounds";
import { Header } from "@/src/components/Header";
import { PostsList } from "@/src/components/PostsList";
import { StatusMessages } from "@/src/components/StatusMessages";
export default function PostsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const [isSlowConnection, setIsSlowConnection] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const { data, isValidating, error } = useSWR<PostsResponse>(
    debouncedSearchTerm
      ? `/api/posts?userId=${debouncedSearchTerm}&_page=${page}&_limit=10`
      : `/api/posts?_page=${page}&_limit=10`,
    fetcher,
    {
      loadingTimeout: 1000,
      onLoadingSlow: () => setIsSlowConnection(true),
      onSuccess: () => setIsSlowConnection(false),
      onError: () => setIsSlowConnection(false),
      revalidateOnFocus: false,
    }
  );

  const posts = data?.posts ?? [];
  const total = data?.total ?? 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setPage(1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="flex flex-col items-center">
      <Header />
      <InputComponent
        value={searchTerm}
        onChange={handleSearchTermChange}
        label="User ID:"
      />
      <StatusMessages
        error={error}
        isValidating={isValidating}
        posts={posts}
        debouncedSearchTerm={debouncedSearchTerm}
      />
      
      <SlowConnectionNotification isSlow={isSlowConnection} />
      <PostsList posts={posts} />
      <PaginationComponent page={page} setPage={setPage} total={total} />
      <PostsFounds total={total} />
    </div>
  );
}
