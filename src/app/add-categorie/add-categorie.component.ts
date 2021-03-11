import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {ModelCategorie} from '../../Entities/ModelCategorie';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  listCategorie;
  modecat;
  auth:AuthentificationService;
  categorie;
  modeRespAdd;
  Message;
  date=new Date();
  modelCategorie:ModelCategorie=new ModelCategorie();

  constructor(auth:AuthentificationService) {
    this.auth=auth;
  }

  ngOnInit(): void {
   this.CategorieNames();
  }
  AjouterCategorie(categorie){
    console.log(categorie);
    this.modelCategorie.nom=categorie.nom;
    this.modelCategorie.parent=categorie.parent;

    this.auth.AddCategorie(categorie).subscribe(resp=>{
    this.categorie=resp;
    this.modeRespAdd=1;
    this.Message="AJOUT AVEC SUCCES";
    this.CategorieNames();
    categorie.nom="";



    });
    this.modelCategorie=new ModelCategorie();



  }
  CategorieNames(){
    this.auth.CategoriesNames().subscribe(resp=>{
      this.listCategorie=resp;
      this.modecat=1;
    },error => {

    })

  }

}
