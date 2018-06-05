import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalComponent } from './principal/principal/principal.component';
import { LoginComponent } from './login/login/login.component';
import { PrincipalUsuarioComponent } from './principal-usuario/principal-usuario.component';
import { BuscarParcheComponent } from './buscar-parche/buscar-parche.component';
import { CrearParcheComponent } from './crear-parche/crear-parche.component';
import { InfoParcheComponent } from './info-parche/info-parche.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component: PrincipalComponent},
      {path:'login',component: LoginComponent},
      {path:'principal/:nick',component: PrincipalUsuarioComponent},
      {path:'buscar/:nick',component:BuscarParcheComponent},
      {path:'crear/:nick',component:CrearParcheComponent},
      {path:'info/:nick',component: InfoParcheComponent},
      {path:'**',redirectTo:'login'}
    ])
  ],
  declarations: [],
  exports:[RouterModule],
  providers:[]
})
export class AppRoutingModule { }
