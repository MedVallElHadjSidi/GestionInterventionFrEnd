import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvoyerMessage } from 'src/Entities/EnvoyerMessage';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-espaceinitial-respo',
  templateUrl: './espaceinitial-respo.component.html',
  styleUrls: ['./espaceinitial-respo.component.css']
})
export class EspaceinitialRespoComponent implements OnInit {
  idEspace;
  webSocket:WebSocketAPI;
  envoyerMessage: EnvoyerMessage = new EnvoyerMessage();
  espaceresnew ;

  constructor(public route:ActivatedRoute,public auth:AuthentificationService,public router:Router) {

   }

  ngOnInit(): void {
    this.webSocket=new WebSocketAPI(this.auth);
    this.webSocket.connecter();
    this.idEspace=atob(this.route.snapshot.params.idDemande);
    console.log(this.idEspace);
    this.TrouverNouveauIdEspace(this.idEspace);

  }
  fermerEspace(){
    this.router.navigate(["respInfo"]);

  }

  EnvoyerMessage(meesse) {
    console.log(this.espaceresnew)
    this.envoyerMessage.idespace = this.espaceresnew ;
    this.envoyerMessage.username = this.auth.username;

  //  console.log(meesse);
    //console.log(meesse.votremessage);

    this.envoyerMessage.message = meesse.message;
   // console.log(this.envoyerMessage);
    this.webSocket._sendVersEspace(this.envoyerMessage);
    this.envoyerMessage = new EnvoyerMessage();

  
  }

  TrouverNouveauIdEspace(id){

    this.auth.EspcaeIDIntervention(id, this.auth.username).subscribe(resp => {

      this.espaceresnew = resp;

      this.webSocket.nv_espace_message=1;
      //console.log(this.webSocket.nv_espace_message);
    //  console.log(this.espaceresnew);
    }
  );

  }

}
