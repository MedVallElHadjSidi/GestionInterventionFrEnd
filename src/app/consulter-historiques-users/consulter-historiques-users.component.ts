import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-consulter-historiques-users',
  templateUrl: './consulter-historiques-users.component.html',
  styleUrls: ['./consulter-historiques-users.component.css']
})
export class ConsulterHistoriquesUsersComponent implements OnInit {
  consulterListHs;
  pagehs=0;
  totalpagehs;
  espaceMessagesuser1;
  numeroespace;
  webSocketAPI:WebSocketAPI;

  constructor(public auth:AuthentificationService,public router:Router) { }

  ngOnInit(): void {
    this.webSocketAPI=new WebSocketAPI(this.auth);
    this.webSocketAPI.connecter();
    this.ConsulterHistoriqueUser();
  }

  fermerHistoriques(){
    this.router.navigate(['user/nouveauDemande'])


  }
  ConsulterHistoriqueUser(){
    this.auth.ConsulterHistoriqueUser(this.pagehs).subscribe(resp=>{
          this.consulterListHs=resp['content'];
      //    console.log(this.consulterListHs);
          this.totalpagehs=new Array(resp['totalPages']);
  
        //  this.consulterHs=1;
        });
  
    }
    consulterEspaceUser(espace:any){
      /* pris en consderation */
      if(espace!=undefined){
      this.espaceMessagesuser1=espace.commentaire;
      
      this.webSocketAPI.messagesNew2=espace.commentaire;
  
      this.numeroespace=espace.idEspace;
    
      /*
      this.webSocketAPI.commentaireEspace(this.numeroespace);
  
      console.log(this.espaceMessagesuser1);
      */
   

     this.router.navigate(["user/espaceUserComment/"+btoa(this.numeroespace)]);
      }
      else{
        alert("oooooooooooooooooooo");
      }
  
    }

    setpageDHs(i,event:any){
      /* pris en mise ajours */
       event.preventDefault();
       this.pagehs=i;
       this.ConsulterHistoriqueUser();
     }

}
