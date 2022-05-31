import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'}, //En caso de que el path (dirección) se encuentre vacía, redirija al login
  { path: 'login', component:LoginComponent},
  { path: 'registro', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
