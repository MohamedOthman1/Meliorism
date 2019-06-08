import { MenuComponent } from './menu/menu.component';
import { FoodComponent } from './menu/food/food.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { OrderComponent } from './order/order.component';
import { AddOrderComponent } from './order/add-order/add-order.component';
import { LoginComponent } from './home/login/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: '', component: SidebarComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'index', component: DashboardComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'food', component: FoodComponent },
      { path: 'order/ordersList', component: OrderComponent },
      { path: 'employee/addEmployee', component: AddEmployeeComponent },
      { path: 'order/addOrder', component: AddOrderComponent },
      { path: 'employee/employeeList', component: EmployeeComponent },
    ],
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];
