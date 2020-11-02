import { Component, OnInit } from '@angular/core';
import {WebSocketAPI} from '../../SocketAngular/WebSocketAPI';
import {AppComponent} from '../app.component';
import {AuthentificationService} from '../../services/authentification.service';
import {MesMessage} from '../../Entities/MesMessage';
import {ModelDemande} from '../../Entities/ModelDemande';
import {Router} from '@angular/router';
import {EnvoyerMessage} from '../../Entities/EnvoyerMessage';


@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {
  date =new  Date();
  blob:Blob;
  demandeEncousUser;
  encoursuser=0;
  espaceMessagesuser1;
  demandeRejeterUser;
  numeroespace;
  espacevueuser;
  demandeEncoursuser;
  listdemandeEncoursuser:Array<any>;
  dmresolu;
  demandeUserRejeter=0;


  responsable;
  webSocketAPI: WebSocketAPI;
  auth:AuthentificationService;
  messages:MesMessage[]=[];
  messageResult;
  modeMateriel;
  listMateriels;
  username;
  modepanne;
  listPanneParent;
  listSousCategories;
  modechange;
  selectedFile:File;
  test;
  n;
  userespace=0;
  nouveauxmessage;
  base64Image;
  url;
  modelDemande:ModelDemande=new ModelDemande();
  router:Router;
  envoyerMessage: EnvoyerMessage = new EnvoyerMessage();


  constructor(authentificationService:AuthentificationService,rout:Router) {
    this.auth=authentificationService;
    this.router=rout;

  }


  ngOnInit(): void {
    this.webSocketAPI=new WebSocketAPI(this.auth);
    this.webSocketAPI.connecter();
    this.username=this.auth.username;
    this.MaterielNames();
    this.AllParentCategoeie();

  }
  DemandeResolus(){
  this.dmresolu=1;

    this.auth.DemandeResolus().subscribe(resp=>{
      this.demandeEncoursuser=resp;

      console.log(this.demandeEncoursuser);



    });
  }
  DemandeRejeterUser(){
    this.auth.DemandeRejeterUser().subscribe(resp=>{
      this.demandeRejeterUser=resp;
      if(this.demandeRejeterUser!=undefined){
        this.demandeUserRejeter=1;

      }
     // this.listdemandeEncoursuser=this.demandeRejeterUser;
      console.log(this.demandeRejeterUser);


    });
  }


  fermerEspace(){
    this.espacevueuser=0;

  }
  FermerSansResolu(){
    console.log(this.numeroespace);
   // this.auth.fermersansResolu(this.numeroespace).subscribe();
  this.webSocketAPI.FermerSansResolu(this.numeroespace);
  this.espacevueuser=0;
  }

  EspaceFermerInterventionResolu(){
   this.webSocketAPI.EspaceFermerInterventionResolu(this.numeroespace);
   this.espacevueuser=0;
  }

  EnvoyerMessages(msg){
    this.envoyerMessage.idespace = this.numeroespace;
    this.envoyerMessage.username = this.auth.username;
    this.envoyerMessage.message=msg.message;
    this.webSocketAPI._sendVersEspace(this.envoyerMessage);
    this.envoyerMessage= new EnvoyerMessage();
  }
  EnvoyerDemande(Demande){
    this.modelDemande.type=Demande.type
    this.modelDemande.etat=Demande.etat;
    this.modelDemande.description=Demande.description;
    this.modelDemande.materiel=Demande.materiel;
    this.modelDemande.service=Demande.service;
    this.modelDemande.userDemander=this.auth.username;
    console.log(this.modelDemande.image);
  // const reader = new FileReader();
  // file.append("message",JSON.stringify(this.modelDemande));
   /*   const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = () => {
        this.selectedFile=  reader.result;
       };
       console.log(reader.readAsDataURL(file));

    this.webSocketAPI._send(this.modelDemande,file);
*/
this.webSocketAPI._send(this.modelDemande);


/* this.auth.ResetDemande(this.modelDemande).subscribe(
    resp=>{
   this.n=resp;
   console.log(this.n);
})*/
    this.modelDemande=new ModelDemande();
    this.modechange=0;



  }
  MaterielNames(){
    this.auth.findByAllMaterielNames(this.username).subscribe(
      resp=>{
        this.modeMateriel=1;
        this.listMateriels=resp;

      }
      ,error => {}
    )
  }

  AllParentCategoeie(){
    this.auth.ChercherParentCategorie().subscribe(resp=> {
      this.listPanneParent=resp;
      this.modepanne=1;
    })
  }
  handleMessage(message){
    if (message.body) {
      this.messageResult = JSON.parse(message.body);
      console.log(this.messageResult);
      this.messages.push(this.messageResult);
    }

  }
  //Gets called when the user selects an image
  public onFileChanged($event) {
    this.readThis($event.target);

    //Select File
//console.log(event.target.value);
  // let reader=new FileReader();
   /*
   reader.onload=(event:ProgressEvent)=>{
     this.url=(<FileReader>event.target).result;
     console.log(this.url);
   }
   console.log(reader.readAsDataURL(event.target.files[0]));

    */
  //  this.selectedFile=event.target.files[0];

   // reader.readAsDataURL(this.selectedFile);

  }
  readThis(inputValue: any): void {

    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onload= (e) => {
      this.base64Image = myReader.result;
      this.modelDemande.image = this.base64Image.toString();
      console.log(this.modelDemande.image.length)
    }


     myReader.readAsDataURL(file);


  }



  notreParent(event){
    this.modelDemande.type=event;
    console.log(this.modelDemande.type);
    this.auth.ChercherSousCategorieNames(event).subscribe(
      resp=>{


        this.listSousCategories=resp;
        if(this.listSousCategories!=undefined){
          this.modechange=1;


        }
        else {
          this.modechange=1;
          this.listSousCategories.push(event);
        }
      }
    )


  }
  consulterEspaceUser(espace){
    this.espaceMessagesuser1=espace.commentaire;
    this.webSocketAPI.messagesNew2=espace.commentaire;

    this.numeroespace=espace.idEspace;
    this.webSocketAPI.commentaireEspace(this.numeroespace);
    this.espacevueuser=1;
    this.userespace=0;

    console.log(this.espaceMessagesuser1);

  }
  DemandeUserEnCours(){
        this.webSocketAPI.EspaceUserEncours();
        this.userespace=1;
  }
  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/login")
  }

}

