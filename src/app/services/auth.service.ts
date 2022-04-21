import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SUB_ROUTING } from '../sub/sub.routing';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  login(identifiants) {
    return this.http.post(`${this.link}/login`, identifiants); // Template SUB_ROUTING
  }

  logout() {
    localStorage.removeItem('my_token');
  }

  estConnecte() {
    let token = localStorage.getItem('my_token');
    return !!token;
  }
}
