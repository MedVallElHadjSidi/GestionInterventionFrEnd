import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-missioninterventionresolue',
  templateUrl: './missioninterventionresolue.component.html',
  styleUrls: ['./missioninterventionresolue.component.css']
})
export class MissioninterventionresolueComponent implements OnInit {

  demandeResoluesUser;
  pageDnr=0;
  totalepageDnr;
  espaceMessagesuser1;
  webSocketAPI:WebSocketAPI;
  numeroespace;
  
  constructor(public auth:AuthentificationService,public router:Router) { }

  ngOnInit(): void {
    this.webSocketAPI=new WebSocketAPI(this.auth);
    this.webSocketAPI.connecter();
    this. demandeNonResoluIntervenant();
  }
  fermertabuserNonResolu(){
    this.router.navigate(['intervenant/interventionResolueMission'])

  }

  
  demandeNonResoluIntervenant(){
    /* prie en mise a jours */
    this.auth.MissionIntervenantResolu(this.auth.username).subscribe(

      resp=>{
        this.demandeResoluesUser=resp;
     //  console.log(this.demandeNonResoluesUser);

       

      }
    )

  }

  consulterEspaceUser(espace){
    /* pris en consderation */
    this.espaceMessagesuser1=espace.commentaire;
    this.webSocketAPI.messagesNew2=espace.commentaire;

    this.numeroespace=espace.idEspace;
    /*
    this.webSocketAPI.commentaireEspace(this.numeroespace);

    console.log(this.espaceMessagesuser1);
    */
   this.router.navigate(["intervenant/espaceMisionResolu/"+btoa(this.numeroespace)]);

  }
  

}
