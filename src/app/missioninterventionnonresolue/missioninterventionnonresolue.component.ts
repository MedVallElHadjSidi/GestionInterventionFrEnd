import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-missioninterventionnonresolue',
  templateUrl: './missioninterventionnonresolue.component.html',
  styleUrls: ['./missioninterventionnonresolue.component.css']
})
export class MissioninterventionnonresolueComponent implements OnInit {

  demandeNonResoluesUser;
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
    this.router.navigate(['intervenant'])

  }

  
  demandeNonResoluIntervenant(){
    /* prie en mise a jours */
    this.auth.MissionIntervenantNonResolu(this.auth.username).subscribe(

      resp=>{
        this.demandeNonResoluesUser=resp;
       console.log(this.demandeNonResoluesUser);

       

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
   this.router.navigate(["intervenant/espaceMissionNonResolu/"+btoa(this.numeroespace)]);

  }
  

}
