import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/loginComponent/login.component';
import { ResetComponent } from './components/AuthComponent/resetModule/reset.component';
import { SidebarComponent } from './components/sidebarComponent/sidebar.component';
import { SolicitudeComponent } from './components/solicitudesComponent/solicitudesModule/solicitude.component';
import { NotificationsComponent } from './components/notificationsComponent/notificationsModule/notifications.component';
import { AreasComponent } from './components/areasComponent/areaModule/areas.component';
import { RolesComponent } from './components/rolesComponent/rolesModule/roles.component';
import { PersonsComponent } from './components/personsComponent/personsModule/persons.component';
import { TypesSolicitudeComponent } from './components/typesSolicitudeComponent/typesModule/types-solicitude.component';
import { SuppliersComponent } from './components/suppliersComponent/suppliersModule/suppliers.component';
import { CurrenciesComponent } from './components/currenciesComponent/currenciesModule/currencies.component';
import { BodyComponent } from './components/bodyComponent/body/body.component';
import { ToolbarComponent } from './components/toolbarComponent/toolbar.component';
import { ModalCodeComponent } from './components/AuthComponent/resetModal/modal-code.component';
import { AreaModalComponent } from './components/areasComponent/areaModal/area-modal.component';
import { AreaDeleteModalComponent } from './components/areasComponent/areaDeleteModal/area-delete-modal.component';
import { CurrenciesModalComponent } from './components/currenciesComponent/currenciesModal/currencies-modal.component';
import { CurrenciesDeleteModalComponent } from './components/currenciesComponent/currenciesDeleteModal/currencies-delete-modal.component';
import { PersonsModalComponent } from './components/personsComponent/personsModal/persons-modal.component';
import { PersonsDeleteModalComponent } from './components/personsComponent/personsDeleteModal/persons-delete-modal.component';
import { RolesModalComponent } from './components/rolesComponent/rolesModal/roles-modal.component';
import { RolesDeleteModalComponent } from './components/rolesComponent/rolesDeleteModal/roles-delete-modal.component';
import { SolicitudesModalComponent } from './components/solicitudesComponent/solicitudesModal/solicitudes-modal.component';
import { PasswordModuleComponent } from './components/AuthComponent/passwordModule/password-module.component';
import { ResetErrorModalComponent } from './components/AuthComponent/resetErrorModal/reset-error-modal.component';
import { SearchSolicitudeComponent } from './components/solicitudesComponent/searchSolicitude/search-solicitude.component';
import { SearchPersonsComponent } from './components/personsComponent/search-persons/search-persons.component';
import { SearchAreasComponent } from './components/areasComponent/searchAreas/search-areas.component';
import { SearchRolesComponent } from './components/rolesComponent/searchRoles/search-roles.component';
import { SearchTypesComponent } from './components/typesSolicitudeComponent/searchTypes/search-types.component';
import { SearchCurrenciesComponent } from './components/currenciesComponent/searchCurrencies/search-currencies.component';
import { SearchSuppliersComponent } from './components/suppliersComponent/searchSuppliers/search-suppliers.component';
import { SearchNotificationsComponent } from './components/notificationsComponent/searchNotifications/search-notifications.component';

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
    AreaModalComponent,
    AreaDeleteModalComponent,
    CurrenciesModalComponent,
    CurrenciesDeleteModalComponent,
    PersonsModalComponent,
    PersonsDeleteModalComponent,
    RolesModalComponent,
    RolesDeleteModalComponent,
    SolicitudesModalComponent,
    PasswordModuleComponent,
    ResetErrorModalComponent,
    SearchSolicitudeComponent,
    SearchPersonsComponent,
    SearchAreasComponent,
    SearchRolesComponent,
    SearchTypesComponent,
    SearchCurrenciesComponent,
    SearchSuppliersComponent,
    SearchNotificationsComponent,
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
