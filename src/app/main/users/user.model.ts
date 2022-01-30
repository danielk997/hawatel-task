import {Pagination} from "../api-response.model";

export interface User {
  id: number
  name: string
  email: string
}

export interface UserData {
  users: User[],
  pagination: Pagination
}
