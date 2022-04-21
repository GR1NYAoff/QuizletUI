//import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { HttpClient } from '@angular/common/http';
import { AUTH_API_URL } from '../app-injection-tokens';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Token } from '../Models/token';

export const ACCESS_TOKEN_KEY = 'quizlet_access_token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    @Inject(AUTH_API_URL) private apiUrl: string,
    private jwtHelperService: JwtHelperService,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<Token> {
    return this.httpClient
      .post<Token>(`${this.apiUrl}api/Auth/login`, {
        email,
        password,
      })
      .pipe(
        tap(token => {
          localStorage.setItem(ACCESS_TOKEN_KEY, token.access_token);
        })
      );
  }

  isAuthenticated(): boolean {
    var token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return !this.jwtHelperService.isTokenExpired(token!);
  }

  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.router.navigate(['']);
  }
}
