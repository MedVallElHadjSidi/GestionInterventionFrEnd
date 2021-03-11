import { Component, OnInit, ViewChild ,ElementRef} from '@angular/core';
import * as Chart from 'chart.js';
import { StatistiqueTableauBordRespoInfo } from 'src/Entities/StatistiqueTableauBordRespoInfo';

import { AuthentificationService } from 'src/services/authentification.service';
import { ChartRespoService } from 'src/services/ChartRespo.service';
@Component({
  selector: 'app-page-directeur-general',
  templateUrl: './page-directeur-general.component.html',
  styleUrls: ['./page-directeur-general.component.css']
})
export class PageDirecteurGeneralComponent implements OnInit {
  materielsNames:any[];
  aff=0;
  statistiqueTableauBordRespoInfo: StatistiqueTableauBordRespoInfo[];
  listMaterielDommage=[];
  canvas ;
  labels;
  nombres;
  ctx;
  canvas2 ;
  ctx2;
  canvas3 ;
  ctx3;
  canvas4 ;
  ctx4;
  private agence: any=null;
  agenceName=[];
  mychartAgenceNames=[];
  listAgenceDemande=[];
  labelNames=[];
  categorieNames=[];
  listCategorie=[];
//  chart: Chart;
 // @ViewChild('chart')
 // htmlRef: ElementRef;

  constructor(public auth:AuthentificationService,public chartSrvice:ChartRespoService) { }

  ngOnInit(): void {
    this.MaterielsNames();
    this.ChercherAgence();
    this. TableauBord();
    this.auth.CategoriesNames().subscribe((resp:any)=>{
     // this.categorieNames=resp._embedded.categories;
     // console.log(this.categorieNames);
      for(let m of resp._embedded.categories){
        this.categorieNames.push(m.nom);
        this.auth.StatistiquesPanne(m.nom).subscribe((resp:any)=>{
          this.listCategorie.push(resp._embedded.demandeInterventions.length);
          this.bar();
         }
        )

      }
     // console.log(this.categorieNames);
      //console.log(this.listCategorie);
    })

  }

  MaterielsNames(){
    this.auth.DemandeByMateriel("/materielService/materielNames").subscribe((resp:any)=>{
      this.materielsNames=resp;
      console.log(this.materielsNames);

      for(let m of this.materielsNames){
      //  this.labelNames.push(m);
        this.MaterielDommageable(m);
        }

     // console.log(this.listMaterielDommage);
    })

  }

  MaterielDommageable(m){
    console.log(m);
    

    this.auth.DemandeByAgence('/materiel_Pannes/search/findByMaterielNom?m='+m).subscribe((resp:any)=>{

  
     // this.listAgenceDemande.push(resp._embedded.materiel_Pannes.length);
     this.labelNames.push(m);
      this.listMaterielDommage.push(resp._embedded.materiel_Pannes.length);
  
      if(document.getElementById('line-chart')!=undefined){
   
      this.canvas=document.getElementById('line-chart');
      this.ctx=this.canvas.getContext('2d');
        
        const cmy = new Chart(this.ctx, {
          type: 'line',
          data: {
              labels: this.labelNames,
              datasets: [{
                  label: 'Materiaux dommigeables',
                  data: this.listMaterielDommage,
                //  backgroundColor: ["red","blue", "orange"],
                //  borderWidth: 1
              }]
          },
          options: {
        legend: {
            display: true
        },
            responsive: true,
          
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
          }
    
      
    });
   // cmy.update();
  }




        },error=>{
        console.log(error);
        });
  //   this.bar();

  }
  bar(){
    if(document.getElementById('line-chart4')!=undefined){
   
 
      this.canvas4=document.getElementById('line-chart4');
    this.ctx4=this.canvas4.getContext('2d');
    new Chart(this.ctx4, {
      type: 'horizontalBar',
      data: {
        labels: this.categorieNames,
        datasets: [
          {
            label: "Demande  par type panne",
         //   backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: this.listCategorie
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'typepanne/Nombre de demande associe'
        }
      }
  });
  
  }
   // console.log(this.labelNames)
    
    /*
if(document.getElementById('line-chart')!=undefined){
   
 
      this.canvas=document.getElementById('line-chart');
    this.ctx=this.canvas.getContext('2d');
      
      const cmy = new Chart(this.ctx, {
        type: 'line',
        data: {
            labels: this.materielsNames,
            datasets: [{
                label: 'Materiaux dommigeables',
                data: this.listMaterielDommage,
              //  backgroundColor: ["red","blue", "orange"],
              //  borderWidth: 1
            }]
        },
        options: {
      legend: {
          display: true
      },
          responsive: true,
        
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
        }
  
    
  });
  cmy.update();
}
 

    */
    
  }

 
  ChercherAgence(){
    //    alert("rahi w 3aye6ilhe");
             this.auth.DemandeByAgence("/agences?projection=NameAgence").subscribe((resp:any)=>{
              this.agence=resp._embedded.agences;
          //       console.log(this.agenceName+"******");
                 for(let agence of this.agence){

                  
                  this.NombreDemandeAgence(agence.nomAgence);

                 }
           //      console.log(this.agenceName);
             //    console.log(this.listAgenceDemande);

               },error=>{
               console.log(error);
               });
              

    }
    NombreDemandeAgence(agence){

      this.auth.DemandeByAgence("/demandeInterventions/search/findByUtilisateursAgenceNomAgence?nom="+agence).subscribe((resp:any)=>{
      console.log(resp._embedded.demandeInterventions.length);
      this.agenceName.push(agence);

      this.listAgenceDemande.push(resp._embedded.demandeInterventions.length);
      this.AgencePlusSollicites();

        },error=>{
        console.log(error);
        });


   
        }
        AgencePlusSollicites(){
          console.log(this.agenceName)
          console.log(this.listAgenceDemande);
    
          if(document.getElementById('line-chart2')!=null ){
          //  alert("ok")
            this.canvas2 = document.getElementById('line-chart2');
       //     this.ctx = this.canvas.getContext('2d');
            this.ctx2 = this.canvas2.getContext('2d');
           
            const myChart = new Chart(this.ctx2, {
              type: 'bar',
              data: {
                  labels: this.agenceName,
                  datasets: [{
                      label: 'nombre  de demande par agence',
                      data: this.listAgenceDemande,
                    //  backgroundColor: ["red","blue", "orange"],
                   //   borderWidth: 1
                  }]
              },
              options: {
            legend: {
                display: true
            },
                responsive: true,
             //   display:true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
              }
            });
        
      
          }
      
      
        }
 
        TableauBord(){
          this.chartSrvice.StatistiquuesDemande().subscribe(
            (data:any )=> {
              //alert(data);
              //this.nbGuerris = data;
              console.log(data);
              this.statistiqueTableauBordRespoInfo = data;
              this.labels = this.statistiqueTableauBordRespoInfo.map(s => s.label);
              this.nombres = this.statistiqueTableauBordRespoInfo.map(s => s.nbre) ;
      
              if(document.getElementById('line-chart3')!=null ){
                this.canvas3 = document.getElementById('line-chart3');
              this.ctx3 = this.canvas3.getContext('2d');
           const myChart=new Chart(this.ctx3, {
             type: 'doughnut',
             data: {
               labels:this.labels,
               datasets: [
                 {
                   label: "Tableau bord services",
                   backgroundColor: ["#3cba9f",  "#FFFFCC",	'Orange', "#c45850"],
                   data:this.nombres
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
      
            },err=>{
              console.log(err);
            }
          )
        }
}

  