import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.sass']
})
export class UserAddFormComponent implements OnInit {

  error: boolean | undefined
  errorMessage: string | undefined
  userName = new FormControl('', [Validators.required])
  email = new FormControl('', [Validators.required, Validators.email])
  gender = new FormControl('', [Validators.required])

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
  }

  onClick(event: any) {
    event.preventDefault();

    if (!this.formValid()) {
      this.setError('Fill all required fields')
      return;
    }

    this.api.addUser(
      {
        email: this.email.value,
        gender: this.gender.value,
        name: this.userName.value,
        status: 'active'
      }
    ).subscribe(
      _ => this.error = false,
      error => this.setError(this.apiErrorMessage(error))
    )
  }

  private formValid(): boolean {
    return this.gender.valid && this.userName.valid && this.email.valid
  }

  private setError(message: string): void {
    this.errorMessage = message;
    this.error = true
  }

  private apiErrorMessage(error: any): string {
    return `${error.data[0].field} ${error.data[0].message}`;
  }
}
