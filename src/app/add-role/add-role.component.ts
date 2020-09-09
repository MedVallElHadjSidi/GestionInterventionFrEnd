import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
auth:AuthentificationService;
  adress:any;
  mode;
  listUser;
  moderole;
  modeuser;
  Message:string;
  appcomp:AppComponent;
  date:Date;
  addrole:any;
  listRole;
  useraff;
  modeaffect;


  constructor(authentificationService:AuthentificationService,app:AppComponent) {
    this.auth=authentificationService;
    this.appcomp=app;
    this.date=this.appcomp.date;

  }

  ngOnInit(): void {
    this.ChercherAllRoles();
    this.CherCherUserSansRole();
  }
  AjouterRoles(role){
  this.auth.SaveRole(role).subscribe(resp=>{
  this.addrole=resp;
  this.mode=1;
  this.Message="L'ajout avec succes";
  },error=>{
  this.mode=0;
  this.Message=error.error.message;


  })

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
  CherCherUserSansRole(){
    this.auth.ChercherUserSansRole().subscribe(resp=>{
      this.listUser=resp;
      this.modeuser=1;
    },error => {
      this.modeuser=0;
      this.Message=error.error.message;
    })
  }
  AffecterRole(ModeAffectation){
  this.auth.AffecterRole(ModeAffectation).subscribe(resp=>{
    this.modeaffect=1;
  this.useraff=resp;
  this.Message="afectation avec succes du Role pour user :"+this.useraff.username;
  });

   }

}
