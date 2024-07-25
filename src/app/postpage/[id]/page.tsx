"use client";
import PostService from "@/app/API/PostService";
import { IComment, IPost } from "@/app/types/types";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import style from "./PostPage.module.scss";
import Link from "next/link";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPost>();
  const [comment, setComment] = useState<IComment>();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await PostService.getPostById(Number(id));
        const responseComment = await PostService.getCommentById(Number(id));
        setComment(responseComment);
        setPost(response);
      } catch (e) {
        console.error(e);
      }
    };

    if (id) {
      fetchPost();
    }
  }, []);

  return (
    <div className={style.container}>
       <Link href ='/'> <button className={style.button}>Вернуться обратно</button></Link>
      {post ? (
        <div className={style.post}>
          <span>Пост</span>
          <h1>
            {post.id} {post.title}
          </h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Загрузка поста...</p>
      )}
      {comment ? (
        <div className={style.comments}>
            <span>Комментарии</span>
          <h1>{comment.body}</h1>
        </div>
      ) : (
        <p>Загрузка комментариев...</p>
      )}
    </div>
  );
};

export default PostPage;
