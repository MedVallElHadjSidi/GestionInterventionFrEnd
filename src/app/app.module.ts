import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageUserComponent } from './page-user/page-user.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageRespoInfoComponent } from './page-respo-info/page-respo-info.component';
import { PageIntervenantComponent } from './page-intervenant/page-intervenant.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthentificationService} from '../services/authentification.service';
import { ChartRespoService } from "../services/ChartRespo.service";
import { ServiceBMCIService } from "../services/ServiceBMCI.service";
import {AgenceService} from "../services/Agence.service";
import {RoleService}from "../services/Role.service";
import {MaterielService} from "../services/Materiel.service";
import {UtilisateursService} from "../services/Utilisateurs.service";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NouveauDemandeComponent } from './nouveau-demande/nouveau-demande.component';
import { DemandeCoursComponent } from './demande-cours/demande-cours.component';
import { ConsulterHDemandeComponent } from './consulter-h-demande/consulter-h-demande.component';
import { AdresseComponent } from './adresse/adresse.component';
import { AgenceComponent } from './agence/agence.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AddMaterielComponent } from './add-materiel/add-materiel.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';
import { RespoEspaceComponent } from './respo-espace/respo-espace.component';
import { TableauserviceEncoursComponent } from './tableauservice-encours/tableauservice-encours.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { DirecteurGeneraleComponent } from './directeur-generale/directeur-generale.component';
import { DemandeenattenteComponent } from './demandeenattente/demandeenattente.component';
import { DemanderejeterComponent } from './demanderejeter/demanderejeter.component';
import { EspaceuserCommentComponent } from './espaceuser-comment/espaceuser-comment.component';
import { DemandesResolusComponent } from './demandes-resolus/demandes-resolus.component';
import { DemandesNonResoluesComponent } from './demandes-non-resolues/demandes-non-resolues.component';
import { ConsulterHistoriquesUsersComponent } from './consulter-historiques-users/consulter-historiques-users.component';
import { DemandeInfoRejeterComponent } from './demande-info-rejeter/demande-info-rejeter.component';
import { ConsulterNouveauDemandeComponent } from './consulter-nouveau-demande/consulter-nouveau-demande.component';
import { EspaceinitialRespoComponent } from './espaceinitial-respo/espaceinitial-respo.component';
import { TableauBordRespoInfoComponent } from './tableau-bord-respo-info/tableau-bord-respo-info.component';
import { from } from 'rxjs';
import { InterventionsencoursComponent } from './interventionsencours/interventionsencours.component';
import { EspacerespoconsulterComponent } from './espacerespoconsulter/espacerespoconsulter.component';
import { InterventionsresolusComponent } from './interventionsresolus/interventionsresolus.component';
import { InterventionsnonresolusComponent } from './interventionsnonresolus/interventionsnonresolus.component';
import { ConsulterhistoriqueinterventionsComponent } from './consulterhistoriqueinterventions/consulterhistoriqueinterventions.component';
import { ConsulterhistoriquesrespoinfoComponent } from './consulterhistoriquesrespoinfo/consulterhistoriquesrespoinfo.component';
import { PageDirecteurGeneralComponent } from './page-directeur-general/page-directeur-general.component';
import { ListAgencesComponent } from './list-agences/list-agences.component';
import { EditAgenceComponent } from './edit-agence/edit-agence.component';
import { ListServicesComponent } from './list-services/list-services.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListRolesComponent } from './list-roles/list-roles.component';
import { ListeMaterielsComponent } from './liste-materiels/liste-materiels.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { EditMaterielComponent } from './edit-materiel/edit-materiel.component';
import {LoaderInterceptor}from "../Intrepreteur/LoaderInterceptor";
import { MyLoaderComponent } from './my-loader/my-loader.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { EditDemandeUserComponent } from './edit-demande-user/edit-demande-user.component';
import { EspacechatresolueComponent } from './espacechatresolue/espacechatresolue.component';
import { EspacenonresolueComponent } from './espacenonresolue/espacenonresolue.component';
import { MissioninterventionencoursComponent } from './missioninterventionencours/missioninterventionencours.component';
import { MissioninterventionnonresolueComponent } from './missioninterventionnonresolue/missioninterventionnonresolue.component';
import { MissioninterventionresolueComponent } from './missioninterventionresolue/missioninterventionresolue.component';
import { MissioninterventionhistoriqueComponent } from './missioninterventionhistorique/missioninterventionhistorique.component';
import { IntervenantconsulternewmissionComponent } from './intervenantconsulternewmission/intervenantconsulternewmission.component';
import { EspacemissionencoursComponent } from './espacemissionencours/espacemissionencours.component';
import { EspacemissinresoluComponent } from './espacemissinresolu/espacemissinresolu.component';
import { EspacemissionnonresolueComponent } from './espacemissionnonresolue/espacemissionnonresolue.component';
import { EspacemissionhistoriqueComponent } from './espacemissionhistorique/espacemissionhistorique.component';


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

    ConsulterHDemandeComponent,

    AdresseComponent,
    AgenceComponent,
    AddUserComponent,
    AddRoleComponent,
    AddCategorieComponent,
    AddMaterielComponent,
    GestionServiceComponent,
    RespoEspaceComponent,
    TableauserviceEncoursComponent,
    DirecteurGeneraleComponent,
    DemandeenattenteComponent,
    DemanderejeterComponent,
    EspaceuserCommentComponent,
    DemandesResolusComponent,
    DemandesNonResoluesComponent,
    ConsulterHistoriquesUsersComponent,
    DemandeInfoRejeterComponent,
    ConsulterNouveauDemandeComponent,
    EspaceinitialRespoComponent,
    TableauBordRespoInfoComponent,
    InterventionsencoursComponent,
    EspacerespoconsulterComponent,
    InterventionsresolusComponent,
    InterventionsnonresolusComponent,
    ConsulterhistoriqueinterventionsComponent,
    ConsulterhistoriquesrespoinfoComponent,
    PageDirecteurGeneralComponent,
    ListAgencesComponent,
    EditAgenceComponent,
    ListServicesComponent,
    EditServiceComponent,
    ListUsersComponent,
    EditUserComponent,
    ListRolesComponent,
    ListeMaterielsComponent,
    EditRoleComponent,
    EditMaterielComponent,
    MyLoaderComponent,
    AcceuilAdminComponent,
    EditDemandeUserComponent,
    EspacechatresolueComponent,
    EspacenonresolueComponent,
    MissioninterventionencoursComponent,
    MissioninterventionnonresolueComponent,
    MissioninterventionresolueComponent,
    MissioninterventionhistoriqueComponent,
    IntervenantconsulternewmissionComponent,
    EspacemissionencoursComponent,
    EspacemissinresoluComponent,
    EspacemissionnonresolueComponent,
    EspacemissionhistoriqueComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    NgxPaginationModule,
    FlashMessagesModule
  ],
  providers: [AuthentificationService,FlashMessagesService,ChartRespoService,ServiceBMCIService,AgenceService,UtilisateursService,RoleService,MaterielService,
  {provide: HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
