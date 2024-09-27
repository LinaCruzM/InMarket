import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/loginComponent/login.component';
import { ResetComponent } from './components/AuthComponent/resetModule/reset.component';
import { SidebarComponent } from './components/sidebarComponent/sidebar.component';
import { SolicitudeComponent } from './components/solicitudesComponent/solicitudesModule/solicitude.component';
import { NotificationsComponent } from './components/notificationsComponent/notificationsModule/notifications.component';
import { AreasComponent } from './components/areasComponent/areaModule/areas.component';
import { PersonsComponent } from './components/personsComponent/personsModule/persons.component';
import { RolesComponent } from './components/rolesComponent/rolesModule/roles.component';
import { TypesSolicitudeComponent } from './components/typesSolicitudeComponent/typesModule/types-solicitude.component';
import { CurrenciesComponent } from './components/currenciesComponent/currenciesModule/currencies.component';
import { SuppliersComponent } from './components/suppliersComponent/suppliersModule/suppliers.component';
import { PasswordModuleComponent } from './components/AuthComponent/passwordModule/password-module.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  {
    path: '#',
    component: LoginComponent
  },
  {
    path: 'resetPassword',
    component: ResetComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },
  {
    path: 'persons',
    component: PersonsComponent
  },
  {
    path: 'solicitudes',
    component: SolicitudeComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'areas',
    component: AreasComponent
  },
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'types/solicitudes',
    component: TypesSolicitudeComponent
  },
  {
    path: 'currencies',
    component: CurrenciesComponent
  },
  {
    path: 'suppliers',
    component: SuppliersComponent
  },
  {
    path: 'reset', 
    component: ResetComponent
  },
  {
    path: 'reset/password', 
    component: PasswordModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
