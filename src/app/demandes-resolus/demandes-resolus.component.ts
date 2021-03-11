import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-demandes-resolus',
  templateUrl: './demandes-resolus.component.html',
  styleUrls: ['./demandes-resolus.component.css']
})
export class DemandesResolusComponent implements OnInit {

  pageDr=0;
  demandeEncoursuser:any=[];
  totalPageDr:any=[];
  espaceMessagesuser1;
  webSocketAPI:WebSocketAPI;
  numeroespace;
  constructor(public auth:AuthentificationService,public router:Router) { }

  ngOnInit(): void {
    this.webSocketAPI=new WebSocketAPI(this.auth);
    this.webSocketAPI.connecter();
    this.DemandeResolus();
  }
  fermertabuserResolu(){
    this.router.navigate(['user/nouveauDemande'])

  }
  DemandeResolus(){
    /* demande en consideration */
 

    this.auth.DemandeResolus(this.pageDr).subscribe(resp=>{
      this.demandeEncoursuser=resp['content'];
      this.totalPageDr=new Array(resp['totalPages']);

      console.log(this.demandeEncoursuser);





    });
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
   this.router.navigate(["user/espaceUserComment/"+btoa(this.numeroespace)]);

  }
  setpageDr(i,event:any){
    /* pris en charge */
    event.preventDefault();
    this.pageDr=i;
    this.DemandeResolus();
  }

}
