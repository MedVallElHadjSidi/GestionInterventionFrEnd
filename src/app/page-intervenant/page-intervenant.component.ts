import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {WebSocketAPI} from '../../SocketAngular/WebSocketAPI';
import {Router} from '@angular/router';
import {EnvoyerMessage} from '../../Entities/EnvoyerMessage';

@Component({
  selector: 'app-page-intervenant',
  templateUrl: './page-intervenant.component.html',
  styleUrls: ['./page-intervenant.component.css']
})
export class PageIntervenantComponent implements OnInit {
  auth:AuthentificationService;
  missioninterv;
  espaceMessagesinter1;
  envoyerMessage:EnvoyerMessage=new EnvoyerMessage();
  webSocket:WebSocketAPI;
  index;
  numeroespace;
  consulter;
  demande;
  tabinter=1;
  intervenantEnMission;
  interespace=0;
  espacevueinter;

  constructor(authservice:AuthentificationService,private  router:Router) {
    this.auth=authservice;

    this.webSocket=new WebSocketAPI(this.auth);
  }

  ngOnInit(): void {
    this.webSocket.connecter();
    this.webSocket.MissionEncours(this.auth.username);
  }
  interventionNonResolueInter(){
    this.router.navigate(["/intervenant/interventionNonResolueInter"]);

  }
  interventionResolueInter(){
    this.router.navigate(["/intervenant/interventionResolueMission"]);


  }
  interventionHistoriqueInter(){
    this.router.navigate(["/intervenant/interventionHistorique"]);

  }

  Consulter(id, index) {

    this.index = index;
    this.webSocket.nouveauxDemandes.splice(this.index, 1)
    console.log(this.webSocket.nouveauxDemandes.length)
    this.index = 0;
    this.webSocket.nbredemessageintervenant = this.webSocket.nbredemessageintervenant- 1;

   // this.router.navigate(["/"+btoa(id)]);
    this.router.navigate(["intervenant/constrernouvellemission/"+btoa(id)]);
  /*  this.auth.CherCherByIdNouveauxMissionEnCours(id).subscribe(
      resp => {
        this.demande = resp;
        this.consulter = 1;
      }
    )

    this.auth.ChangerEtatIntervenant(this.auth.username).subscribe(
    resp=>{this.intervenantEnMission=resp},error=>{}
    )*/

  }




    logout() {
  

      this.auth.logout();
      this.router.navigateByUrl("/login");

    }
  consulterEspaceUserInter(espace){

    this.espaceMessagesinter1=espace.commentaire;
    this.webSocket.messagesNew2=espace.commentaire;
    this.numeroespace=espace.idEspace;
    this.webSocket.commentaireEspace(this.numeroespace);
    this.espacevueinter=1;
    this.interespace=0;

    console.log(this.espaceMessagesinter1);
  }
  fermerEspace(){  this.espacevueinter=0;}

  EnvoyerMessages(ms){
    this.envoyerMessage.idespace = this.numeroespace;
    this.envoyerMessage.username = this.auth.username;
    this.envoyerMessage.message=ms.message;
    this.webSocket._sendVersEspace(this.envoyerMessage);
    this.envoyerMessage= new EnvoyerMessage();
  }
  DemandeAsoocierIntervenantEncours(){

   this.auth.DemandeAsoocierIntervenantEncours(this.auth.username).subscribe(resp=>{
   this.missioninterv=resp;
   console.log(this.missioninterv)})
  this.interespace=1;
  this.tabinter=1;
  }
  fermertabinter(){
  this.tabinter=0;}
  fermertabinterinfoMission(){
  this.consulter=0;}

  EnvoyerMisionDemandeEncours(){
    this.router.navigate(["/intervenant/interventionEncoursMission"]);
  }



}

