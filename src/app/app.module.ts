import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageUserComponent } from './page-user/page-user.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageRespoInfoComponent } from './page-respo-info/page-respo-info.component';
import { PageIntervenantComponent } from './page-intervenant/page-intervenant.component';
import {FormsModule} from '@angular/forms';
import {AuthentificationService} from '../services/authentification.service';
import {HttpClientModule} from '@angular/common/http';
import { NouveauDemandeComponent } from './nouveau-demande/nouveau-demande.component';
import { DemandeCoursComponent } from './demande-cours/demande-cours.component';
import { DemandeResoluComponent } from './demande-resolu/demande-resolu.component';
import { ConsulterHDemandeComponent } from './consulter-h-demande/consulter-h-demande.component';
import { TesterWebSocketComponent } from './tester-web-socket/tester-web-socket.component';
import { AdresseComponent } from './adresse/adresse.component';
import { AgenceComponent } from './agence/agence.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AddMaterielComponent } from './add-materiel/add-materiel.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageUserComponent,
    PageAdminComponent,
    PageRespoInfoComponent,
    PageIntervenantComponent,
    NouveauDemandeComponent,
    DemandeCoursComponent,
    DemandeResoluComponent,
    ConsulterHDemandeComponent,
    TesterWebSocketComponent,
    AdresseComponent,
    AgenceComponent,
    AddUserComponent,
    AddRoleComponent,
    AddCategorieComponent,
    AddMaterielComponent,
    GestionServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
