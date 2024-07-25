import React from "react";
import PostService from "./API/PostService";
import { IPost } from "./types/types";
import PostList from "./components/Post/Post";
import Pagination from "./components/Pagination/Pagination";
import style from "./styles/Home.module.scss";
import Link from "next/link";
import AuthPage from "./AuthPage/AuthPage";

const limit = 10;

const getPosts = async (page: number) => {
  const posts = await PostService.getAll(limit, page);

  const totalPosts = 100;
  const totalPages = Math.ceil(totalPosts / limit);

  return {
    posts,
    totalPages,
  };
};

const Home = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const page = parseInt(searchParams.page || "1", 10);
  const { posts, totalPages } = await getPosts(page);
  

  return (
    <div className={style.container}>
      <AuthPage/>
      {posts ? (
        <>
          <ul>
            {posts.map((post: IPost) => (
              <li key={post.id}>
                <Link href={`/postpage/${post.id}`} passHref>
                    <PostList post={post} />
                </Link>
              </li>
            ))}
          </ul>
          <Pagination currentPage={page} totalPages={totalPages} />
        </>
      ) : (
        <span>пусто</span>
      )}
    </div>
  );
};

export default Home;
