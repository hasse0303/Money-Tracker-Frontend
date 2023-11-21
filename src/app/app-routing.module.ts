import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {breadcrumb: 'Dashboard'}
  },
  {
    path: 'user-management',
    loadChildren: () => import('./modules/user-management/user-management.module').then(m => m.UserManagementModule),
    data: {breadcrumb: 'User Management'}
  },
  {
    path: 'employee',
    loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule),
    data: {breadcrumb: 'Employee'}
  },
  {
    path: 'lists',
    loadChildren: () => import('./modules/lists/lists.module').then(m => m.ListsModule),
    data: {breadcrumb: 'Lists'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
