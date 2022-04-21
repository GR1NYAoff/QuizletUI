import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestsListComponent } from './components/tests-list/tests-list.component';
//add TestComponent

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'test', component: TestsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
