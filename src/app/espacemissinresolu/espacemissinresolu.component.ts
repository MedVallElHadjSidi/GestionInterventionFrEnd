import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvoyerMessage } from 'src/Entities/EnvoyerMessage';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-espacemissinresolu',
  templateUrl: './espacemissinresolu.component.html',
  styleUrls: ['./espacemissinresolu.component.css']
})
export class EspacemissinresoluComponent implements OnInit {

  webSocketAPI:WebSocketAPI;
  numeroespace;
  listUser=[];
  envoyerMessage: EnvoyerMessage= new EnvoyerMessage();
  constructor(public rout:ActivatedRoute,public auth:AuthentificationService,public router:Router) {
    this.webSocketAPI=new WebSocketAPI(this.auth);
    this.webSocketAPI.connecter();
   }

  ngOnInit(): void {
  this.numeroespace=atob(this.rout.snapshot.params.idEspace);
  this.webSocketAPI.commentaireEspace(this.numeroespace)
    
  }
  EnvoyerMessages(msg){
    /* pis en mise ajours */
    this.envoyerMessage.idespace = this.numeroespace;
    this.envoyerMessage.username = this.auth.username;
    this.envoyerMessage.message=msg.message;
    this.webSocketAPI._sendVersEspace(this.envoyerMessage);
   // this.webSocketAPI.envoyerDemandewb(this.envoyerMessage);
    this.envoyerMessage= new EnvoyerMessage();
  }

  InfoEspace(){
    console.log(this.webSocketAPI.espaceDemande);
    this.listUser=this.webSocketAPI.espaceDemande;

  }

  fermerEspace(){
    this.router.navigate(['intervenant/interventionResolueMission']);
  }

  



}
