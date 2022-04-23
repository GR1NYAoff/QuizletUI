import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }
  constructor(private as: AuthService) { }

  email: string;
  password: string;
  
  login(email: string, password: string) {
    this.as.login(email, password).subscribe(
      (res) => {},
      (error) => {
        alert('Wrang email or password');
      }
    );
  }

  logout() {
    this.as.logout();
  }
  
  ngOnInit(): void {
  }

}
