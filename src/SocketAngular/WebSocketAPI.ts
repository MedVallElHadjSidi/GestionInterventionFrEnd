import {PageUserComponent} from '../app/page-user/page-user.component';

import {Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {MesMessage} from '../Entities/MesMessage';

import {AuthentificationService} from '../services/authentification.service';

export class WebSocketAPI{
  webSocketEndPoint: string = 'http://localhost:8080/ws';

  stompClient: any;
  app: string = "/app";
  auth:AuthentificationService;

  messages:MesMessage[]=[];
  username:string;
  url:string="/topic/replay"+"/";
  notification;
  contenuDemande;



  constructor(authentificationService:AuthentificationService) {
    this.auth=authentificationService;
    this.notification=this.notifications();


  }

  connecter(){
    console.log("initialiser web socket");
    let ws =  new SockJS(this.webSocketEndPoint);
    this.stompClient=Stomp.over(ws);
    const _this = this;
    this.username=this.auth.username;
    console.log(this.username);
    _this.url=_this.url+this.auth.username;
    _this.stompClient.connect({}, function (frame) {

      _this.stompClient.subscribe(_this.url, (message)=> {
        _this.notification=JSON.parse(message.body);
        console.log("ce message vient du broker")
        _this.handleResult(message);
      });

      //_this.stompClient.reconnect_delay = 2000;
    }, this.errorCallBack);
  };
  errorCallBack(error) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
      this.connecter();
    }, 5000);
  }
  _send(message) {
    console.log("calling logout api via web socket");
    this.stompClient.send("/app/hello",{},JSON.stringify(message));
    this.handleResult(message);


  }



  handleResult(message){
    if (message.body) {
      let messageResult = JSON.parse(message.body);
      console.log(messageResult);
      this.messages.push(messageResult);
    }
  }
  notifications(){

    this.auth.Notification().subscribe(resp=>{
      this.notification=resp;
    })
  }




}
