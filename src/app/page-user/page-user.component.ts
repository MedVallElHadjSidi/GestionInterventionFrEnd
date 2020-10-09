import { Component, OnInit } from '@angular/core';
import {WebSocketAPI} from '../../SocketAngular/WebSocketAPI';
import {AppComponent} from '../app.component';
import {AuthentificationService} from '../../services/authentification.service';
import {MesMessage} from '../../Entities/MesMessage';
import {ModelDemande} from '../../Entities/ModelDemande';
import {FormGroup} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {
  date =new  Date();
  blob:Blob;
  from:FormGroup;
  private userForm: FormGroup;
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
  base64Image;
  url;
  sanitizer:DomSanitizer;
  preview;

  modelDemande:ModelDemande=new ModelDemande();

  constructor(authentificationService:AuthentificationService,sanitizer:DomSanitizer) {
    this.auth=authentificationService
    this.sanitizer=sanitizer
  }


  ngOnInit(): void {

    this.webSocketAPI = new WebSocketAPI(this.auth);
    this.webSocketAPI.connecter();
    this.username=this.auth.username;
    this.MaterielNames();
    this.AllParentCategoeie();





  }
  EnvoyerDemande(Demande){

    this.messages=this.webSocketAPI.messages;
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

 this.auth.ResetDemande(this.modelDemande).subscribe(
    resp=>{
   this.n=resp;
   console.log(this.n);
})
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

}

