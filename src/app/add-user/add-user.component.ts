import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {AppComponent} from '../app.component';
import {Utilisateur} from '../../Entities/Utilisateur';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
 appcomp:AppComponent;
  date:Date;
  auth:AuthentificationService;
  Nuser:any;
  listRole;
  moderole;

  Message:string;
  mode;
  usermode:Utilisateur=new Utilisateur();
 constructor(authentificationService:AuthentificationService,app:AppComponent) {
    this.auth=authentificationService;
    this.appcomp=app;
    this.date=this.appcomp.date;

  }

  ngOnInit(): void {
   this.ChercherAllRoles();
  }
  ChercherAllRoles(){
    this.auth.ChercherAllRolesNames().subscribe(resp=>{
      this.listRole=resp;
      this.moderole=1;

    },error => {
      this.moderole=0;
      this.Message=error.error.Message;
    })


  }
  AjouterUser(modeuser){
    this.usermode.code=modeuser.code;
    this.usermode.nom=modeuser.nom;
    this.usermode.prenom=modeuser.prenom;
    this.usermode.email=modeuser.email;
    this.usermode.username=modeuser.username;
    this.usermode.password=modeuser.password;
    this.usermode.confirmation=modeuser.confirmation;
    this.usermode.roleName=modeuser.roleName;

    this.auth.SaveUser(modeuser).subscribe(resp=>{
  this.Nuser=resp;
  this.mode=1;
  this.Message="L'ajout avec succes";

  },error=>{
   this.Message=error.error.message;
          this.mode=0;
  });
    this.usermode=new Utilisateur();

  }

}
