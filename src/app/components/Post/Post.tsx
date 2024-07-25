import { IPost } from '@/app/types/types';
import React, { FC } from 'react';
import style from './Post.module.scss'


interface Post {
    post: IPost
}



const PostList:FC<Post> = ({post}) => {
    return (
        <div className={style.container}>
            <span className={style.title}>{post.id} {post.title}</span>
            <span>{post.body}</span>
        </div>
    );
};

export default PostList;