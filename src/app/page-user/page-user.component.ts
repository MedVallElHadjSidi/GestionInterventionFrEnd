import { Component, OnInit } from '@angular/core';
import {WebSocketAPI} from '../../SocketAngular/WebSocketAPI';
import {AppComponent} from '../app.component';
import {AuthentificationService} from '../../services/authentification.service';
import {MesMessage} from '../../Entities/MesMessage';
import {ModelDemande} from '../../Entities/ModelDemande';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvoyerMessage} from '../../Entities/EnvoyerMessage';
import {ModelRecherche} from '../../Entities/ModelRecherche';
import  * as $ from "jquery";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {

  modelChercher:ModelRecherche=new ModelRecherche();
  respoRejeterNotifier;
  idDemandeNotiierLue;
  modelch="";
  consulter=0;
  modechercher=0;
  demandechercherRejeter;
  index;
  chercher=0;
  achercher=0;
  demandeChercher;
  totalpagechc;
  chercherRappelService;
  listDemandeChercher=[];
  totalPageDr;
  pageDr=0;
  totalPageDrj;
  pageDrj=0;
  demandeNonResoluesUser;
  totalepageDnr;
  pageDnr=0;
  date =new  Date();
  blob:Blob;
  alert=0;
  demandenonresolu=0;
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
  demandeUserEnAttente;
  totalpageDe;
  pageDe=0;
  demandeEnattente=0;
  consulterHs=0;
  consulterListHs;
  totalpagehs;
  pagehs=0;


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
  photos;
  modelDemande:ModelDemande=new ModelDemande();
  router:Router;
  envoyerMessage: EnvoyerMessage = new EnvoyerMessage();


  constructor(authentificationService:AuthentificationService,rout:Router,private flashmessage:FlashMessagesService,public routch:ActivatedRoute) {
    this.auth=authentificationService;
    this.router=rout;

  }


  ngOnInit(): void {
    this.webSocketAPI=new WebSocketAPI(this.auth);
    this.webSocketAPI.connecter();
    this.username=this.auth.username;
    this.webSocketAPI.rejeterNotifier();
   // this.MaterielNames();
  //  this.AllParentCategoeie();
    this.router.navigate(['user/nouveauDemande']);
  }
/*
  DemandeResolus(){
    /* demande en consideration 
  this.dmresolu=1;

    this.auth.DemandeResolus(this.pageDr).subscribe(resp=>{
      this.demandeEncoursuser=resp['content'];
      this.totalPageDr=new Array(resp['totalPages']);

      console.log(this.demandeEncoursuser);





    });
  }
  */
  /* setpage DR*/
  /*
  setpageDr(i,event:any){
    /* pris en charge 
    event.preventDefault();
    this.pageDr=i;
    this.DemandeResolus();
  }*/
  demandesEnattentes(){
    this.router.navigate(['user/demandesEnattente']);
  }
 /* DemandeUserEnAttente(){
    /* demande en attente
    /*ona pris 

    this.auth.DemandeUserEnAttente(this.pageDe).subscribe(resp=>{
      this.demandeUserEnAttente=resp['content'];
      console.log(this.demandeUserEnAttente);
      this.totalpageDe=new Array(resp['totalPages']);
      this.demandeEnattente=1;
    });

  }
  */
  fermerHistoriques(){
  this.consulterHs=0;

  }
 /* ConsulterHistoriqueUser(){
    /* pris en consideration 
  this.auth.ConsulterHistoriqueUser(this.pagehs).subscribe(resp=>{
        this.consulterListHs=resp['content'];
        console.log(this.consulterListHs);
        this.totalpagehs=new Array(resp['totalPages']);

        this.consulterHs=1;
      });

  }
  */
  /*
   setpageDHs(i,event:any){
     /* pris en mise ajours 
      event.preventDefault();
      this.pagehs=i;
      this.ConsulterHistoriqueUser();
    }
    */

  fermertabuserEnAttente(){
    this.demandeEnattente=0;
  }
  /*
  setpageDE(i,event:any){
    /* pris enconsideration 
    event.preventDefault();
    this.pageDe=i;
    this.DemandeUserEnAttente();
  }
  */
/*
  demandeNonResoluUser(){
    /* prie en mise a jours 
    this.auth.DemandeUserNonResolus(this.pageDnr).subscribe(

      resp=>{
        this.demandeNonResoluesUser=resp['content'];
        this.totalepageDnr=new Array(resp['totalPages']);
        this.demandenonresolu=1;

      }
    )

  } */
  /*
  setpageDnr(i,event:any){
    /* pris en consideration 
    event.preventDefault();
    this.pageDnr=i;
    this.demandeNonResoluUser();;
  }
  */
  fermertabuserNonResolu(){

    this.demandenonresolu=0;
  }
  
/*

  DemandeRejeterUser(){
    /* pris en consideration 
    this.auth.DemandeRejeterUser(this.pageDrj).subscribe(resp=>{
      this.demandeRejeterUser=resp['content'];
      this.totalPageDrj=new Array(resp['totalPages']);
      if(this.demandeRejeterUser!=undefined){
        this.demandeUserRejeter=1;

      }
     // this.listdemandeEncoursuser=this.demandeRejeterUser;
      console.log(this.demandeRejeterUser);

    });
  }*/
  /*
  setpageDrj(i,event:any){
    /* pris en consideration 
    event.preventDefault();
    this.pageDrj=i;
    this.DemandeRejeterUser();
  }
*/
  fermerEspace(){
    this.espacevueuser=0;

  }
  fermertabuserEnc(){
  this.userespace=0;}
  fermertabuserRej(){
  this.demandeUserRejeter=0;}
  fermertabuserResolu(){

  this.dmresolu=0;}
  /*
  FermerSansResolu(){
    /* prend en consideration 
  if (confirm("vous voulez fermer cette Demande sans Resolution")) {
    console.log(this.numeroespace);
   // this.auth.fermersansResolu(this.numeroespace).subscribe();

  this.webSocketAPI.FermerSansResolu(this.numeroespace);
  this.espacevueuser=0;
  }
  }
  */
  EspaceVide(){
    alert("Espace vide");

  }
  demandesRejeter(){
    this.router.navigate(['user/demandesRejeter']);
  }

/*
  EspaceFermerInterventionResolu(){
    /* prend en consideration
  if (confirm("vous voulez fermer cette  Demande avec Resolution !")) {
   this.webSocketAPI.EspaceFermerInterventionResolu(this.numeroespace);
   this.espacevueuser=0;
  }
  }*/
/*
  EnvoyerMessages(msg){
    /* pis en mise ajours 
    this.envoyerMessage.idespace = this.numeroespace;
    this.envoyerMessage.username = this.auth.username;
    this.envoyerMessage.message=msg.message;
    this.webSocketAPI._sendVersEspace(this.envoyerMessage);
   // this.webSocketAPI.envoyerDemandewb(this.envoyerMessage);
    this.envoyerMessage= new EnvoyerMessage();
  }*/
  /*
  EnvoyerDemande(Demande){
    /* cette methode est resolu prendes 
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

   //this.webSocketAPI._send(this.modelDemande);
   if(this.modelDemande.image.length<=1048576){
   this.webSocketAPI.envoyerDemandewb(this.modelDemande);
   this.flashmessage.show('Votre demande est envoyer avec success',{cssClass:'alert-success',timeout:4000});

}
else{
console.log("message non envoyer")}



     this.auth.ResetDemande(this.modelDemande).subscribe(
        resp=>{
       this.n=resp;
       console.log(this.n);
    })
    this.modelDemande=new ModelDemande();
    this.modechange=0;
    this.alert=1;




  }
  */
  fermerAlert(){
    this.alert=0;
  }
  /*
  MaterielNames(){
    this.auth.findByAllMaterielNames(this.username).subscribe(
      resp=>{
        this.modeMateriel=1;
        this.listMateriels=resp;

      }
      ,error => {}
    )
  }
  */

  /*AllParentCategoeie(){
    /* ona prendre cette methode 
    this.auth.ChercherParentCategorie().subscribe(resp=> {
      this.listPanneParent=resp;
      this.modepanne=1;
    })
  }
  */
  handleMessage(message){
    if (message.body) {
      this.messageResult = JSON.parse(message.body);
      console.log(this.messageResult);
      this.messages.push(this.messageResult);
    }

  }
  //Gets called when the user selects an image
 /* public onFileChanged($event) {
    /*  yes prenez ca 
    this.readThis($event.target);

    //Select File
//console.log(event.target.value);
  // let reader=new FileReader();
   
   reader.onload=(event:ProgressEvent)=>{
     this.url=(<FileReader>event.target).result;
     console.log(this.url);
   }
   console.log(reader.readAsDataURL(event.target.files[0]));

    
  //  this.selectedFile=event.target.files[0];

   // reader.readAsDataURL(this.selectedFile);

  }*/
 /* readThis(inputValue: any): void {
/* prenez en charge 
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onload= (e) => {
      this.base64Image = myReader.result;
      this.modelDemande.image = this.base64Image.toString();
      console.log(this.modelDemande.image.length)
    }


     myReader.readAsDataURL(file);


  }
  */
  /*
  notreParentch(event){
    /* on a prendre cette methode
    this.modelch=event;
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

*/
/*
  notreParent(event){
    /* prenez ca  
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
  */
  /*
  consulterEspaceUser(espace){
    /* pris en consderation 
    this.espaceMessagesuser1=espace.commentaire;
    this.webSocketAPI.messagesNew2=espace.commentaire;

    this.numeroespace=espace.idEspace;
    this.webSocketAPI.commentaireEspace(this.numeroespace);
    this.espacevueuser=1;
    this.userespace=0;

    console.log(this.espaceMessagesuser1);

  }
  */
  DemandeUserEnCours(){
        this.webSocketAPI.EspaceUserEncours();
        this.userespace=1;

  }
  /*
  setpage(i,event:any){
    /* pris en consideration
    event.preventDefault();
    this.webSocketAPI.page=i;
    this.DemandeUserEnCours();


  }
*/


  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/login")
  }
  ChercherDemande(){
    this.chercher=1;

  }
  /*
  DemandeRecherche(demande){
    /* prend en con sideration 
    this.achercher=1;
    console.log(demande);
    this.modelch=demande.panne;

    this.modelChercher.panne=demande.panne;
    this.modelChercher.etat=demande.etat;
    this.modelChercher.datechercher=demande.datechercher;
    this.modelChercher.username=this.auth.username;
    this.modelChercher.page=0;


    this.auth.ChercherComplet(this.modelChercher).subscribe(resp=>{
    this.chercherRappelService=resp;
    this.listDemandeChercher=resp['content'];
    this.totalpagechc=new Array(resp['totalPages']);

      console.log(this.listDemandeChercher);


    });


  }
*/

  fermerChercherComplet(){
    this.chercher=0;

    this.achercher=0;
    this.modelChercher=new ModelRecherche();
    this.modechercher=0;
    this.modechange=0;

  }
  /*
  setpagechc(i,event){
    /* prenez en consederation
    event.preventDefault();
    this.modelChercher.page=i;
    this.DemandeRecherche(this.modelChercher);

  }
  */

  fermerDemandeChercher(){
    this.achercher=0;
  }
  fermerDemandeChercherRejeter(){
  this.consulter=0;
  }
  Consulter(id, index) {
    /* prend en consideration */
    let mv=document.getElementById("mv");
    mv.click();
    let idDmd=0;
      console.log(id);
      console.log(index)
      this.index = index;
      this.webSocketAPI.demandesRejetes.splice(this.index, 1)
      console.log(this.webSocketAPI.demandesRejetes.length)
      this.index = 0;
      this.webSocketAPI.nbredemandeRejeter = this.webSocketAPI.nbredemandeRejeter - 1;
      this.router.navigate(["user/infoDemandeRejeter/"+btoa(id)]);
      


/*
      this.auth.ChercherByidDemande(id).subscribe(
        resp => {
          this.demandechercherRejeter = resp;
          

          this.consulter = 1;
          this.photos = atob(this.demandechercherRejeter.panne.photos);
          console.log(this.demandechercherRejeter)
          console.log(this.photos);
          this.auth.DemandeRejeterLue(this.demandechercherRejeter.id_Demande).subscribe(
            resp=>{
            this.respoRejeterNotifier=resp;
            console.log(this.respoRejeterNotifier);
           }
     
           
          )
          



        }
        , error => {

        }
      );
     */

   

      


    }
    next(){

    $('.dropdown-menu2').hide();



        this.nextDemandeRejeter();
    }
    nextDemandeRejeter(){


    this.webSocketAPI.pagednotifier=this.webSocketAPI.pagednotifier+1;
    this.webSocketAPI.rejeterNotifier();
        $('.dropdown-menu2').show();

    }
    PrevioussDemandeRejeter(){
    this.webSocketAPI.pagednotifier=this.webSocketAPI.pagednotifier-1;
        this.webSocketAPI.rejeterNotifier();
    }

}

