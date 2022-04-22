import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private as: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (!this.as.isAuthenticated()) {
      this.router.navigate(['']);
    }
    return true;
  }
}
