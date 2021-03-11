import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ModelDemande } from 'src/Entities/ModelDemande';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-nouveau-demande',
  templateUrl: './nouveau-demande.component.html',
  styleUrls: ['./nouveau-demande.component.css']
})
export class NouveauDemandeComponent implements OnInit {
  listPanneParent:any=[];
  modepanne=0;
  modechercher=0;
  listSousCategories:any=[];
  modechange=0;
  modeMateriel=0;
 listMateriels:any=[];
 username='';
 modelDemande:ModelDemande=new ModelDemande();
 webSocketAPI:WebSocketAPI;

  constructor(public auth:AuthentificationService,public flashmessage:FlashMessagesService) { 

  }

  ngOnInit(): void {
    this.webSocketAPI=new WebSocketAPI(this.auth);
    this.webSocketAPI.connecter();

    this.username=this.auth.username;
    this.MaterielNames();
    this.AllParentCategoeie();
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
     //this.webSocketAPI._send(this.modelDemande);
     if(this.modelDemande.image.length<=1048576){
     this.webSocketAPI.envoyerDemandewb(this.modelDemande);
     this.flashmessage.show('Votre demande est envoyer avec success',{cssClass:'alert-success',timeout:4000});
  
  }
  else{
  console.log("message non envoyer")}
  
  
  
      /* this.auth.ResetDemande(this.modelDemande).subscribe(
          resp=>{
         this.n=resp;
         console.log(this.n);
      })*/
      this.modelDemande=new ModelDemande();
      this.modechange=0;
     
  
  
  
  
    
  }
  readThis(inputValue: any): void {

    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onload= (e) => {
      let base64Image = myReader.result;
      this.modelDemande.image = base64Image.toString();
      console.log(this.modelDemande.image.length)
    }


     myReader.readAsDataURL(file);


  }

   onFileChanged($event) {
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
  MaterielNames(){
    this.auth.findByAllMaterielNames(this.username).subscribe(
      resp=>{
        this.modeMateriel=1;
        this.listMateriels=resp;

      }
      ,error => {}
    )
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
  notreParentch(event){
   // this.modelch=event;
    this.modechercher=1;

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

  AllParentCategoeie(){
    /* ona prendre cette methode */
    this.auth.ChercherParentCategorie().subscribe(resp=> {
      this.listPanneParent=resp;
      this.modepanne=1;
    })
  }

}
