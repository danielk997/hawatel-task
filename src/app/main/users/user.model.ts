import {Pagination} from "../pagination";

export interface User {
  id: number
  name: string
  email: string
}

export interface UserData {
  users: User[],
  pagination: Pagination
}
