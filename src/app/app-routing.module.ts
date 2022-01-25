import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./todos/users/users.component";
import {TodoItemsComponent} from "./todos/todo-items/todo-items.component";
import {PostsComponent} from "./todos/posts/posts.component";
import {SinglePostComponent} from "./todos/posts/single-post/single-post.component";
import {UserAddFormComponent} from "./todos/users/user-add-form/user-add-form.component";
import {TodoAddFormComponent} from "./todos/todo-items/todo-add-form/todo-add-form.component";

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'todos', component: TodoItemsComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:postId', component: SinglePostComponent},
  {path: 'add-user', component: UserAddFormComponent},
  {path: 'add-todo', component: TodoAddFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
