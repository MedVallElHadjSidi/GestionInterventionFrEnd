import { Component, OnInit } from '@angular/core';
import {WebSocketAPI} from '../../SocketAngular/WebSocketAPI';
import {AuthentificationService} from '../../services/authentification.service';
import * as Chart from 'chart.js';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvoyerMessage} from '../../Entities/EnvoyerMessage';
import {ModelDemandeIntervenant} from '../../Entities/ModelDemandeIntervenant';
import {NotificationIntervenant} from '../../Entities/NotificationIntervenant';

@Component({
  selector: 'app-page-respo-info',
  templateUrl: './page-respo-info.component.html',
  styleUrls: ['./page-respo-info.component.css']
})
export class PageRespoInfoComponent implements OnInit {
  pagesr=0;
  totalPageSR;
  data=[];
  listNversion=[];
  t;
  intervenantNamesLibre;
  intervenantLibre=[];
  nouveauxDemandeEncours:any;
  espaceMessages;
  numeroIntervention;
  interventionDmd;
  espacevue=0;
  encours=0;
  canvas: any;
  ctx: any;
  serviceResolu;

  affectaionIntervennat=0;
  numeroespace;
  avantEspace=0;
  demandeVersRespo;
  modelDemandeIntervenant:ModelDemandeIntervenant =new ModelDemandeIntervenant();
  notificationIntervenant :NotificationIntervenant=new NotificationIntervenant();
  interventions;
  espaceinter = 0;
  sms;
  msgnew;
  fr=1;
  nrs;
  notification;
  webSocket: WebSocketAPI;
  auth: AuthentificationService;
  coonnecter = false;
  nouveauxDemandes;
  Message;
  demande;
  consulter = 0;
  photos;
  index;
  espaceresnew;
  envoyerMessage: EnvoyerMessage = new EnvoyerMessage();
  nsnr;
  nsrs;
  tabSr=0;
  listResolu;
  listNResolu;


  constructor(authentificationService: AuthentificationService, public  router: Router ,public route:ActivatedRoute) {
    this.auth = authentificationService;


    this.webSocket = new WebSocketAPI(this.auth);


  }

  ngOnInit(): void {
    //this.bar();
    this.nbrenr();
    this.webSocket.connecter();
    this.webSocket.NouveauxDemande();
  //  this.router.navigate(["respInfo/tableauBordRespoInfo"])
  this.router.navigate(["respInfo/tableauBordRespoInfo"]);



   /* this.webSocket.DemandesEncours();
*/

  }
  fermertabrespo(){
  this.encours=0;}

  consulterEspace(esp){
    /* pris en consideration */
  this.espaceresnew=undefined;
  this.espaceMessages=esp.commentaire;
  this.webSocket.messagesNew=esp.commentaire;
  this.espacevue=1;
  this.encours=0;
  this.numeroespace=esp.idEspace;
  this.webSocket.commentaireEspace(this.numeroespace);
  console.log(this.espaceMessages);
  }
  fermerEspace(){
  this.espacevue=0;
    this.encours=1;
    this.espaceinter=0;
  }
  espaceInterRespo(idDemande){
    /* pris en consideration */
    this.avantEspace=1;
    this.demandeVersRespo=idDemande;
    this.modelDemandeIntervenant.idDemande=idDemande;
    this.IntervenantNamesLibre();


  }
  fermerAlert(){
    this.affectaionIntervennat=0;
  }
  EnvoyerIntervention(inter){
    /* prend en consideration */
  console.log(inter);
  let intervenant=inter.intervenant;
  let idIntervention;
  console.log(intervenant);
  this.modelDemandeIntervenant.intervenant=intervenant;
  this.modelDemandeIntervenant.respo=this.auth.username;
  console.log(this.demandeVersRespo);

  this.auth.InterventionViaIintervenant(this.modelDemandeIntervenant).subscribe(

    resp=>{
      this.interventionDmd=resp;
      console.log(this.interventionDmd);
           this.notificationIntervenant.idIntervention=this.interventionDmd;
            this.notificationIntervenant.intervenant=intervenant;
            console.log(this.notificationIntervenant);
            this.webSocket._sendIntervenant(this.notificationIntervenant);
      alert("L'affectation mission avec succes pour "+ this.notificationIntervenant.intervenant);
      this.notificationIntervenant=new NotificationIntervenant();
             this.consulter=0;
             this.affectaionIntervennat=1;



    },error => {

    }
  )




  }
  Consulter(id, index) {
    console.log(id);
    console.log(index)
    this.index = index;
    this.webSocket.nouveauxDemandes.splice(this.index, 1)
    console.log(this.webSocket.nouveauxDemandes.length)
    this.index = 0;
    this.webSocket.nbredemessage = this.webSocket.nbredemessage - 1;

   // this.router.navigate(["/"+btoa(id)]);
    this.router.navigate(["respInfo/consulterNouveauDemande/"+btoa(id)]);
/* pris en consideration */

  //  this.auth.ChercherByidDemande(id).subscribe(
   //   resp => {
   //     this.demande = resp;

  //      this.consulter = 1;
  //      this.photos = atob(this.demande.panne.photos);
  //      console.log(this.demande)
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


    //  }
    //  , error => {
   //     this.Message = error.Message;
  //    }
  //  )


  }

