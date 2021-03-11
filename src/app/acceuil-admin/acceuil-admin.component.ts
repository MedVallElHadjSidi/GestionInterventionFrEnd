import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenceService } from 'src/services/Agence.service';
import { MaterielService } from 'src/services/Materiel.service';
import { RoleService } from 'src/services/Role.service';
import { ServiceBMCIService } from 'src/services/ServiceBMCI.service';

@Component({
  selector: 'app-acceuil-admin',
  templateUrl: './acceuil-admin.component.html',
  styleUrls: ['./acceuil-admin.component.css']
})
export class AcceuilAdminComponent implements OnInit {
  listAgence;
  tableauPages=[];
  page:any=0;
  pagesr:any=0;
  tableauPagessr=[];
  listServices=[];
  listMateriels=[];
  tableauPagesmt=[];
  pagemt:any=0;
  listRoles=[];
  tableauPagesrl=[];
  pagerl:any=0;

 





 

 

  constructor(public agenceService:AgenceService,public route:Router,public router:ActivatedRoute, public  serviceBMCI :ServiceBMCIService,public materielService:MaterielService,public roleService:RoleService) { }

  ngOnInit(): void {
  
    this.ListAgence();
      
    this.ListServices();
    this.ListMateriels();
    this.ListRoles();
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
  
  setpageService(i,event:any){
    /* pris en mise ajours */
     event.preventDefault();
     this.pagesr=i;
     this.ListServices();
   }
   modifierService(id){
    console.log(id);
    this.route.navigate(['admin/editService/'+btoa(id)+"/"+btoa(this.pagesr)])


   }
   ListServices(){


    this.serviceBMCI.ListServices(this.pagesr).subscribe(resp=>{
      
      this.listServices=resp['content'];
     // console.log(this)
      this.tableauPagessr=new Array(resp['totalPages']);
    })
  }

   ListMateriels(){
    this.materielService.ListMateriel(this.pagemt).subscribe(resp=>{
      
      this.listMateriels=resp['content'];
     // console.log(this)
      this.tableauPagesmt=new Array(resp['totalPages']);
    })

  }
  modifierMateriel(idMateriel){
    this.route.navigate(['admin/editMateriel/'+btoa(idMateriel)+"/"+btoa(this.pagemt)])

  }
  setpageMateriel(i,event){
    event.preventDefault();
    this.pagemt=i;
    this.ListMateriels();

  }

  
  ListRoles(){
    this.roleService.ListRole(this.pagerl).subscribe(resp=>{
      
      this.listRoles=resp['content'];
     // console.log(this)
      this.tableauPagesrl=new Array(resp['totalPages']);
    })

  }

  setpageRole(i,event){
    event.preventDefault();
    this.pagerl=i;
    this.ListRoles();

  }
  modifierRole(id_Role){
    //console.log(id);
    this.route.navigate(['admin/editRole/'+btoa(id_Role)+"/"+btoa(this.pagerl)])


  }


}
