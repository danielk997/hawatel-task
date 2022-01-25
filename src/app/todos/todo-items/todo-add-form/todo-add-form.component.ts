import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ApiService} from "../../api.service";
import {User} from "../../users/user.model";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-todo-add-form',
  templateUrl: './todo-add-form.component.html',
  styleUrls: ['./todo-add-form.component.sass']
})
export class TodoAddFormComponent implements OnInit {

  error: boolean | undefined
  errorMessage: string | undefined
  titleControl = new FormControl('', [Validators.required])
  userControl = new FormControl('', [Validators.required])
  filteredOptions: Observable<User[]> | undefined
  options: User[] = [];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.filteredOptions = this.userControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => {
        if (this.userControl.value.length > 2) {
          this.updateOptionsWithApiValues(this.userControl.value)

          return (name ? this._filter(name) : this.options.slice())
        } else return [];
      }),
    );
  }

  onClick(event: any) {
    event.preventDefault();

    if (!this.formValid()) {
      this.setError('Fill all required fields')
      return;
    }

    this.api.addTodo(
      {
        user: this.userControl.value.name,
        user_id: this.userControl.value.id,
        title: this.titleControl.value,
        status: 'pending'
      }
    ).subscribe(
      _ => this.error = false,
      error => this.setError(this.apiErrorMessage(error))
    )
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  private formValid(): boolean {
    return this.userControl.value.name && this.userControl.value.id && this.titleControl.valid
  }

  private setError(message: string): void {
    this.errorMessage = message;
    this.error = true
  }

  private apiErrorMessage(error: any): string {
    return `${error.data[0].field} ${error.data[0].message}`;
  }

  private updateOptionsWithApiValues(userName: string) {
    this.api.getUsersByName(1, userName)
      .subscribe(it => this.options = it.data as User[])
  }
}
