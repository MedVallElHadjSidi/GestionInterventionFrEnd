import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-demanderejeter',
  templateUrl: './demanderejeter.component.html',
  styleUrls: ['./demanderejeter.component.css']
})
export class DemanderejeterComponent implements OnInit {
  demandeRejeterUser:any=[];
  pageDrj=0;
  totalPageDrj:any=[];

  constructor(public auth:AuthentificationService,public router:Router) { }

  ngOnInit(): void {
    this.DemandeRejeterUser();
  }

  fermertabuserRej(){
    this.router.navigate(['user/nouveauDemande']);
    

  }

  DemandeRejeterUser(){
    this.auth.DemandeRejeterUser(this.pageDrj).subscribe(resp=>{
      this.demandeRejeterUser=resp['content'];
      this.totalPageDrj=new Array(resp['totalPages']);
      if(this.demandeRejeterUser!=undefined){
       

      }
     // this.listdemandeEncoursuser=this.demandeRejeterUser;
      console.log(this.demandeRejeterUser);

    });
  }
  setpageDrj(i,event:any){
    event.preventDefault();
    this.pageDrj=i;
    this.DemandeRejeterUser();
  }
  EspaceVide(){
    alert("Espace vide");

  }

}
