import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenceService } from 'src/services/Agence.service';

@Component({
  selector: 'app-edit-agence',
  templateUrl: './edit-agence.component.html',
  styleUrls: ['./edit-agence.component.css']
})
export class EditAgenceComponent implements OnInit {
  page:any=0;
  idAgence;
  agence;

  constructor(public route:ActivatedRoute,public agenceService:AgenceService,public router:Router ) { }

  ngOnInit(): void {
    this.idAgence=atob(this.route.snapshot.params.idAgence);
    this.page=atob(this.route.snapshot.params.page);
    this.agenceService.ChercherAgence(this.idAgence).subscribe(
      resp=>{
      this.agence=resp}

    )
  }
  EditerAgence(ag){
    console.log(ag);
    this.agenceService.EditAgence(this.idAgence,this.agence).subscribe(
      (resp:any)=>{
        if(resp!=undefined){
          alert("modification avec success")
          this.router.navigate(["admin/listAgence/"+btoa(this.page)]);
        }

      }
    )
    
  }

}
