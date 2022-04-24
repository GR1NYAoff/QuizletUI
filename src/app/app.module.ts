import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { JwtModule } from '@auth0/angular-jwt'

import { HomeComponent } from './components/home/home.component';
import { TestsListComponent } from './components/tests-list/tests-list.component';
import { TestComponent } from './components/test/test.component'
import { AUTH_API_URL } from './app-injection-tokens';
import { environment } from 'src/environments/environment';
import { ACCESS_TOKEN_KEY } from './services/auth.service';
import { QuestionComponent } from './components/question/question.component';
import { HeaderComponent } from './components/header/header.component';

export function tokenGetter() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestsListComponent,
    TestComponent,
    QuestionComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        disallowedRoutes: environment.tokenDisallowedRoutes,
        allowedDomains: environment.tokenAllowedDomains
      }
    })
  ],
  providers: [{
    provide: AUTH_API_URL,
    useValue: environment.authApi
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
