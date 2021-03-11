import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-consulterhistoriquesrespoinfo',
  templateUrl: './consulterhistoriquesrespoinfo.component.html',
  styleUrls: ['./consulterhistoriquesrespoinfo.component.css']
})
export class ConsulterhistoriquesrespoinfoComponent implements OnInit {
  historiquesService;
  pagehs=0;
  totalPageHS;
  espaceresnew;
  espaceMessages;
  webSocket:WebSocketAPI;

  constructor(public auth:AuthentificationService,public router:Router) {
    this.webSocket=new WebSocketAPI(this.auth);



   }

  ngOnInit(): void {
    this.webSocket.connecter;
    this.HistoriquesService();
  }
  fermerHS(){
    this.router.navigate(["respInfo/tableauBordRespoInfo"]);

  }

  
  consulterEspace(esp){
    /* pris en consideration */
  this.espaceresnew=undefined;
  this.espaceMessages=esp.commentaire;
  this.webSocket.messagesNew=esp.commentaire;
  let numeroespace=esp.idEspace;
  this.router.navigate(['respInfo/espaceRespoConsulter/'+btoa(numeroespace)]);
 // this.espacevue=1;
 // this.encours=0;
//   this.numeroespace=esp.idEspace;
  //this.webSocket.commentaireEspace(this.numeroespace);
 // console.log(this.espaceMessages);
  }
  setpageHS(i,event:any){
    event.preventDefault();
    this.pagehs=i;
    this.HistoriquesService();

  }

  HistoriquesService(){
    this.auth.ConsulterHistoriquesServicesRespo(this.pagehs).subscribe(
      resp => {
    
               this.historiquesService=resp['content'];
               this.totalPageHS=new Array(resp['totalPages']);
               console.log(this.historiquesService);
           
                       // this.espaceEncours=this.espacesusers.commentaireEspace();
    
    
                      }
                    )
  }

}
