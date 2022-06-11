import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  form: FormGroup

  constructor(
    private service: DataService,
    private fb: FormBuilder
    ) {
      this.form = this.fb.group({
        username: ['', Validators.compose([
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.required
        ])],
        password: ['', Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(24),
          Validators.required
        ])]
      })
     }

  ngOnInit(): void {
  }

  submit() {
    this.service.authenticate(this.form.value)
    .subscribe(
      (data: any) => {
      localStorage.setItem('petshop.token', data.token)
    },
      (error) => {
        console.log(error)
      })
  }

}
