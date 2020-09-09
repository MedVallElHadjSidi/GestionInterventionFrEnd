import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';

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

  constructor(auth:AuthentificationService) {
    this.auth=auth;
  }

  ngOnInit(): void {
   this.CategorieNames();
  }
  AjouterCategorie(categorie){
console.log(categorie);
    this.auth.AddCategorie(categorie).subscribe(resp=>{
    this.categorie=resp;
    this.modeRespAdd=1;
    this.Message="AJOUT AVEC SUCCES";



    })

  }
  CategorieNames(){
    this.auth.CategoriesNames().subscribe(resp=>{
      this.listCategorie=resp;
      this.modecat=1;
    },error => {

    })
  }

}
