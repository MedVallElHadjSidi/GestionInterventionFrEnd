import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { from } from 'rxjs';
import { ChartRespoService } from 'src/services/ChartRespo.service';
import { StatistiqueTableauBordRespoInfo } from '../../Entities/StatistiqueTableauBordRespoInfo';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-tableau-bord-respo-info',
  templateUrl: './tableau-bord-respo-info.component.html',
  styleUrls: ['./tableau-bord-respo-info.component.css']
})
export class TableauBordRespoInfoComponent implements OnInit {
  doughnutChartLabels: Label[] = [];
  doughnutChartData;
  canvas;
  labels;
  nombres;
  doughnutChartType: ChartType = 'doughnut';
  statistiqueTableauBordRespoInfo: StatistiqueTableauBordRespoInfo[];
  ctx;
  

  constructor(public chartRespoInfo:ChartRespoService) { }

  ngOnInit(): void {
    this.TableauBord();

    
  }

  TableauBord(){
    this.chartRespoInfo.TableauBordRespoInfo().subscribe(
      (data:any )=> {
        //alert(data);
        //this.nbGuerris = data;
        console.log(data);
        this.statistiqueTableauBordRespoInfo = data;
        this.labels = this.statistiqueTableauBordRespoInfo.map(s => s.label);
        this.nombres = this.statistiqueTableauBordRespoInfo.map(s => s.nbre) ;

        if(document.getElementById('doughnut-chart')!=null ){
          this.canvas = document.getElementById('doughnut-chart');
        this.ctx = this.canvas.getContext('2d');

     const myChart=new Chart(this.ctx, {
       type: 'doughnut',
       data: {
         labels:this.labels,
         datasets: [
           {
             label: "Tableau bord services",
             backgroundColor: ["#3cba9f",  "#FFFFCC", "#c45850"],
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
