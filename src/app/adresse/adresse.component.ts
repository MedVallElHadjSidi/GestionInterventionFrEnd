import { Component, OnInit } from '@angular/core';
import {Adresse} from '../../Entities/Adresse';
import {HttpClient} from '@angular/common/http';
import {AuthentificationService} from '../../services/authentification.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {
  auth:AuthentificationService;
  adress:any;
  mode;
  Message:string;
  appcomp:AppComponent;
  date:Date;



  constructor(authentificationService:AuthentificationService,app:AppComponent) {
    this.auth=authentificationService;
    this.appcomp=app;
    this.date=this.appcomp.date;

  }

  ngOnInit(): void {


  }
  AjouterAdresse(adresse:Adresse){

    this.auth.SaveAdresse(adresse).subscribe(data=>{
      this.adress=data;
      this.mode=1;
      this.Message="L'ajout avec succes";


      },
      error => {

      this.Message=error.error.message;
        this.mode=0;
      })




  }

}
