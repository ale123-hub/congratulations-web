import { Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { CartaComponent } from './components/carta/carta.component';

export const routes: Routes = [
  { path: '', component: BienvenidaComponent },   
  { path: 'carta', component: CartaComponent },   
  { path: '**', redirectTo: '' }                  
];