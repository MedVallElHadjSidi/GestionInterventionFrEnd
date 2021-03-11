import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UtilisateursService} from "../../services/Utilisateurs.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  code;
  page:any=0;
  user:any;

  constructor(public route:ActivatedRoute,public userService:UtilisateursService,public router:Router) { }

  ngOnInit(): void {
    this.code=atob(this.route.snapshot.params.code);
    this.page=atob(this.route.snapshot.params.page);
    this.userService.Chercher(this.code).subscribe(resp=>{
      this.user=resp;
      this.user.password=""
      console.log(this.user);

    })
    
  }
  EditerUser(us){
    this.userService.EditerUser(this.code,this.user).subscribe(
      resp=>{
        let rep=resp
        if(rep!=undefined){
          alert("Modification avec success");
          this.router.navigate(["admin/listUsers/"+btoa(this.page)]);
        }
     
      }
    )


  }

}
