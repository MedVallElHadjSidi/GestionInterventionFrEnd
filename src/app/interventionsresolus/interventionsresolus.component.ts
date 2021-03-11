import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-interventionsresolus',
  templateUrl: './interventionsresolus.component.html',
  styleUrls: ['./interventionsresolus.component.css']
})
export class InterventionsresolusComponent implements OnInit {
  serviceResolu;
  pagesr=0;
  totalPageSR;
  espaceresnew;
  espaceMessages;
  webSocket:WebSocketAPI;

  constructor(public auth:AuthentificationService,public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.webSocket=new WebSocketAPI(this.auth);
    this.webSocket.connecter();
    this.ServiceResolu();
  }
  fermertabRs(){
    this.router.navigate(["respInfo/tableauBordRespoInfo"]);

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
                 // this.tabSr=1;
  
    }

    setpage(i,event:any){
      event.preventDefault();
      this.pagesr=i;
      this.ServiceResolu();

    }

    consulterEspace(esp){
      /* pris en consideration */
    this.espaceresnew=undefined;
    this.espaceMessages=esp.commentaire;
    this.webSocket.messagesNew=esp.commentaire;
    let numeroespace=esp.idEspace;
    this.router.navigate(['respInfo/espaceRespoConsulterResolue/'+btoa(numeroespace)]);
   // this.espacevue=1;
   // this.encours=0;
 //   this.numeroespace=esp.idEspace;
    //this.webSocket.commentaireEspace(this.numeroespace);
    console.log(this.espaceMessages);
    }

}
