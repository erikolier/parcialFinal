import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {ConexionService} from './services/conexion.service';
import { ListaComponent } from './components/lista/lista.component';
import { ListaAddComponent } from './components/lista-add/lista-add.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { LoginComponent } from './login/login/login.component';
import { PrincipalUsuarioComponent } from './principal-usuario/principal-usuario.component';
import { CrearParcheComponent } from './crear-parche/crear-parche.component';
import { BuscarParcheComponent } from './buscar-parche/buscar-parche.component';
import { InfoParcheComponent } from './info-parche/info-parche.component';
import {Routes, RouterModule} from '@angular/router';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { AgregarCreditoComponent } from './agregar-credito/agregar-credito.component';
import { MisParchesComponent } from './mis-parches/mis-parches.component';
import { VerParcheComponent } from './ver-parche/ver-parche.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaAddComponent,
    PrincipalComponent,
    LoginComponent,
    PrincipalUsuarioComponent,
    CrearParcheComponent,
    BuscarParcheComponent,
    InfoParcheComponent,
    CrearCuentaComponent,
    AgregarCreditoComponent,
    MisParchesComponent,
    VerParcheComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    RouterModule.forRoot([
      {path:'',component: PrincipalComponent},
      {path:'login',component: LoginComponent},
      {path:'principalU/:id',component: PrincipalUsuarioComponent},
      {path:'buscar/:id',component:BuscarParcheComponent},
      {path:'crear/:id',component:CrearParcheComponent},
      {path:'info/:id',component: InfoParcheComponent},
      {path:'crearU',component:CrearCuentaComponent},
      {path:'saldo/:id',component:AgregarCreditoComponent},
      {path:'misParches/:id',component:MisParchesComponent},
      {path:'verParches/:id',component:VerParcheComponent},
      {path:'**',redirectTo:''}
    ])
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
