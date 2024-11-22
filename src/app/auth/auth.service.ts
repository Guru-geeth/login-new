import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {
  }


  signup(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/signup`, { email, password });
  }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  async saveToken(token: string) {
    await localStorage.setItem('access_token', token);

  }

  async getToken() {
    return await localStorage.getItem('access_token');
  }

  async logout() {
    await localStorage.removeItem("access_token");
    this.router.navigate(['/login']);
  }
}
