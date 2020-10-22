import {PageUserComponent} from '../app/page-user/page-user.component';

import {Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {MesMessage} from '../Entities/MesMessage';

import {AuthentificationService} from '../services/authentification.service';



export class WebSocketAPI {
  webSocketEndPoint: string = 'http://localhost:8080/ws';
  stompClient: any;
  newmessage;
  app: string = "/app";
  auth:AuthentificationService;
  messageespace;

  messages:MesMessage;
  username:string;
  url:string="/topic/replay"+"/";
  url2:string="/topic/espace"+"/";
  notification;
  contenuDemande;
  isconnecter=false;
  nouveauxDemandes:any;
  nbredemessage;
  nv=[];
  messagesNew:any;



  constructor(authentificationService:AuthentificationService) {
    this.auth=authentificationService;
    this.NouveauxDemande();
  }



  connecter(){
    console.log("initialiser web socket");
    let ws =  new SockJS(this.webSocketEndPoint);
    this.stompClient=Stomp.over(ws);
    const _this = this;
    this.username=this.auth.username;
    console.log(this.username);
    _this.url=_this.url+this.auth.username;
    _this.url2=_this.url2+this.auth.username;

    _this.stompClient.connect({}, function (frame) {
       _this.stompClient.subscribe(_this.url, (message)=> {
          //  console.log(message);
           // console.log(message.body);
           // console.log(JSON.parse(message.body));
            if(JSON.parse(message.body)!=undefined) {
              console.log("yes mesage existe")
              _this.contenuDemande = JSON.parse(message.body);
              if (_this.contenuDemande!=undefined){
                // _this.notification=_this.contenuDemande;
                //  console.log(_this.contenuDemande)
                _this.nv.push(_this.contenuDemande);
                _this.nbredemessage=_this.nbredemessage+1;
                console.log("message envoyer vers destination");
                _this.contenuDemande=undefined;
                (message)=undefined;


              }

            }


            console.log("ce message vient du broker")

          });
      _this.stompClient.subscribe(_this.url2, (message)=> {
      _this.messageespace= JSON.parse(message.body);
      //  console.log(message);
       // console.log(message.body);
       // console.log(JSON.parse(message.body));
        if(_this.messageespace!=undefined) {
          console.log("message recue par url2")
          console.log( _this.messageespace)
          this.HandleResult(_this.messageespace);
        }
        console.log("ce message vient du broker2 ")
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
    //this.handleResult(message);
  }
  _sendVersEspace(message){
  console.log(message);
    this.stompClient.send("/app/interventionsimple",{},JSON.stringify(message));

  }





  notifications(){

    this.auth.Notification().subscribe(resp=>{
   //   this.notification=resp;
    })
  }
  NouveauxDemande() {


    this.auth.NouveauMessagesDemande().subscribe(resp => {
      this.nouveauxDemandes = resp;
      this.nv=this.nouveauxDemandes;
      this.nbredemessage = this.nv.length;
      console.log(this.nbredemessage);

    })
  }

  HandleResult(message){
    if (message.body) {

      console.log(message);
      this.messagesNew.push(message);

    }

  }




}
