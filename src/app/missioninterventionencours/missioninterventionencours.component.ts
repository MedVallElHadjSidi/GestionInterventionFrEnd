import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-missioninterventionencours',
  templateUrl: './missioninterventionencours.component.html',
  styleUrls: ['./missioninterventionencours.component.css']
})
export class MissioninterventionencoursComponent implements OnInit {
  missioninterv;
  webSocket:WebSocketAPI;
  espaceMessagesinter1;
  numeroespace;
  espaceMessagesuser1;

  constructor( public auth:AuthentificationService,private  router:Router) {


   
  }


  ngOnInit(): void {
    
     this.webSocket=new WebSocketAPI(this.auth);
     this.DemandeAsoocierIntervenantEncours();
  }
  DemandeAsoocierIntervenantEncours(){

    this.auth.DemandeAsoocierIntervenantEncours(this.auth.username).subscribe(resp=>{
    this.missioninterv=resp;
    console.log(this.missioninterv)})
 //  this.interespace=1;
   //this.tabinter=1;
   }
   fermertabinter(){
     this.router.navigate(['intervenant'])

   }
   consulterEspaceUserInter(espace){
     /*  version passe 
     console.log(espace);

    this.espaceMessagesinter1=espace.commentaire;
    this.webSocket.messagesNew2=espace.commentaire;
    this.numeroespace=espace.idEspace;
    this.webSocket.commentaireEspace(this.numeroespace);
   //this.espacevueinter=1;
   // this.interespace=0;

    console.log(this.espaceMessagesinter1);*/
    this.espaceMessagesuser1=espace.commentaire;
    this.webSocket.messagesNew2=espace.commentaire;

    this.numeroespace=espace.idEspace;
    /*
    this.webSocketAPI.commentaireEspace(this.numeroespace);

    console.log(this.espaceMessagesuser1);
    */
   this.router.navigate(["intervenant/espaceMissionEncours/"+btoa(this.numeroespace)]);



  }

}
