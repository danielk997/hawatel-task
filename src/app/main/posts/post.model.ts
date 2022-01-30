import {Pagination} from "../api-response.model";

export interface Post {
  id: number
  user_id: number
  title: string
  body: string
}

export interface PostData {
  posts: Post[],
  pagination: Pagination
}
