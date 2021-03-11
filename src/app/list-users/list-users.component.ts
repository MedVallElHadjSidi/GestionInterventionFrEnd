import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateursService } from 'src/services/Utilisateurs.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  page:any=0;
  listUsers;
  tableauPages=[];

  constructor(public router:ActivatedRoute,public userService:UtilisateursService,public route:Router) { }

  ngOnInit(): void {
    let p=atob(this.router.snapshot.params.page);
    this.page=p;
    this.ListUsers();
  }
  ListUsers(){
    this.userService.ListUsers(this.page).subscribe(resp=>{
      
      this.listUsers=resp['content'];
     // console.log(this)
      this.tableauPages=new Array(resp['totalPages']);
    })

  }
  setpageUser(i,event:any){
    /* pris en mise ajours */
     event.preventDefault();
     this.page=i;
     this.ListUsers();
   }
   modifierUser(user){
      this.route.navigate(['admin/editUser/'+btoa(user)+"/"+btoa(this.page)])

   }

}
