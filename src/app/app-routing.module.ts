import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageLoginComponent} from './page-login/page-login.component';
import {PageAdminComponent} from './page-admin/page-admin.component';
import {PageUserComponent} from './page-user/page-user.component';
import {PageRespoInfoComponent} from './page-respo-info/page-respo-info.component';
import {PageIntervenantComponent} from './page-intervenant/page-intervenant.component';
import {NouveauDemandeComponent} from './nouveau-demande/nouveau-demande.component';


const routes: Routes = [
  {path:'login',component:PageLoginComponent},
  {path:'admin',component:PageAdminComponent},
  {path:'user',component:PageUserComponent},
  {path:'respInfo',component:PageRespoInfoComponent},
  {path:'intervenant',component:PageIntervenantComponent},
  {path:'CreeDemande',component:NouveauDemandeComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
