import axios from 'axios';
import { IComment, IPost } from '../types/types';

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    try {
      const response = await axios.get<IPost[]>(
        `https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _limit: limit,
            _page: page
          }
        }
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async getPostById(id: number) {
    try {
      const response = await axios.get<IPost>(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
  static async getCommentById(id: number) {
    try {
      const response = await axios.get<IComment>(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
