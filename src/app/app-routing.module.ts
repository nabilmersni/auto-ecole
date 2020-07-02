import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { ListUsersComponent } from './components/private/gestion user/list-users/list-users.component';
import { ListMeetingUserComponent } from './components/private/list-meeting-user/list-meeting-user.component';
import { ListMeetingMoniteurComponent } from './components/private/list-meeting-moniteur/list-meeting-moniteur.component';
import { ListVehiculeComponent } from './components/private/gestion_car/list-vehicule/list-vehicule.component';
import { ListMoniteursComponent } from './components/private/gestion_monitor/list-moniteurs/list-moniteurs.component';
import { AddUserComponent } from './components/private/gestion user/add-user/add-user.component';
import { UpdateUserComponent } from './components/private/gestion user/update-user/update-user.component';
import { AddCarComponent } from './components/private/gestion_car/add-car/add-car.component';
import { UpdateCarComponent } from './components/private/gestion_car/update-car/update-car.component';
import { AddMonitorComponent } from './components/private/gestion_monitor/add-monitor/add-monitor.component';
import { UpdateMonitorComponent } from './components/private/gestion_monitor/update-monitor/update-monitor.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "regiter",
    component: RegisterComponent
  },

  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "meet-user",
    component: ListMeetingUserComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "meet-moniteur",
    component: ListMeetingMoniteurComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "users",
    component: ListUsersComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "cars",
    component: ListVehiculeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "monitors",
    component: ListMoniteursComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "add_user",
    component: AddUserComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "update_user/:id",
    component: UpdateUserComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "add_car",
    component: AddCarComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "update_car/:id",
    component: UpdateCarComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "add_monitor",
    component: AddMonitorComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "update_monitor/:id",
    component: UpdateMonitorComponent,
    canActivate : [AuthGuard]
  },



  {
    path: "test",
    component: TestComponent
  },

  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
