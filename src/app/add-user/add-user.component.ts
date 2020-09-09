import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
 appcomp:AppComponent;
  date:Date;
  auth:AuthentificationService;
  Nuser:any;

Message:string;
mode;
 constructor(authentificationService:AuthentificationService,app:AppComponent) {
    this.auth=authentificationService;
    this.appcomp=app;
    this.date=this.appcomp.date;

  }

  ngOnInit(): void {
  }
  AjouterUser(modeuser){
  this.auth.SaveUser(modeuser).subscribe(resp=>{
  this.Nuser=resp;
  this.mode=1;
  this.Message="L'ajout avec succes";

  },error=>{
   this.Message=error.error.message;
          this.mode=0;
  })

  }

}
