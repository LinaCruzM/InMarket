import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/loginComponent/login.component';
import { ResetComponent } from './components/resetModule/reset.component';
import { SidebarComponent } from './components/sidebarComponent/sidebar.component';
import { SolicitudeComponent } from './components/solicitudesComponent/solicitude/solicitude.component';
import { NotificationsComponent } from './components/notificationsComponent/notifications/notifications.component';
import { AreasComponent } from './components/areasComponent/areaModule/areas.component';
import { RolesComponent } from './components/rolesComponent/rolesModule/roles.component';
import { PersonsComponent } from './components/personsComponent/personsModule/persons.component';
import { TypesSolicitudeComponent } from './components/typesSolicitudeComponent/types-solicitude/types-solicitude.component';
import { SuppliersComponent } from './components/suppliersComponent/suppliers/suppliers.component';
import { CurrenciesComponent } from './components/currenciesComponent/currenciesModule/currencies.component';
import { BodyComponent } from './components/bodyComponent/body/body.component';
import { ToolbarComponent } from './components/toolbarComponent/toolbar.component';
import { ModalCodeComponent } from './components/resetModal/modal-code.component';
import { PasswordComponent } from './components/passwordComponent/password.component';
import { AreaModalComponent } from './components/areasComponent/areaModal/area-modal.component';
import { AreaDeleteModalComponent } from './components/areasComponent/areaDeleteModal/area-delete-modal.component';
import { CurrenciesModalComponent } from './components/currenciesComponent/currenciesModal/currencies-modal.component';
import { CurrenciesDeleteModalComponent } from './components/currenciesComponent/currenciesDeleteModal/currencies-delete-modal.component';
import { PersonsModalComponent } from './components/personsComponent/personsModal/persons-modal.component';
import { PersonsDeleteModalComponent } from './components/personsComponent/personsDeleteModal/persons-delete-modal.component';
import { RolesModalComponent } from './components/rolesComponent/rolesModal/roles-modal.component';
import { RolesDeleteModalComponent } from './components/rolesComponent/rolesDeleteModal/roles-delete-modal.component';
import { SolicitudesModalComponent } from './components/solicitudesComponent/solicitudesModal/solicitudes-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetComponent,
    SidebarComponent,
    SolicitudeComponent,
    NotificationsComponent,
    AreasComponent,
    RolesComponent,
    PersonsComponent,
    TypesSolicitudeComponent,
    SuppliersComponent,
    CurrenciesComponent,
    BodyComponent,
    ToolbarComponent,
    ModalCodeComponent,
    PasswordComponent,
    AreaModalComponent,
    AreaDeleteModalComponent,
    CurrenciesModalComponent,
    CurrenciesDeleteModalComponent,
    PersonsModalComponent,
    PersonsDeleteModalComponent,
    RolesModalComponent,
    RolesDeleteModalComponent,
    SolicitudesModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
