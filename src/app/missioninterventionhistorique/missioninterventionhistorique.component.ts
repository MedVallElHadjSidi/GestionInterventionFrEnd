import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-missioninterventionhistorique',
  templateUrl: './missioninterventionhistorique.component.html',
  styleUrls: ['./missioninterventionhistorique.component.css']
})
export class MissioninterventionhistoriqueComponent implements OnInit {

  demandeHistoriqueUser;
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
    this.auth.MissionIntervenantHistorique(this.auth.username).subscribe(

      resp=>{
        this.demandeHistoriqueUser=resp;
    //   console.log(this.demandeNonResoluesUser);

       

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
   this.router.navigate(["intervenant/espaceMissionHistorique/"+btoa(this.numeroespace)]);

  }
  

}
