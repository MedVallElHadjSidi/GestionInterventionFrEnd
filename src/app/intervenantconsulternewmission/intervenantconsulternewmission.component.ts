import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-intervenantconsulternewmission',
  templateUrl: './intervenantconsulternewmission.component.html',
  styleUrls: ['./intervenantconsulternewmission.component.css']
})
export class IntervenantconsulternewmissionComponent implements OnInit {
  webSocket:WebSocketAPI;
  Message ;
  demande ;
  photos;
  consulter;
  intervenantEnMission;

  constructor(public auth:AuthentificationService,public route:ActivatedRoute,public router:Router) { 
    this.webSocket = new WebSocketAPI(this.auth);
   
  
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.idDemande)
    this.webSocket.connecter();
  
    let id=atob(this.route.snapshot.params.id);
   // console.log(id);

   this.Consulter(id);

 
   

  }
  Consulter(id) {

    /* pris en consideration */
    
        this.auth.CherCherByIdNouveauxMissionEnCours(id).subscribe(
          resp => {
            this.demande = resp;
    
            this.consulter = 1;
            this.photos = atob(this.demande.panne.photos);
       
    
    
          }
    
          , error => {
            this.Message = error.Message;
          }
        );
        this.auth.ChangerEtatIntervenant(this.auth.username).subscribe(
          resp=>{this.intervenantEnMission=resp},error=>{}
          );
    
    
      }
    

}
