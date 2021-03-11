import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-interventionsnonresolus',
  templateUrl: './interventionsnonresolus.component.html',
  styleUrls: ['./interventionsnonresolus.component.css']
})
export class InterventionsnonresolusComponent implements OnInit {
  pagesnr=0;
  serviceNonResolu;
  totalPageSNR;
  espaceresnew;
  espaceMessages;
  webSocket:WebSocketAPI;

  constructor(public auth:AuthentificationService,public router:Router) {
    this.webSocket=new WebSocketAPI(this.auth);
   }

  ngOnInit(): void {
    this.webSocket.connecter();
    this.ServiceNonResolu();
  }

  ServiceNonResolu(){

    this.auth.InterventionNonResolu(this.pagesnr).subscribe(
    resp => {
  
             this.serviceNonResolu=resp['content'];
             this.totalPageSNR=new Array(resp['totalPages']);
             console.log(this.serviceNonResolu)
             console.log(this.totalPageSNR)
                     // this.espaceEncours=this.espacesusers.commentaireEspace();
  
  
                    }
                  )
                 // this.tabSr=1;
  
    }

    setpage(i,event:any){
      event.preventDefault();
      this.pagesnr=i;
      this.ServiceNonResolu();

    }
    fermertabNRs(){
      this.router.navigate(["respInfo/tableauBordRespoInfo"]);

    }

    consulterEspace(esp){
      /* pris en consideration */
    this.espaceresnew=undefined;
    this.espaceMessages=esp.commentaire;
    this.webSocket.messagesNew=esp.commentaire;
    let numeroespace=esp.idEspace;
    this.router.navigate(['respInfo/espaceRespoConsulterNonResolu/'+btoa(numeroespace)]);
   // this.espacevue=1;
   // this.encours=0;
 //   this.numeroespace=esp.idEspace;
    //this.webSocket.commentaireEspace(this.numeroespace);
    console.log(this.espaceMessages);
    }

}
