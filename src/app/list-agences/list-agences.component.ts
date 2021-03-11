import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenceService } from 'src/services/Agence.service';

@Component({
  selector: 'app-list-agences',
  templateUrl: './list-agences.component.html',
  styleUrls: ['./list-agences.component.css']
})
export class ListAgencesComponent implements OnInit {
  listAgence;
  tableauPages=[];
  page:any=0;

  constructor(public agenceService:AgenceService,public route:Router,public router:ActivatedRoute) { }

  ngOnInit(): void {
    let p=atob(this.router.snapshot.params.page);
    this.page=p;
    console.log(p);
    this.ListAgence();
  }
  ModifierAgence(id){
    console.log(id);
    this.route.navigate(['admin/editAgence/'+btoa(id)+"/"+btoa(this.page)])


  }
  setpageAgence(i,event){
    event.preventDefault();
    this.page=i;
    this.ListAgence();
  }
  ListAgence(){
    this.agenceService.ListAgence(this.page).subscribe(resp=>{
      
      this.listAgence=resp['content'];
     // console.log(this)
      this.tableauPages=new Array(resp['totalPages']);
    })
  }

}
