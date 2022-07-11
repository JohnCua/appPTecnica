
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Shared components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

// Material modules
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

//componentes
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { ContactVistaComponent } from './components/contacto/contact-vista/contact-vista.component';

//modulos 
import { ContactFormModule } from './components/contacto/contact-form/contact-form.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EstadisticaComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ContactVistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ContactFormModule.forRoot({
      URL: 'pruebaURL',
      _baseURL: '',
    }),
  ],
  //providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
