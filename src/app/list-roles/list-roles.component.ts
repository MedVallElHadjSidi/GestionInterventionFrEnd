import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from 'src/services/Role.service';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {
  listRoles=[];
  tableauPages=[];
  page:any=0;

  constructor(public router:ActivatedRoute,public roleService:RoleService,public route:Router) { }

  ngOnInit(): void {
    let p=atob(this.router.snapshot.params.page);
    this.page=p;
    this.ListRoles();
  }
  ListRoles(){
    this.roleService.ListRole(this.page).subscribe(resp=>{
      
      this.listRoles=resp['content'];
     // console.log(this)
      this.tableauPages=new Array(resp['totalPages']);
    })

  }

  setpageRole(i,event){
    event.preventDefault();
    this.page=i;
    this.ListRoles();

  }
  modifierRole(id_Role){
    //console.log(id);
    this.route.navigate(['admin/editRole/'+btoa(id_Role)+"/"+btoa(this.page)])


  }

}
