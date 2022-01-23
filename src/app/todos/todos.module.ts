import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {TodoItemsComponent} from './todo-items/todo-items.component';
import {PostsComponent} from './posts/posts.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    UsersComponent,
    TodoItemsComponent,
    PostsComponent,
    SinglePostComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule
  ]
})
export class TodosModule {
}
