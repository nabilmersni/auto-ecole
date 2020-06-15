import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';



const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },

  {
    path : "login",
    component : LoginComponent
  },

  {
    path : "regiter",
    component : RegisterComponent
  },

  {
    path : "test",
    component: TestComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }