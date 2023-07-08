import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNoaXZhbSBLdW1hciIsImlhdCI6MTUxNjIzOTAyMiwiYWRtaW4iOnRydWV9.8IQRcx-Vf1GazQ3yuonaDoUBbtrJESpHHbOjj7IHfVg';

  sessionTimeout: any;
  constructor(private router: Router) {
    this.refreshSession();
  }

  getToken() {
    return this.token;
  }

  login(credentials: any): boolean {
    if (
      true || // Bypass the authentication
      (credentials.username == 'shivam.kumar@gmail.com' &&
        credentials.password == 'Shivam@123')
    ) {
      localStorage.setItem('token', this.token);
      console.log(this.getDecodedAccessToken(this.token));
      let userData = JSON.stringify(this.getDecodedAccessToken(this.token));
      localStorage.setItem('userData', userData);

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

  refreshSession() {
    if (this.sessionTimeout) {
      clearTimeout(this.sessionTimeout);
    }
    this.sessionTimeout = setTimeout(() => {
      this.logout();
    }, 15 * 60 * 1000);
  }
}
