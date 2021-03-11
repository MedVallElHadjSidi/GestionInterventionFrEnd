import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielService } from 'src/services/Materiel.service';

@Component({
  selector: 'app-liste-materiels',
  templateUrl: './liste-materiels.component.html',
  styleUrls: ['./liste-materiels.component.css']
})
export class ListeMaterielsComponent implements OnInit {
  listMateriels=[];
  tableauPages=[];
  page:any=0;

  constructor(public materielService:MaterielService,public router:ActivatedRoute,public route:Router) { }

  ngOnInit(): void {
    let p=atob(this.router.snapshot.params.page);
    this.page=p;
    this.ListMateriels();
  }

  ListMateriels(){
    this.materielService.ListMateriel(this.page).subscribe(resp=>{
      
      this.listMateriels=resp['content'];
     // console.log(this)
      this.tableauPages=new Array(resp['totalPages']);
    })

  }
  modifierMateriel(idMateriel){
    this.route.navigate(['admin/editMateriel/'+btoa(idMateriel)+"/"+btoa(this.page)])

  }
  setpageMateriel(i,event){
    event.preventDefault();
    this.page=i;
    this.ListMateriels();

  }

}
