import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-demandes-non-resolues',
  templateUrl: './demandes-non-resolues.component.html',
  styleUrls: ['./demandes-non-resolues.component.css']
})
export class DemandesNonResoluesComponent implements OnInit {
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
    this.demandeNonResoluUser();
  }
  fermertabuserNonResolu(){
    this.router.navigate(['user/nouveauDemande'])

  }

  
  demandeNonResoluUser(){
    /* prie en mise a jours */
    this.auth.DemandeUserNonResolus(this.pageDnr).subscribe(

      resp=>{
        this.demandeNonResoluesUser=resp['content'];
        this.totalepageDnr=new Array(resp['totalPages']);
       

      }
    )

  }
  setpageDnr(i,event:any){
    /* pris en consideration */
    event.preventDefault();
    this.pageDnr=i;
    this.demandeNonResoluUser();;
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
  

}
