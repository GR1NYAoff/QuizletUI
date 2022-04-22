import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { TestComponent } from './components/test/test.component';
import { TestsListComponent } from './components/tests-list/tests-list.component';
import { HomeComponent } from './components/home/home.component'
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'test/:testId', component: TestComponent, canActivate: [AuthGuard]},
  {path: 'tests', component: TestsListComponent, canActivate: [AuthGuard]},
  {path: 'question', component: QuestionComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }