import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {ServiceModel} from '../../Entities/serviceModel';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-gestion-service',
  templateUrl: './gestion-service.component.html',
  styleUrls: ['./gestion-service.component.css']
})
export class GestionServiceComponent implements OnInit {
  auth:AuthentificationService;
  date=new Date();
  modeInter;
  listIntervenant:any;
  servicesNames=undefined;
  modeNames;
  serviceAdd;
  modeAdd;
  Message;
  modeaff;
  servicesNamesSansRespos;
  moderespo;
  respoSansServices;
  modeRespoSansService;
  servRESPO;
  modeAff;
  modelservice:ServiceModel=new ServiceModel();
  modeSelect=0;

  constructor(authentificationService:AuthentificationService,public flashmessage:FlashMessagesService) {
    this.auth=authentificationService;

  }

  ngOnInit(): void {
    this.intervenantsNames();
    this.ServicesNames();
    this.RespoSansService();
    this.servicesNamesSansRespo();
  }
  AffecterIntervenant(affecterInterVenant){
  this.auth.AffecterInter(affecterInterVenant).subscribe(resp=>{
    const rd=resp;
    this.flashmessage.show('Affection des intervenants  avec success',{cssClass:'alert-success',timeout:4000});
  
    this.modeaff=1;
    this.intervenantsNames();
    /*
  this.modeaff=1;
  this.Message="affectation avec success";*/
  })


  }


  intervenantsNames(){

    this.auth.AffectationIntervenant().subscribe(resp=>{
      this.modeInter=1;
      this.listIntervenant=resp;





    })

  }

  RespoSansService(){
   this.auth.RespoSansService().subscribe(resp=>{

        this.respoSansServices=resp;
        this.modeRespoSansService=1;





      })

  }
  ServicesNames(){
  this.auth.ServicesNames().subscribe(resp=>{
  this.servicesNames=resp;
  this.modeNames=1;

  })
  }

  servicesNamesSansRespo(){
  this.auth.servicesNamesSansRespo().subscribe(
  resp=>{
  this.servicesNamesSansRespos=resp;
  this.moderespo=1;



  }

  );

  }
  AjouterService(service){
  this.auth.addService(service).subscribe(
  resp=>{
  this.modeAdd=1;
  this.serviceAdd=resp;
  this.Message="Ajouter Avec Succes du Service";
  this.servicesNamesSansRespo();
  this.ServicesNames();
  this.modeSelect=1;
  this.modeaff=1;

  }

  ,error=>{
  this.modeAdd=0;
  this.Message=error.error.message;
  });

  this.modelservice=new ServiceModel();
  this.servicesNames();
  this.servicesNamesSansRespo();
  }



  AffecterResponsable(rs){

    this.auth.AffecterResponsable(rs).subscribe(
      resp=>{
        this.servRESPO=resp;
        this.flashmessage.show('Affection du respo avec success',{cssClass:'alert-success',timeout:4000});
     //   this.modeAff=1;
        this.modeSelect=1;
        this.RespoSansService();
        this.servicesNamesSansRespo();
       
        /*
        this.Message="affectation du respo avec success!";*/


      }
    )

  }


}
