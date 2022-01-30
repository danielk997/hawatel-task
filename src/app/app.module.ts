import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {TodosModule} from "./main/todos.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {StoreModule} from "@ngrx/store";
import {postsReducer} from "./state/posts/posts.reducer";
import {todoPaginationReducer, todosReducer} from "./state/todos/todos.reducer";
import {userPaginationReducer, usersReducer} from "./state/users/users.reducer";
import {EffectsModule} from "@ngrx/effects";
import {PostEffects} from "./state/posts/post.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    TodosModule,
    HttpClientModule,
    RouterModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({
      posts: postsReducer,
      todos: todosReducer,
      todosPagination: todoPaginationReducer,
      users: usersReducer,
      usersPagination: userPaginationReducer
    }),
    EffectsModule.forRoot([PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
