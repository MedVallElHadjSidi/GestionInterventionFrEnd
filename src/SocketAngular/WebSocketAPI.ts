import {PageUserComponent} from '../app/page-user/page-user.component';

import {Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

export class WebSocketAPI {
  webSocketEndPoint: string = 'http://localhost:8080/ws';
  topic: string = "/topic/greetings";
  stompClient: any;
  app: string = "/app";
  userComponent:PageUserComponent;



  constructor(pageUserComponent:PageUserComponent) {
    this.userComponent=pageUserComponent;

  }
  connecter(){
    console.log("initialiser web socket");
    let ws =  new SockJS(this.webSocketEndPoint);
    this.stompClient=Stomp.over(ws);
    console.log(this.userComponent.auth.jwtToken)
    const _this = this;
    _this.stompClient.connect({}, function (frame) {
      _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
        _this.onMessageReceived(sdkEvent);

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
    this.stompClient.send("/app/hello", {}, JSON.stringify(message));
    console.log(message)
  }

  onMessageReceived(message) {
    console.log("Message Recieved from Server connecter :: " + message);
    this.stompClient.connect({}, function (frame) {
      this.stompClient.subscribe(this.app, function (sdkEvent) {
        this.onMessageReceived(sdkEvent);


      });
    })
    this.userComponent.handleMessage(JSON.stringify(message.body));


  }





}