 /* DemandeRejeter(d) {
    /* pris en consideration 
    if (confirm("vous voulez rejeter cette Demande")) {
     /* this.auth.DemandeRejeter(d).subscribe();
      console.log(d);
      this.webSocket._sendVersRejeter(d);
      this.consulter = 0;
    }

  }
*/
  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/login")
  }

 /* espaceRespp(id) {
    /* pris en consideration 
    console.log(id);
    this.espaceinter = 1;
    this.consulter = 0;
    console.log(id);
    console.log(this.auth.username);
    let idDemande = id;
     this.webSocket.messagesNew=[];
    console.log(idDemande)

    this.auth.EspcaeIDIntervention(idDemande, this.auth.username).subscribe(resp => {

        this.espaceresnew = resp;
        this.webSocket.nv_espace_message=1;
        console.log(this.webSocket.nv_espace_message);
        console.log(this.espaceresnew);
      }
    );


  }*/
  EnvoyerMessages(msg){
    /* pris en consideration */

    this.envoyerMessage.idespace = this.numeroespace;
    this.envoyerMessage.username = this.auth.username;
    this.envoyerMessage.message=msg.message;
      this.webSocket._sendVersEspace(this.envoyerMessage);
      this.envoyerMessage = new EnvoyerMessage();


  }
  DemandeEncours(){

    this.auth.DemandesEncours().subscribe(resp=>{
      this.nouveauxDemandeEncours=resp;
      console.log(this.nouveauxDemandeEncours)
      this.encours=1;

    })
  }

  EnvoyerMessage(meesse) {
    /* pris enconsideration */
    this.envoyerMessage.idespace = this.espaceresnew;
    this.envoyerMessage.username = this.auth.username;

    console.log(meesse);
    console.log(meesse.votremessage);

    this.envoyerMessage.message = meesse.message;
    console.log(this.envoyerMessage);
    this.webSocket._sendVersEspace(this.envoyerMessage);
    this.envoyerMessage = new EnvoyerMessage();

    /* this.auth.EnvoyerDemandeEspace(this.envoyerMessage).subscribe(resp=>{
     this.msgnew=resp})

      this.envoyerMessage=new EnvoyerMessage();

    }*/


    /* DemandeRejeter(d){
       this.auth.DemandeRejeter(d).subscribe();
       console.log(d);
       this.consulter=0;


     }



     espaceRespp(id){
       console.log(id);
       this.espaceinter=1;
       this.consulter=0;
     }
   */
  }
  IntervenantNamesLibre(){
    this.auth.IntervenantLibreServiceInfo().subscribe(resp=>{
      this.intervenantNamesLibre=resp;
      this.intervenantLibre=this.intervenantNamesLibre;

    })
  }
 /* femerAvecAttend(id){
    /* pris en consideration 
   this.auth.ChercherByidDemande(id).subscribe(
        resp => {
          this.demande = resp;}
          )
          this.webSocket.nouveauxDemandes.push(this.demande);
          this.webSocket.nbredemessage=this.webSocket.nbredemessage+1;
  this.consulter=0;
  console.log(id);
  this.avantEspace=0;
  }*/
  nbrenr(){

  this.auth.NombreInterventionNonResolu().subscribe(resp=>{
  this.nsnr=resp;
  let n=this.nsnr;
  console.log(n)
  });
  console.log(this.nsnr)

  }

  ServiceResolu(){

  this.auth.ServiceResolu(this.pagesr).subscribe(
  resp => {

           this.serviceResolu=resp['content'];
           this.totalPageSR=new Array(resp['totalPages']);
           console.log(this.serviceResolu)
           console.log(this.totalPageSR)
                   // this.espaceEncours=this.espacesusers.commentaireEspace();


                  }
                )
                this.tabSr=1;

  }
  setpage(i,event:any){
    /* pris en consideration */
      event.preventDefault();
      this.pagesr=i;
      this.ServiceResolu();

    }
  fermertabRs(){
  this.tabSr=0;


    }



  fermertabBord(){
  this.fr=0;
  }

  bar() {
  this.fr=1;
     this.auth.NombreInterventionrResolu().subscribe(
              resp=>{
              this.listResolu=resp;
              console.log(this.listResolu)
              this.data.push(this.listResolu);

              }
              );

       this.auth.NombreInterventionEncours().subscribe(
       resp=>{this.t=resp;
       console.log(this.t)
       this.data.push(this.t);

       }
       );
     this.auth.NombreInterventionNonResolu().subscribe(
        resp=>{this.listNResolu=resp;
        console.log(this.listNResolu);
        this.data.push(this.listNResolu);

        }
        );

    //   this.canvas = document.getElementById("doughnut-chart");
      // this.ctx = this.canvas.getContext("2d");
      console.log(this.data);

         if(document.getElementById('doughnut-chart')!=null ){
           this.canvas = document.getElementById('doughnut-chart');
         this.ctx = this.canvas.getContext('2d');

      const myChart=new Chart(this.ctx, {
        type: 'doughnutChartType',
        data: {
          labels: ["Intervention Resolu", "Intervention EnCours", "Intervention NonResolu"],
          datasets: [
            {
              label: "Tableau bord services",
              backgroundColor: ["#3cba9f",  "#FFFFCC", "#c45850"],
              data:this.data
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Tableau bord services'
          }
        }
      });

    }


}



}

