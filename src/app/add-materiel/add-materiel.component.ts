import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {Materiel} from '../../Entities/Materiel ';

@Component({
  selector: 'app-add-materiel',
  templateUrl: './add-materiel.component.html',
  styleUrls: ['./add-materiel.component.css']
})
export class AddMaterielComponent implements OnInit {
  private auth:AuthentificationService;
  modeMateriel;
  modeAgence;
  listAgences;
  materielAjouter;
  Message:string;
  date=new Date();
  materiel:Materiel=new Materiel();

  constructor(auth:AuthentificationService) {
    this.auth=auth;

  }

  ngOnInit(): void {
    this.AgencesNames();
  }
  AjouterMateriel(materiel){
    this.materiel.nom=materiel.nom;
    this.materiel.model=materiel.model;
    this.materiel.processeur=materiel.processeur;
    this.materiel.agence=materiel.agence;

    this.auth.addMateriel(materiel).subscribe(resp=>{
      this.materielAjouter=resp;
      this.modeMateriel=1;
      this.Message="Insertion avec success du Materiel";

      }
    ,error => {

      this.modeMateriel=0;
      this.Message=error.error.message;
      });

    this.modeMateriel=new Materiel();




  }
  AgencesNames(){
    this.auth.AgencesNames().subscribe(resp=>{
      this.listAgences=resp;
      this.modeAgence=1;
    })

  }

}
