import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { TestComponent } from './components/test/test.component';
import { TestsListComponent } from './components/tests-list/tests-list.component';
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'tests', component: TestsListComponent},
  {path: 'question', component: QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }