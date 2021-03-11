import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-demande-cours',
  templateUrl: './demande-cours.component.html',
  styleUrls: ['./demande-cours.component.css']
})
export class DemandeCoursComponent implements OnInit {
  webSocketAPI:WebSocketAPI;
  espaceMessagesuser1;
  numeroespace;
  constructor(public auth:AuthentificationService,public router:Router) {

    

   }

  ngOnInit(): void {
    this.webSocketAPI=new WebSocketAPI(this.auth);
    this.webSocketAPI.connecter();
    this.DemandeUserEnCours();
  }
  fermertabuserEnc(){
    this.router.navigate(['user/nouveauDemande']);

  }
  consulterEspaceUser(espace){
    /* pris en consderation */
    this.espaceMessagesuser1=espace.commentaire;
    this.webSocketAPI.messagesNew2=espace.commentaire;

    this.numeroespace=espace.idEspace;
    /*
    this.webSocketAPI.commentaireEspace(this.numeroespace);
   // this.espacevueuser=1;
   // this.userespace=0;

    console.log(this.espaceMessagesuser1);
*/
this.router.navigate(["user/espaceUserComment/"+btoa(this.numeroespace)]);
    
  }
  setpage(i,event:any){
    /* pris en consideration */
    event.preventDefault();
    this.webSocketAPI.page=i;
    this.DemandeUserEnCours();


  }
  DemandeUserEnCours(){
    this.webSocketAPI.EspaceUserEncours();
    

}

}
