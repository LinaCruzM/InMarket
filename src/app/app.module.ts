import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/loginComponent/login.component';
import { ResetComponent } from './components/resetComponent/reset.component';
import { SidebarComponent } from './components/sidebarComponent/sidebar.component';
import { SolicitudeComponent } from './components/solicitudesComponent/solicitude/solicitude.component';
import { NotificationsComponent } from './components/notificationsComponent/notifications/notifications.component';
import { AreasComponent } from './components/areasComponent/areas/areas.component';
import { RolesComponent } from './components/rolesComponent/roles/roles.component';
import { PersonsComponent } from './components/personsComponent/persons/persons.component';
import { TypesSolicitudeComponent } from './components/typesSolicitudeComponent/types-solicitude/types-solicitude.component';
import { SuppliersComponent } from './components/suppliersComponent/suppliers/suppliers.component';
import { CurrenciesComponent } from './components/currenciesComponent/currencies/currencies.component';
import { BodyComponent } from './components/bodyComponent/body/body.component';
import { ToolbarComponent } from './components/toolbarComponent/toolbar.component';

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
    ToolbarComponent
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
