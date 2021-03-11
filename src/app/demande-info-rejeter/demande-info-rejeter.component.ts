import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-demande-info-rejeter',
  templateUrl: './demande-info-rejeter.component.html',
  styleUrls: ['./demande-info-rejeter.component.css']
})
export class DemandeInfoRejeterComponent implements OnInit {
  demandechercherRejeter;
  photos;
  index;
  webSocketAPI:WebSocketAPI;
  respoRejeterNotifier;

  constructor(public auth:AuthentificationService,public router:ActivatedRoute,public route:Router) {
    this.webSocketAPI=new WebSocketAPI(this.auth);
    this.webSocketAPI.connecter();
   }

  ngOnInit(): void {
    let id=atob(this.router.snapshot.params.iddemandeRejeter);
    this.auth.ChercherByidDemande(id).subscribe(
      resp => {
        this.demandechercherRejeter = resp;
        

       // this.consulter = 1;
        this.photos = atob(this.demandechercherRejeter.panne.photos);
        console.log(this.demandechercherRejeter)
        console.log(this.photos);
        this.auth.DemandeRejeterLue(this.demandechercherRejeter.id_Demande).subscribe(
          resp=>{
          this.respoRejeterNotifier=resp;
          console.log(this.respoRejeterNotifier);
         }
   
         
        )
        ;



      }
      , error => {

      }
    );

  }
  fermerComplet(){
    this.route.navigate(['user/nouveauDemande'])
  }

}


      


