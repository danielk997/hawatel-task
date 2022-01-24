import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {TodoItemsComponent} from './todo-items/todo-items.component';
import {PostsComponent} from './posts/posts.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import {RouterModule} from "@angular/router";
import { UserAddFormComponent } from './users/user-add-form/user-add-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    UsersComponent,
    TodoItemsComponent,
    PostsComponent,
    SinglePostComponent,
    UserAddFormComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class TodosModule {
}
