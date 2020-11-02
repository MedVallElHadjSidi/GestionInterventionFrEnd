import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tableauservice-encours',
  templateUrl: './tableauservice-encours.component.html',
  styleUrls: ['./tableauservice-encours.component.css']
})
export class TableauserviceEncoursComponent implements OnInit {
  nouveauxDemandeEncours:any;
  auth:AuthentificationService;
  interventions;

  constructor(athen:AuthentificationService,router:Router) {
    this.auth=athen;
  }

  ngOnInit(): void
  {
    this.DemandeEncours();

  }

  DemandeEncours(){
    this.auth.DemandesEncours().subscribe(resp=>{
      this.nouveauxDemandeEncours=resp;
      console.log(this.nouveauxDemandeEncours)

    })
  }

}
