import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Models/account';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }
  constructor(private as: AuthService) {}

  email: string;
  password: string;

  regUser: Account = new Account();

  isRegister: boolean = false;

  login(email: string, password: string) {
    this.as.login(email, password).subscribe(
      (res) => {},
      (error) => {
        alert('Wrang email or password');
      }
    );
  }

  getRegisterForm() {
    this.isRegister = true;
  }
  cancelRegistration() {
    this.isRegister = false;
  }

  register(newAccount: Account): any {
    this.as.register(newAccount).subscribe(
      (res: any) => {
        this.isRegister = false;
        alert('Account successfully registered');
      },
      (error: any) => {
        alert('Wrang login, email or password');
      }
    );
  }

  logout() {
    this.as.logout();
  }

  ngOnInit(): void {}
}
