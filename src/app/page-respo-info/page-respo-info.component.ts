import { Component, OnInit } from '@angular/core';
import {WebSocketAPI} from '../../SocketAngular/WebSocketAPI';
import {AuthentificationService} from '../../services/authentification.service';
import {PageUserComponent} from '../page-user/page-user.component';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import {EnvoyerMessage} from '../../Entities/EnvoyerMessage';

@Component({
  selector: 'app-page-respo-info',
  templateUrl: './page-respo-info.component.html',
  styleUrls: ['./page-respo-info.component.css']
})
export class PageRespoInfoComponent implements OnInit {
  nouveauxDemandeEncours:any;
  espaceMessages;
  espacevue=0;
  encours=1;
  numeroespace;
  avantEspace=0;

  interventions;


  espaceinter = 0;
  sms;
  msgnew;
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


  constructor(authentificationService: AuthentificationService, private  router: Router) {
    this.auth = authentificationService;


    this.webSocket = new WebSocketAPI(this.auth);


  }

  ngOnInit(): void {
    this.webSocket.connecter();
    this.webSocket.NouveauxDemande();
   /* this.webSocket.DemandesEncours();
*/
  }

  consulterEspace(esp){
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

    this.avantEspace=1;

  }
  EnvoyerIntervention(inter){

  }

  Consulter(id, index) {
    console.log(id);
    console.log(index)
    this.index = index;
    this.webSocket.nouveauxDemandes.splice(this.index, 1)
    console.log(this.webSocket.nouveauxDemandes.length)
    this.index = 0;
    this.webSocket.nbredemessage = this.webSocket.nbredemessage - 1;


    this.auth.ChercherByidDemande(id).subscribe(
      resp => {
        this.demande = resp;

        this.consulter = 1;
        this.photos = atob(this.demande.panne.photos);
        console.log(this.demande)
        console.log(this.photos)


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
    this.auth.DemandeRejeter(d).subscribe();
    console.log(d);
    this.consulter = 0;


  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/login")
  }

  espaceRespp(id) {
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


  }
  EnvoyerMessages(msg){
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

    })
  }

  EnvoyerMessage(meesse) {
    this.envoyerMessage.idespace = this.espaceresnew;
    this.envoyerMessage.username = this.auth.username;

    console.log(meesse);
    console.log(meesse.votremessage);

    this.envoyerMessage.message = meesse.message;
    console.log(this.envoyerMessage);
    this.webSocket._sendVersEspace(this.envoyerMessage);

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
}

