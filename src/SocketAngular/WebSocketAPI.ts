import {PageUserComponent} from '../app/page-user/page-user.component';

import {Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {MesMessage} from '../Entities/MesMessage';

import {AuthentificationService} from '../services/authentification.service';
import {ToastrService} from 'ngx-toastr';




export class WebSocketAPI {


  page:number=0;
  editDmd=0;
  demandesRejetes=[];
  pagetotaleDNotifier=0;
  pagednotifier=0;
  nbredemandeRejeter=0;
  totalPageDemandeNotifier=[];
  totalPage=[];
  missioninterv;
  missionEncoursIntervenant;
  missionEncoursInter=[];
  demandeIntervenant;
  webSocketEndPoint: string = 'http://localhost:8080/ws';
  stompClient: any;
  newmessage;
  espaceDemande;
  nouveauxespace=[];
  messageEnCours;
  app: string = "/app";
  auth:AuthentificationService;
  messageespace;
  messagesNew2;
  nv_espace_message=0;

  messages:MesMessage;
  username:string;
  url:string="/topic/replay"+"/";
  url2:string="/topic/espace"+"/";
  url3:string="/topic/intervenant"+"/";
  url4:string="/topic/rejeterDemande"+"/";
  demandeRejeter
  notification;
  contenuDemande;
  isconnecter=false;
  nouveauxDemandes:any;
  nbredemessage;
  nv=[];
  messagesNew=[];
  espaceEncours=[];
  espacesusers;
  etatespace="ouvert";
  espaceconsulter;
  nbredemessageintervenant=0;



  constructor(authentificationService:AuthentificationService) {
    this.auth=authentificationService;
    this.NouveauxDemande();
    this.DemandesEncours();
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
    _this.url3=_this.url3+this.username;
    _this.url4=_this.url4+this.username;

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
              else{
              console.log("ce message introuvable")}

            }


      console.log("ce message vient du broker");

          });
      _this.stompClient.subscribe(_this.url2, (message)=> {
      _this.messageespace= JSON.parse(message.body);
      //  console.log(message);
       // console.log(message.body);
       // console.log(JSON.parse(message.body));
        if(_this.messageespace!=undefined) {
          console.log("message recue par url2")
          console.log( _this.messageespace)

          _this.HandleResult(message);
        }
        console.log("ce message vient du broker2 ")
      });


      _this.stompClient.subscribe(_this.url3, (message)=> {
      _this.demandeIntervenant= JSON.parse(message.body);
        //  console.log(message);
        // console.log(message.body);
        // console.log(JSON.parse(message.body));
        if(_this.demandeIntervenant!=undefined) {
          console.log("message recue par url2")
          console.log(_this.demandeIntervenant)
          _this.missionEncoursInter.push(_this.demandeIntervenant);
          _this.nbredemessageintervenant=_this.nbredemessageintervenant+1;
          console.log(_this.missionEncoursInter);
          _this.demandeIntervenant=undefined;
          (message)=undefined;

        }
        console.log("ce message vient du broker3 ")
      });






      _this.stompClient.subscribe(_this.url4, (demandeIntervention)=> {
      _this.demandeRejeter= JSON.parse(demandeIntervention.body);
        //  console.log(message);
        // console.log(message.body);
        // console.log(JSON.parse(message.body));
        if(_this.demandeRejeter!=undefined) {
          console.log("message recue par url2")
          console.log(_this.demandeRejeter)
          _this.demandesRejetes.push(_this.demandeRejeter);
          _this.nbredemandeRejeter=_this.nbredemandeRejeter+1;
          console.log(_this.nbredemandeRejeter);
          _this.demandeRejeter=undefined;
          (demandeIntervention)=undefined;

        }
        console.log("ce message vient du broker4 ")
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
  envoyerDemandewb(message){
  this.auth.ResetDemande(message).subscribe(
  resp=>{
  this.nouveauxDemandes=resp;
  this.nv=this.nouveauxDemandes;
   this.nbredemessage = this.nv.length;

  })

  }
  _sendVersEspace(message){
  console.log(message);
    this.stompClient.send("/app/interventionsimple",{},JSON.stringify(message));
   // this.HandleResult(message);

  }
  _sendVersRejeter(demandeIntervention){

    this.stompClient.send("/app/DemandeRejeter",{},JSON.stringify(demandeIntervention));
     // this.HandleResult(message);

  }

  _sendIntervenant(notificationIntervenant){

  console.log(notificationIntervenant)
    this.stompClient.send("/app/interventionComplexe",{},JSON.stringify(notificationIntervenant));




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
      console.log(this.nouveauxDemandes)


    })
  }
  FermerSansResolu(numeroespace){

    this.auth.fermersansResolu(numeroespace).subscribe(
      resp=>{

        this.espaceconsulter=resp;
        /*this.etatespace=this.espaceconsulter.etatEspace;
        console.log(this.etatespace);*/
      }
    );
  }

  EspaceFermerInterventionResolu(numeroespace){
  this.auth.EspaceFermerInterventionResolu(numeroespace).subscribe(
        resp=>{

          this.espaceconsulter=resp;
          /*this.etatespace=this.espaceconsulter.etatEspace;
          console.log(this.etatespace);*/
        }
      );

  }

  HandleResult(message){
    if (message.body!=undefined) {
      let messageResult= JSON.parse(message.body);

    //  console.log(message);

        this.messagesNew.push(messageResult);

    }
  }




  MissionEncours(username){
    this.auth.DemandeAsoocierIntervenant(username).subscribe(
      resp=>{
        this.missionEncoursIntervenant=resp;
        console.log(this.missionEncoursIntervenant);
        this.missionEncoursInter=this.missionEncoursIntervenant;
        console.log(this.missionEncoursInter)
        this.nbredemessageintervenant=this.missionEncoursInter.length;

      }
    )
  }



  DemandesEncours(){

    this.auth.DemandesEncours().subscribe(resp=>{
      this.messageEnCours=resp;

    // this.messagesNew=this.messageEnCours;
    console.log(this.messageEnCours);
    })

  }

  commentaireEspace(idespace){
  this.auth.EspaceDemande(idespace).subscribe(resp=>{
  this.espaceDemande=resp;
  console.log(this.espaceDemande);
  this.messagesNew=this.espaceDemande.commentaire;

  })

  }
  EspaceUserEncours(){
    this.auth.DemandeEncousUser(this.page,this.auth.username).subscribe(
      resp => {
        this.espacesusers=resp['content'];
        this.totalPage=new Array(resp['totalPages']);

        console.log(this.espacesusers)
        console.log(this.totalPage)
       // this.espaceEncours=this.espacesusers.commentaireEspace();


      }
    )
  }

  rejeterNotifier(){
      this.auth.rejeterNotifier(this.pagednotifier,this.auth.username).subscribe(
        resp => {
          this.demandesRejetes=resp['content'];
          this.nbredemandeRejeter=this.demandesRejetes.length;
          this.totalPageDemandeNotifier=new Array(resp['totalPages']);
          this.pagetotaleDNotifier=this.totalPageDemandeNotifier.length
          console.log(this.totalPageDemandeNotifier.length)


        }
      )


  }

}
