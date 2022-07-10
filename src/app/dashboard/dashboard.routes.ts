import { Routes } from '@angular/router';
import { EstadisticaComponent } from '../components/estadistica/estadistica.component';
import { ContactVistaComponent } from './../components/contacto/contact-vista/contact-vista.component';





export const dashboardRoutes: Routes = [

 { path: '', component: EstadisticaComponent },
 { path: 'ingreso-egreso', component: ContactVistaComponent }

];
