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

const routes: Routes = [
  {path:'login',component:PageLoginComponent},
  {path:'admin',component:PageAdminComponent},
  {path:'user',component:PageUserComponent},
  {path:'respInfo',component:PageRespoInfoComponent},
  {path:'tableauxServiceEnCours',component:TableauserviceEncoursComponent},
  {path:'respoespace',component:RespoEspaceComponent},
  {path:'intervenant',component:PageIntervenantComponent},
  {path:'CreeDemande',component:NouveauDemandeComponent},
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
