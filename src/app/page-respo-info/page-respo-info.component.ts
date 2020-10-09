import { Component, OnInit } from '@angular/core';
import {WebSocketAPI} from '../../SocketAngular/WebSocketAPI';
import {AuthentificationService} from '../../services/authentification.service';
import {PageUserComponent} from '../page-user/page-user.component';

@Component({
  selector: 'app-page-respo-info',
  templateUrl: './page-respo-info.component.html',
  styleUrls: ['./page-respo-info.component.css']
})
export class PageRespoInfoComponent implements OnInit {
  notification;
  webSocket:WebSocketAPI;
  auth:AuthentificationService;
  coonnecter=false;


  constructor(authentificationService:AuthentificationService) {
    this.auth=authentificationService

  }

  ngOnInit(): void {
    this.webSocket=new WebSocketAPI(this.auth );
    this.webSocket.connecter();
    this.coonnecter=true;
  }







}
