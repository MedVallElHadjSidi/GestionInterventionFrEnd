import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {AuthentificationService} from '../../services/authentification.service';
import {Agence} from '../../Entities/Agence';
import {ModelAgence} from '../../Entities/ModelAgence';

import {Adresse} from '../../Entities/Adresse';
import {NgForm} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
modeaffag;
moderespAU;
  mode;
  aguser;
  modeAgence;
  listUsers;
  listAgences;
  modeAffectUser;
  Message:string;
  appcomp:AppComponent;
  date:Date;
  agence;
  NAgence:Agence=new Agence();
  auth:AuthentificationService;
  codeAdrese;
  adresseRs:any;
  adresse:Adresse=new Adresse();
  nomAgence:string;
  code:any;
  codeAll:string="";
  listAdresse:any;
  modecode;
  modelag:ModelAgence =new ModelAgence();
  constructor(authservice:AuthentificationService ,app:AppComponent,public flashmessage:FlashMessagesService) {
    this.appcomp=app;
    this.date=app.date;
    this.auth=authservice;

  }

  ngOnInit(): void {
  this.chercheAllCodeAdresse();
  this.AgencesNames();
  this.UserNames();

  }
  AjouterAgence(agenceForm){
  console.log(agenceForm);
    this.auth.SaveAgence(agenceForm).subscribe(resp=>{
      this.agence=resp;

      this.mode=1;
      this.Message="L'ajout avec success";
      this.AgencesNames();
      this.moderespAU=1;
    },error => {

      this.mode=0;
      this.Message=error.error.Message;

    });
     this.modelag =new ModelAgence();



  }
  ChercherAdresse(codeForm){

    console.log(codeForm.code)


     console.log(codeForm)
    this.auth.findByCodeAdresse(codeForm.code).subscribe(resp=>{

      this.adresseRs=resp;
        this.adresse.SetCodeAdresse(this.adresseRs.codeAdresse);
        this.adresse.SetWilaye(this.adresseRs.wilaye);
        this.adresse.SetCommune(this.adresseRs.commune);
        this.adresse.SetVille(this.adresseRs.ville);
        this.adresse.SetRue(this.adresseRs.rue);
        this.mode=1


      }
    ,error => {this.mode=0;
    this.Message=error.error.message})

  }
  chercheAllCodeAdresse(){

  this.auth.ChercherByCodeAdresseAll().subscribe(resp=>{
  this.modecode=1;
  this.listAdresse=resp;},error=>{
  this.mode=0;
      this.Message=error.error.message})
  }
  AffectationUsers(affectUsers){
  this.auth.affectAgUser(affectUsers).subscribe(
  resp=>{
  this.aguser=resp;

  this.moderespAU=1;
 
  /*
  this.Message="operation effectuer avec succes";*/

  },error=>{
  this.moderespAU=0;
  this.Message=error.error.message;})
  }
  AffectationListUsers(affectUsers){
    this.auth.affectAgUser(affectUsers).subscribe(
    resp=>{
    this.aguser=resp;
   
    this.flashmessage.show('Affection des utilisateurs avec success',{cssClass:'alert-success',timeout:4000});
  
    this.UserNames();
    this.moderespAU=1;
    
  
    },error=>{
    this.moderespAU=0;
    this.Message=error.error.message;})
    }
  AgencesNames(){
  this.auth.AgencesNames().subscribe(resp=>{
  this.listAgences=resp;
  this.modeAgence=1;
  })

  }
  UserNames(){
 this.auth.UserNames().subscribe(resp=>{
  this.listUsers=resp;
  this.modeAffectUser=1;
  })

}
}
