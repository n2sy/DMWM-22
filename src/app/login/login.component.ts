import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultSection = 'dmwm';
  comment = 'Rien à dire...';
  constructor() {}

  ngOnInit(): void {}

  submitHandler(f) {
    console.log(f.value);
  }

  randomPwd(f: NgForm) {
    f.setValue({
      login: '',
      mdp: 'radnompassword123',
      section: '',
      commentaire: '',
    });
  }

  randomPwd2(f: NgForm) {
    f.form.patchValue({
      mdp: 'radnompassword123',
    });
  }

  ResetForm(f: NgForm) {
    f.reset();
  }
}
