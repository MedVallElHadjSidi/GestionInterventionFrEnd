import { Component, OnInit } from '@angular/core';
import {WebSocketAPI} from '../../SocketAngular/WebSocketAPI';
import {AppComponent} from '../app.component';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {
  date =new  Date()
  responsable;
  webSocketAPI: WebSocketAPI;
  auth:AuthentificationService

  constructor(authentificationService:AuthentificationService) {
    this.auth=authentificationService

  }


  ngOnInit(): void {
    this.webSocketAPI = new WebSocketAPI(new  PageUserComponent(this.auth));
    this.webSocketAPI.connecter()

  }
  EnvoyerDemande(Demande){
    this.webSocketAPI._send(Demande)


  }
  handleMessage(message){
    this.responsable = message;
  }

}
