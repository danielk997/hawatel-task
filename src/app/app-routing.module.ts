import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./todos/users/users.component";
import {TodoItemsComponent} from "./todos/todo-items/todo-items.component";
import {PostsComponent} from "./todos/posts/posts.component";
import {SinglePostComponent} from "./todos/posts/single-post/single-post.component";

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'todos', component: TodoItemsComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:postId', component: SinglePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
