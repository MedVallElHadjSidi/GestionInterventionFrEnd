import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  mode=0;
  date =new  Date();
  jwt;



  constructor(private  authService:AuthentificationService, private  route:Router) { }

  ngOnInit(): void {


  }


  onAuthentifier(user){

    this.authService.login(user)
      .subscribe(
        resp=>{
          let jwtToken=resp.headers.get('Authorization');

          this.authService.saveToken(jwtToken);
          this.jwt=this.authService.jwtToken;
      //    console.log(this.jwt);
          if(this.authService.isAdmin()) this.route.navigateByUrl('/admin/acceuil')
          else if(this.authService.isSimpleUser())return  this.route.navigate(['user/nouveauDemande'])
          else if(this.authService.isRespoInfo())return  this.route.navigate(["respInfo/tableauBordRespoInfo"]);
          else if (this.authService.isIntervenant())return  this.route.navigateByUrl("/intervenant")
          else if(this.authService.isDirecteurGeneral()) return this.route.navigateByUrl("/DG")
          else{
            return  this.route.navigateByUrl('/login')
          }



        },
        error => {
          this.mode=1;


        }
      );





  }




}
