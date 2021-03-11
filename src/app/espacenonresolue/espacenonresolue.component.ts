import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvoyerMessage } from 'src/Entities/EnvoyerMessage';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-espacenonresolue',
  templateUrl: './espacenonresolue.component.html',
  styleUrls: ['./espacenonresolue.component.css']
})
export class EspacenonresolueComponent implements OnInit {

  envoyerMessage: EnvoyerMessage = new EnvoyerMessage();
  webSocket:WebSocketAPI;
  numeroespace;
  listUser=[];

  constructor(public auth:AuthentificationService,public route:ActivatedRoute,public router:Router) { 

  }

  ngOnInit(): void {
    this.webSocket=new WebSocketAPI(this.auth);
    this.webSocket.connecter();
    this.numeroespace =atob(this.route.snapshot.params.idespace);
    console.log(this.numeroespace);
    this.commentaireEspace();
 //   this.webSocket.commentaireEspace(this.numeroespace);
 
  
  }
  fermerEspace(){
    this.router.navigate(["respInfo/interventionsnonresolu"]);

  }
  EnvoyerMessages(msg){
    /* pris en consideration */

    this.envoyerMessage.idespace = this.numeroespace;
    this.envoyerMessage.username = this.auth.username;
    this.envoyerMessage.message=msg.message;
      this.webSocket._sendVersEspace(this.envoyerMessage);
      this.envoyerMessage = new EnvoyerMessage();


  }
  commentaireEspace(){

    this.webSocket.commentaireEspace(this.numeroespace);
    console.log(this.webSocket.espaceDemande);
    
  }
  InfoEspace(){
    console.log(this.webSocket.espaceDemande);
    this.listUser=this.webSocket.espaceDemande;

  }

}
