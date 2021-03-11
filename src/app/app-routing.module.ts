import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageLoginComponent} from './page-login/page-login.component';
import {PageAdminComponent} from './page-admin/page-admin.component';
import {PageUserComponent} from './page-user/page-user.component';
import {PageRespoInfoComponent} from './page-respo-info/page-respo-info.component';
import {PageIntervenantComponent} from './page-intervenant/page-intervenant.component';
import {NouveauDemandeComponent} from './nouveau-demande/nouveau-demande.component';
import {AdresseComponent} from './adresse/adresse.component';
import {AgenceComponent} from './agence/agence.component';
import {AddUserComponent} from './add-user/add-user.component';
import {AddRoleComponent} from './add-role/add-role.component';
import {AddCategorieComponent} from './add-categorie/add-categorie.component';
import {AddMaterielComponent} from './add-materiel/add-materiel.component';
import {GestionServiceComponent} from './gestion-service/gestion-service.component';
import {RespoEspaceComponent} from './respo-espace/respo-espace.component';
import {TableauserviceEncoursComponent} from './tableauservice-encours/tableauservice-encours.component';
import { DirecteurGeneraleComponent } from './directeur-generale/directeur-generale.component';
import { DemandeenattenteComponent } from './demandeenattente/demandeenattente.component';
import { DemanderejeterComponent } from './demanderejeter/demanderejeter.component';
import { DemandeCoursComponent } from './demande-cours/demande-cours.component';
import { EspaceuserCommentComponent } from './espaceuser-comment/espaceuser-comment.component';
import {DemandesResolusComponent} from './demandes-resolus/demandes-resolus.component'
import { DemandesNonResoluesComponent } from './demandes-non-resolues/demandes-non-resolues.component';
import { ConsulterHistoriquesUsersComponent } from './consulter-historiques-users/consulter-historiques-users.component';
import { ConsulterHDemandeComponent } from './consulter-h-demande/consulter-h-demande.component';
import { DemandeInfoRejeterComponent } from './demande-info-rejeter/demande-info-rejeter.component';
import { ConsulterNouveauDemandeComponent } from './consulter-nouveau-demande/consulter-nouveau-demande.component';
import { EspaceinitialRespoComponent } from './espaceinitial-respo/espaceinitial-respo.component';
import { TableauBordRespoInfoComponent } from './tableau-bord-respo-info/tableau-bord-respo-info.component';
import { InterventionsencoursComponent } from './interventionsencours/interventionsencours.component'
import { from } from 'rxjs';
import { EspacerespoconsulterComponent } from './espacerespoconsulter/espacerespoconsulter.component';
import { InterventionsresolusComponent } from './interventionsresolus/interventionsresolus.component';
import { InterventionsnonresolusComponent } from './interventionsnonresolus/interventionsnonresolus.component';
import { ConsulterhistoriquesrespoinfoComponent } from './consulterhistoriquesrespoinfo/consulterhistoriquesrespoinfo.component';
import { PageDirecteurGeneralComponent } from './page-directeur-general/page-directeur-general.component';
import { ListServicesComponent } from './list-services/list-services.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { ListAgencesComponent } from './list-agences/list-agences.component';
import { EditAgenceComponent } from './edit-agence/edit-agence.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListRolesComponent } from './list-roles/list-roles.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { ListeMaterielsComponent } from './liste-materiels/liste-materiels.component';
import { EditMaterielComponent } from './edit-materiel/edit-materiel.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { EditDemandeUserComponent } from './edit-demande-user/edit-demande-user.component';
import { EspacechatresolueComponent } from './espacechatresolue/espacechatresolue.component';
import { EspacenonresolueComponent } from './espacenonresolue/espacenonresolue.component';
import { MissioninterventionhistoriqueComponent } from './missioninterventionhistorique/missioninterventionhistorique.component';
import { MissioninterventionencoursComponent } from './missioninterventionencours/missioninterventionencours.component';
import { MissioninterventionnonresolueComponent } from './missioninterventionnonresolue/missioninterventionnonresolue.component';
import { MissioninterventionresolueComponent } from './missioninterventionresolue/missioninterventionresolue.component';
import { IntervenantconsulternewmissionComponent } from './intervenantconsulternewmission/intervenantconsulternewmission.component';
import { EspacemissionencoursComponent } from './espacemissionencours/espacemissionencours.component';
import { EspacemissinresoluComponent } from './espacemissinresolu/espacemissinresolu.component';
import { EspacemissionnonresolueComponent } from './espacemissionnonresolue/espacemissionnonresolue.component';
import { EspacemissionhistoriqueComponent } from './espacemissionhistorique/espacemissionhistorique.component';
const routes: Routes = [
  {path:'login',component:PageLoginComponent},
  {path:'intervenant',component:PageIntervenantComponent,children:[
    {path:'constrernouvellemission/:id',component:IntervenantconsulternewmissionComponent,pathMatch:'full'},
    {path:'interventionEncoursMission',component:MissioninterventionencoursComponent,pathMatch:'full'},
    {path:'interventionNonResolueInter',component:MissioninterventionnonresolueComponent,pathMatch:'full'},
    {path:'interventionResolueMission',component:MissioninterventionresolueComponent,pathMatch:'full'},
    {path:'interventionHistorique',component:MissioninterventionhistoriqueComponent,pathMatch:'full'},
    {path:'espaceMissionEncours/:idEspace',component:EspacemissionencoursComponent,pathMatch:'full'},
    {path:'espaceMisionResolu/:idEspace',component:EspacemissinresoluComponent,pathMatch:'full'},
    {path:'espaceMissionNonResolu/:idEspace',component:EspacemissionnonresolueComponent,pathMatch:'full'},
    {path:'espaceMissionHistorique/:idEspace',component:EspacemissionhistoriqueComponent,pathMatch:'full'}

  ]},
  {path:'admin',component:PageAdminComponent,children:[
    {path:'listServices/:page',component:ListServicesComponent,pathMatch:'full'},
    {path:'editService/:idService/:idpage',component:EditServiceComponent,pathMatch:'full'},
    {path:'listAgence/:page',component:ListAgencesComponent,pathMatch:'full'},
    {path:'editAgence/:idAgence/:page',component:EditAgenceComponent,pathMatch:'full'},
    {path:'listUsers/:page',component:ListUsersComponent,pathMatch:'full'},
    {path:'editUser/:code/:page',component:EditUserComponent,pathMatch:'full'},
    {path:'listRoles/:page',component:ListRolesComponent,pathMatch:'full'},
    {path:'editRole/:idRole/:page',component:EditRoleComponent,pathMatch:'full'},
    {path:'listMateriel/:page',component:ListeMaterielsComponent,pathMatch:'full'},
    {path:'editMateriel/:idMateriel/:page',component:EditMaterielComponent,pathMatch:'full'},
    {path:'acceuil',component:AcceuilAdminComponent,pathMatch:'full'}



  ]},
  {path:'DG',component:PageDirecteurGeneralComponent},
  {path:'user',component:PageUserComponent,children:[
    {path:"nouveauDemande",component:NouveauDemandeComponent,pathMatch:"full"},
    {path:"demandesEnattente",component:DemandeenattenteComponent,pathMatch:"full"},
    {path:"demandesRejeter",component:DemanderejeterComponent,pathMatch:"full"},
    {path:"demandesEncoursUser",component:DemandeCoursComponent,pathMatch:"full"},
    {path:"espaceUserComment/:idespace",component:EspaceuserCommentComponent,pathMatch:"full"},
    {path:"demandesResolu",component:DemandesResolusComponent,pathMatch:"full"},
    {path:"demandesNonResolues",component:DemandesNonResoluesComponent,pathMatch:"full"},
    {path:"consulterHistoriqueUser",component:ConsulterHistoriquesUsersComponent,pathMatch:"full"},
    {path:"chercherDemandeUser",component:ConsulterHDemandeComponent,pathMatch:"full"},
    {path:"infoDemandeRejeter/:iddemandeRejeter",component:DemandeInfoRejeterComponent,pathMatch:"full"},
    {path:"editDemandeUser/:idDemande",component:EditDemandeUserComponent,pathMatch:"full"}
   
  ]
  },
  {path:'respInfo',component:PageRespoInfoComponent,children:
  [
    {path:"consulterNouveauDemande/:idDemande",component:ConsulterNouveauDemandeComponent,pathMatch:"full"},
    {path:"espaceRespoInitial/:idDemande",component:EspaceinitialRespoComponent,pathMatch:"full"},
    {path:"tableauBordRespoInfo",component:TableauBordRespoInfoComponent,pathMatch:"full"},
    {path:"interventionsencours",component:InterventionsencoursComponent,pathMatch:"full"},
    {path:"espaceRespoConsulter/:idespace",component:EspacerespoconsulterComponent,pathMatch:"full"},
    {path:"espaceRespoConsulterResolue/:idespace",component:EspacechatresolueComponent,pathMatch:"full"},
    {path:"espaceRespoConsulterNonResolu/:idespace",component:EspacenonresolueComponent,pathMatch:"full"},
    {path:"interventionsresolus",component:InterventionsresolusComponent,pathMatch:"full"},
    {path:"interventionsnonresolu",component:InterventionsnonresolusComponent,pathMatch:"full"},
    {path:"consulterHistoriquesInfo",component:ConsulterhistoriquesrespoinfoComponent,pathMatch:"full"}

]

},
  {path:'tableauxServiceEnCours',component:TableauserviceEncoursComponent},
  {path:'respoespace',component:RespoEspaceComponent},

 // {path:'CreeDemande',component:NouveauDemandeComponent},
  {path:'addAdresse',component:AdresseComponent},
  {path:'addAgence',component:AgenceComponent},
  {path:'addUser',component:AddUserComponent},
  {path:'addRole',component:AddRoleComponent},
  {path:'addCategorie',component:AddCategorieComponent},
  {path:'addMateriel',component:AddMaterielComponent},
  {path:'gestionService',component:GestionServiceComponent},


  {path:'',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
   paramsInheritanceStrategy: 'always'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
