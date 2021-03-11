import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelRecherche } from 'src/Entities/ModelRecherche';
import { AuthentificationService } from 'src/services/authentification.service';
import { WebSocketAPI } from 'src/SocketAngular/WebSocketAPI';

@Component({
  selector: 'app-consulter-h-demande',
  templateUrl: './consulter-h-demande.component.html',
  styleUrls: ['./consulter-h-demande.component.css']
})
export class ConsulterHDemandeComponent implements OnInit {
  modelch;
  modelChercher:ModelRecherche=new ModelRecherche();
  listDemandeChercher:any=[];
  totalpagechc:any=[];
  modechercher=0;
  listSousCategories;
  modechange=0;
  achercher=0;
  
  listPanneParent;
  modepanne=0;
  espaceMessagesuser1;
  numeroespace;
  webSocketAPI:WebSocketAPI;
  espacevueuser=0;

  constructor(public auth:AuthentificationService,public router:Router) { }

  ngOnInit(): void {
    this.webSocketAPI=new WebSocketAPI(this.auth);
    this.webSocketAPI.connecter();
    this.AllParentCategoeie();
  }
  fermerChercherComplet(){
    this.router.navigate(['user/nouveauDemande'])

  }
  DemandeRecherche(demande){
    /* prend en con sideration */
    this.achercher=1;
   
    this.modelch=demande.panne;
/*
    this.modelChercher.panne=demande.panne;
    this.modelChercher.etat=demande.etat;
    this.modelChercher.datechercher=demande.datechercher;*/
    this.modelChercher.username=this.auth.username;
    this.modelChercher.page=0;


    this.auth.ChercherComplet(this.modelChercher).subscribe(resp=>{
    //this.chercherRappelService=resp;
    this.listDemandeChercher=resp['content'];
    this.totalpagechc=new Array(resp['totalPages']);

      console.log(this.listDemandeChercher);


    });


  }

  notreParentch(event){
    /* on a prendre cette methode*/
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
  
  AllParentCategoeie(){
    /* ona prendre cette methode */
    this.auth.ChercherParentCategorie().subscribe(resp=> {
      this.listPanneParent=resp;
      this.modepanne=1;
    })
  }
  fermerDemandeChercher(){
    this.listDemandeChercher=undefined;
    this.router.navigate(['user'])


  }
  consulterEspaceUser(espace){
    /* pris en consderation */
    this.espaceMessagesuser1=espace.commentaire;
    this.webSocketAPI.messagesNew2=espace.commentaire;

    this.numeroespace=espace.idEspace;
    this.webSocketAPI.commentaireEspace(this.numeroespace);
    this.espacevueuser=1;
 //
//   this.userespace=0;

    console.log(this.espaceMessagesuser1);

  }
  setpagechc(i,event){
    /* prenez en consederation */
    event.preventDefault();
    this.modelChercher.page=i;
    this.DemandeRecherche(this.modelChercher);

  }


}
