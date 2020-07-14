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

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageUserComponent,
    PageAdminComponent,
    PageRespoInfoComponent,
    PageIntervenantComponent,
    NouveauDemandeComponent
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
