import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-add-materiel',
  templateUrl: './add-materiel.component.html',
  styleUrls: ['./add-materiel.component.css']
})
export class AddMaterielComponent implements OnInit {
  private auth:AuthentificationService;
  modeMateriel;
  materielAjouter;
  Message:string;
  date=new Date();

  constructor(auth:AuthentificationService) {
    this.auth=auth;

  }

  ngOnInit(): void {
  }
  AjouterMateriel(materiel){
    this.auth.addMateriel(materiel).subscribe(resp=>{
      this.materielAjouter=resp;
      this.modeMateriel=1;
      this.Message="Insertion avec success du Materiel";

      }
    ,error => {

      this.modeMateriel=0;
      this.Message=error.error.message;
      })


  }

}
