import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ModelDemande } from 'src/Entities/ModelDemande';
import {ModelEditDemande} from 'src/Entities/ModelEditDemande';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-edit-demande-user',
  templateUrl: './edit-demande-user.component.html',
  styleUrls: ['./edit-demande-user.component.css']
})
export class EditDemandeUserComponent implements OnInit {
 
  materielPanne;
  materielnom;


  listPanneParent:any=[];
  modepanne=0;
  modechercher=0;
  listSousCategories:any=[];
  modechange=0;
  modeMateriel=0;
 listMateriels:any=[];
 username='';
 modelDemande:ModelDemande=new ModelDemande();
 editDemande:ModelEditDemande= new ModelEditDemande();
 webSocketAPI:WebSocketAPI;
 demandeEditModifier;

 


  constructor(public auth:AuthentificationService,public flashmessage:FlashMessagesService,public router:ActivatedRoute,public route:Router) { 

  }

  ngOnInit(): void {
    this.webSocketAPI=new WebSocketAPI(this.auth);
    this.webSocketAPI.connecter();

    this.username=this.auth.username;
    this.MaterielNames();
    this.AllParentCategoeie();


    let id=atob(this.router.snapshot.params.idDemande);
   
    
    this.DemandeEditer(id);


  }

  DemandeEditer(id){
    this.auth.ChercherByidDemande(id).subscribe(
      resp => {
        this.demandeEditModifier = resp;
        this.ChercherDemandeMaterielPanne(this.demandeEditModifier.panne.idPanne);
      
      //  console.log(this.demandeEditModifier)
      this.editDemande.id=id;
      this.editDemande.type=this.demandeEditModifier.panne.categorie.nom;
      //  this.etatpanne=this.demandeEditModifier.panne.etatpanne;
       // this.panne=this.demandeEditModifier.panne.categorie.nom;
       this.editDemande.etat=this.demandeEditModifier.panne.etatPanne;
       this.editDemande.description=this.demandeEditModifier.panne.description;
       this.editDemande.service=this.demandeEditModifier.service.nom;
       this.editDemande.image=atob(this.demandeEditModifier.panne.photos);
       console.log(this.editDemande)


       // this.description=this.demandeEditModifier.panne.description;
     //   this.service=this.demandeEditModifier.service.nom;
     //   console.log(this.service);
      
       // this.consulter = 1;
    //    this.photos = atob(this.demandeEditModifier.panne.photos);
      //  console.log(this.demandeEditModifier);
      //  console.log(this.photos);
       
      }
      , error => {

      }
    );

  }
  

  EnvoyerDemande(Demande){

      this.modelDemande.type=Demande.type;
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
     // console.log(this.modelDemande.image)
      this.editDemande.image=this.modelDemande.image ;
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
   // this.modelDemande.type=event;
   // console.log(this.modelDemande.type);
    
    this.auth.ChercherSousCategorieNames(event).subscribe(
      resp=>{


        this.listSousCategories=resp;
       // console.log(this.listSousCategories)
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
    });

  }
  EditerDemande(demande){
    if (confirm("vous voulez Modifier cette Demande")) {
    this.editDemande.etat=demande.etat;
    this.editDemande.type=demande.type;
    this.editDemande.description=demande.description;
    this.editDemande.service=demande.service;
    this.editDemande.materiel=demande.materiel;


  
    this.auth.EiditerDemande(this.editDemande).subscribe(
      resp=>{
        console.log(resp);
        if(resp!=undefined){
          alert("Demande Modifier avec success");
          this.route.navigate(["user/demandesEnattente"]);
          
      


        }
        else{     alert("slvp! on ne peut pas modifier cette demande");
        this.route.navigate(["user/demandesEnattente"]);

        }
        
      }
    );
    


    }
  }
  ChercherDemandeMaterielPanne(idPanne){
    this.auth.ChercherByidDemandePanneMateriel(idPanne).subscribe(resp=>
      {
        this.materielPanne=resp;
        this.editDemande.materiel=this.materielPanne.nom;
        this.modelDemande.materiel=this.materielPanne.nom;

      })


  }


}
