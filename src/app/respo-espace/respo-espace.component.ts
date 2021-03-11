import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-respo-espace',
  templateUrl: './respo-espace.component.html',
  styleUrls: ['./respo-espace.component.css']
})
export class RespoEspaceComponent implements OnInit {

   rsch;
  authService;
  agenceName =[];
  listAgenceDemande=[];

  demandeAgence;
  canvas: any;
  ctx: any;
  private agence: any=null;



  constructor(auth:AuthentificationService) {
    this.authService=auth;
  }

  ngOnInit(): void {
    this.ChercherAgence();

  }
    ChercherAgence(){
    //    alert("rahi w 3aye6ilhe");
             this.authService.DemandeByAgence("/agences?projection=NameAgence").subscribe(resp=>{
              this.agence=resp._embedded.agences;

                 console.log(this.agenceName+"******");


                 for(let agence of this.agence){

                  this.agenceName.push(agence.nomAgence);
                  this.NombreDemandeAgence(agence.nomAgence);

                 }
                 console.log(this.agenceName);
                 console.log(this.listAgenceDemande);

               },error=>{
               console.log(error);
               });
              

    }




  bar() {
    /*
    new Chart(document.getElementById("bar-chart-horizontal"), {
      type: 'horizontalBar',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  });
*/
    //   this.canvas = document.getElementById("doughnut-chart");
    // this.ctx = this.canvas.getContext("2d");


    if(document.getElementById('doughnut-chart')!=null ){
      alert("ok")
      this.canvas = document.getElementById('doughnut-chart');
      this.ctx = this.canvas.getContext('2d');

      const myChart=new Chart(this.ctx, {
        type: 'doughnut',
        data: {
          labels: this.agenceName,
          datasets: [
            {
              label: "Tableau bord services",
              backgroundColor: ["#3cba9f",  "#FFFFCC", "#c45850"],
              data:this.listAgenceDemande
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Tableau bord services'
          }
        }
      });

    }


  }

  NombreDemandeAgence(agence){

         this.authService.DemandeByAgence("/demandeInterventions/search/findByUtilisateursAgenceNomAgence?nom="+agence).subscribe(resp=>{
         this.rsch=resp;
         this.listAgenceDemande.push(this.rsch._embedded.demandeInterventions.length)

           },error=>{
           console.log(error);
           });


           this.bar()

           }

           

}
