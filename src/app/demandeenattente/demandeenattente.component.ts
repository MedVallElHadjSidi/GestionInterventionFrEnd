import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/services/authentification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-demandeenattente',
  templateUrl: './demandeenattente.component.html',
  styleUrls: ['./demandeenattente.component.css']
})
export class DemandeenattenteComponent implements OnInit {
  demandeUserEnAttente:any;
  totalpageDe:any;
  pageDe=0;


  constructor(public auth:AuthentificationService,public router:Router) {

   }

  ngOnInit(): void {
   
    this.DemandeUserEnAttente();
  }
  fermerEnattente(){
    this.router.navigate(['user/nouveauDemande'])

  }
 

  DemandeUserEnAttente(){
    /* demande en attente*/
    /*ona pris */

    this.auth.DemandeUserEnAttente(this.pageDe).subscribe(resp=>{
      this.demandeUserEnAttente=resp['content'];
      console.log(this.demandeUserEnAttente);
      this.totalpageDe=new Array(resp['totalPages']);
     
    });

  }
  setpageDE(i,event:any){
    /* pris enconsideration */
    event.preventDefault();
    this.pageDe=i;
    this.DemandeUserEnAttente();
  }
  
  ModifierDemande(id){
    console.log(id);
    this.router.navigate(["user/editDemandeUser/"+btoa(id)]);

  }


}
