import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-interventionsencours',
  templateUrl: './interventionsencours.component.html',
  styleUrls: ['./interventionsencours.component.css']
})
export class InterventionsencoursComponent implements OnInit {
  webSocket:WebSocketAPI;
  espaceresnew;
  espaceMessages;
  espacevue=0;
  

  constructor(public router:Router,public route:ActivatedRoute,public auth:AuthentificationService) {
    this.webSocket=new WebSocketAPI(this.auth);

   }

  ngOnInit(): void {
    this.webSocket.connecter();
   // this.webSocket.DemandesEncours();
  }
  fermertabrespo(){
    this.router.navigate(["respInfo/tableauBordRespoInfo"]);

  }
  consulterEspace(esp){
    /* pris en consideration */
  this.espaceresnew=undefined;
  this.espaceMessages=esp.commentaire;
  this.webSocket.messagesNew=esp.commentaire;
  this.espacevue=1;
  //this.encours=0;
  let numeroespace=esp.idEspace;
  this.router.navigate(['respInfo/espaceRespoConsulter/'+btoa(numeroespace)]);
 // this.webSocket.commentaireEspace(numeroespace);
  console.log(this.espaceMessages);
  }

}
