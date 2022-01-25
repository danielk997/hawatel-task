import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./main/users/users.component";
import {TodoItemsComponent} from "./main/todo-items/todo-items.component";
import {PostsComponent} from "./main/posts/posts.component";
import {SinglePostComponent} from "./main/posts/single-post/single-post.component";
import {UserAddFormComponent} from "./main/users/user-add-form/user-add-form.component";
import {TodoAddFormComponent} from "./main/todo-items/todo-add-form/todo-add-form.component";

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
