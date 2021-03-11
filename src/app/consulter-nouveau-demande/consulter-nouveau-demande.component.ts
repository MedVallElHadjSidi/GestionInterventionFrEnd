import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ModelDemandeIntervenant } from 'src/Entities/ModelDemandeIntervenant';
import { NotificationIntervenant } from 'src/Entities/NotificationIntervenant';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-consulter-nouveau-demande',
  templateUrl: './consulter-nouveau-demande.component.html',
  styleUrls: ['./consulter-nouveau-demande.component.css']
})
export class ConsulterNouveauDemandeComponent implements OnInit {
  photos;
  espaceresnew;
  consulter =0;
  demande:any=[];
  intervenantLibre:any=[];
  Message;
  webSocket:WebSocketAPI;
  avantEspace=0;
  demandeVersRespo;
  modelDemandeIntervenant:ModelDemandeIntervenant =new ModelDemandeIntervenant();
  notificationIntervenant :NotificationIntervenant=new NotificationIntervenant();
  affectaionIntervennat=0;
  interventionDmd;
  constructor(public auth:AuthentificationService,public route:ActivatedRoute,public flashmessage:FlashMessagesService,public router:Router) { 
    this.webSocket = new WebSocketAPI(this.auth);
   
  
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.idDemande)
    this.webSocket.connecter();
  
    let id=atob(this.route.snapshot.params.idDemande);
   // console.log(id);

   this.Consulter(id);

 
   

  }

  IntervenantNamesLibre(){
    this.auth.IntervenantLibreServiceInfo().subscribe(resp=>{
      this.intervenantLibre=resp;
     // this.intervenantLibre=this.intervenantNamesLibre;

    })
  }

  femerAvecAttend(id){
    this.auth.ChercherByidDemande(id).subscribe(
         resp => {
           this.demande = resp;}
           )
           this.webSocket.nouveauxDemandes.push(this.demande);
           this.webSocket.nbredemessage=this.webSocket.nbredemessage+1;

           this.router.navigate(["respInfo"]);
  // this.consulter=0;

 //  console.log(id);
  this.avantEspace=0;
   }
   
   espaceInterRespo(idDemande){
    /* pris en consideration */
    this.avantEspace=1;
    this.demandeVersRespo=idDemande;
    this.modelDemandeIntervenant.idDemande=idDemande;
    this.IntervenantNamesLibre();


  }
   EnvoyerIntervention(inter){
    /* prend en consideration */
  //console.log(inter);
  let intervenant=inter.intervenant;
  let idIntervention;
  //console.log(intervenant);
  this.modelDemandeIntervenant.intervenant=intervenant;
  this.modelDemandeIntervenant.respo=this.auth.username;
 // console.log(this.demandeVersRespo);

  this.auth.InterventionViaIintervenant(this.modelDemandeIntervenant).subscribe(

    resp=>{
      this.interventionDmd=resp;
     // console.log(this.interventionDmd);
           this.notificationIntervenant.idIntervention=this.interventionDmd;
            this.notificationIntervenant.intervenant=intervenant;
            console.log(this.notificationIntervenant);
            this.webSocket._sendIntervenant(this.notificationIntervenant);
      alert("L'affectation mission avec succes pour "+ this.notificationIntervenant.intervenant);

    
      this.notificationIntervenant=new NotificationIntervenant();
          //   this.consulter=0;
             this.affectaionIntervennat=1;
             this.router.navigate(["respInfo/tableauBordRespoInfo"]);



    },error => {

    }
  )




  }


  Consulter(id) {

/* pris en consideration */

    this.auth.ChercherByidDemande(id).subscribe(
      resp => {
        this.demande = resp;

        this.consulter = 1;
        this.photos = atob(this.demande.panne.photos);
      //  console.log(this.demande)
   //     console.log(this.photos)


        /*
                const preview = document.querySelector('img');
                preview.src = this.photos ;

        */


        //  this.photos=this.demande.panne.photos.replace("data:image/jpeg;base64,"," ");
        //  this.url=btoa(this.url);
        //this.displayImage = this.sanitize.bypassSecurityTrustUrl("data:Image/*;base64,"+this.url);


        //  this.retrievedImage=this.sanitize.bypassSecurityTrustUrl(this.photos);
        //this.url= 'data:image/jpg;base64,' + (this.sanitize.bypassSecurityTrustResourceUrl(this.photos) as any).changingThisBreaksApplicationSecurity;

        // this.url=this.demande.panne.photos.replace("data:image/jpeg;base64,"," ");

        // console.log(this.photos);

        // this.url = this.sanitize.bypassSecurityTrustResourceUrl(this.photos);

        //  console.log(this.url);


      }

      , error => {
        this.Message = error.Message;
      }
    )


  }

  DemandeRejeter(d) {
    /* pris en consideration */
    if (confirm("vous voulez rejeter cette Demande")) {
     /* this.auth.DemandeRejeter(d).subscribe();
      console.log(d);*/
      this.webSocket._sendVersRejeter(d);
      this.flashmessage.show('Vous avez rejeter le demande !',{cssClass:'alert-danger',timeout:3000});
  
      this.router.navigate(["respInfo/tableauBordRespoInfo"]);
    //  this.consulter = 0;
    }

  }

  espaceRespp(id) {
    /* pris en consideration */
   // console.log(id);
   // this.espaceinter = 1;
  //  this.consulter = 0;
  //  console.log(id);
  //  console.log(this.auth.username);
    let idDemande = id;
     this.webSocket.messagesNew=[];
    //console.log(idDemande)
  
    this.router.navigate(["respInfo/espaceRespoInitial/"+btoa(idDemande)]);
  
  }


}
