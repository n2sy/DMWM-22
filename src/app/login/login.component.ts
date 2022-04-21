import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultSection = 'dmwm';
  comment = 'Rien à dire...';
  constructor(private authSer: AuthService, private router: Router) {}

  ngOnInit(): void {}

  submitHandler(f) {
    this.authSer.login(f.value).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('my_token', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log('Erreur avec Login');
      },
    });
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
