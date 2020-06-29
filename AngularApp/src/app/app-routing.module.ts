import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component'
import { EmployeeListComponent } from './employees/employee-list/employee-list.component'
import { AuthGuard } from './auth/auth.guard';
import { DetailEmployeeComponent } from './employees/detail-employee/detail-employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'employee', component: EmployeeListComponent, canActivate:[AuthGuard] },
  { path: 'employee/detail', component: DetailEmployeeComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
