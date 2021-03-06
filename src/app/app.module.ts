import { AuthGuard } from './_guards/auth.guard';
import { GridComponent } from './tools/grid/grid.component';
import { BreadcrumbService } from './_services/breadcrumb.service';
import { MenuComponent } from './menu/menu.component';
import { BreadcrumbComponent } from './tools/breadcrumb/breadcrumb.component';
import { FoodComponent } from './menu/food/food.component';
import { JwtModule } from '@auth0/angular-jwt';
import { KendoPDFComponent } from './tools/kendoPDF/kendoPDF.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RegisterComponent } from './home/register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { OrderComponent } from './order/order.component';
import { AddOrderComponent } from './order/add-order/add-order.component';
import {
  GridModule,
  PDFModule,
  ExcelModule
} from '@progress/kendo-angular-grid';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { GridService } from './_services/grid.service';
import { ToastrModule } from 'ng6-toastr-notifications';
import { ToastrService } from './_services/toastr.service';
import { LoginComponent } from './home/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './_services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RegisterComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    HomeComponent,
    OrderComponent,
    AddOrderComponent,
    KendoPDFComponent,
    FoodComponent,
    BreadcrumbComponent,
    MenuComponent,
    GridComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    HttpClientModule,
    PDFModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    GridModule,
    PDFExportModule,
    ExcelModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  providers: [BreadcrumbService, GridService, ToastrService, AuthService, AuthGuard, ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
