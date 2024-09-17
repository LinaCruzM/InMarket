import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/loginComponent/login.component';
import { ResetComponent } from './components/resetComponent/reset.component';
import { SidebarComponent } from './components/sidebarComponent/sidebar.component';
import { SolicitudeComponent } from './components/solicitudesComponent/solicitude/solicitude.component';
import { NotificationsComponent } from './components/notificationsComponent/notifications/notifications.component';
import { AreasComponent } from './components/areasComponent/areas/areas.component';
import { PersonsComponent } from './components/personsComponent/persons/persons.component';
import { RolesComponent } from './components/rolesComponent/roles/roles.component';
import { TypesSolicitudeComponent } from './components/typesSolicitudeComponent/types-solicitude/types-solicitude.component';
import { CurrenciesComponent } from './components/currenciesComponent/currencies/currencies.component';
import { SuppliersComponent } from './components/suppliersComponent/suppliers/suppliers.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', 
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
