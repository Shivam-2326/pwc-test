import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJhZG1pbiI6dHJ1ZX0.F-cvL2RcfQhUtCavIM7q7zYE8drmj2LJk0JRkrS6He4';

  constructor(private router: Router) {}

  getToken() {
    return this.token;
  }

  login(credentials: any): boolean {
    if (
      true ||
      (credentials.username == 'shivam.kumar@gmail.com' &&
        credentials.password == 'Shivam@123')
    ) {
      localStorage.setItem('token', this.token);
      console.log(this.getDecodedAccessToken(this.token));
      return true;
    }
    return true;
  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
  }

  private getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  getUserDetails() {
    return this.getDecodedAccessToken(this.token);
  }

  isTokenValid(token: string | null) {
    return token === this.token;
  }
}
