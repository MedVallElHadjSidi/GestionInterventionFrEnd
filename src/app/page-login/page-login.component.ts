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



  constructor(private  authService:AuthentificationService, private  route:Router) { }

  ngOnInit(): void {
  }


  onAuthentifier(user){

    this.authService.login(user)
      .subscribe(
        resp=>{
          let jwtToken=resp.headers.get('Authorization');
          this.authService.saveToken(jwtToken);
          if(this.authService.isAdmin()) this.route.navigateByUrl('/admin')
          else if(this.authService.isSimpleUser())return this.route.navigateByUrl('/user')
          else if(this.authService.isRespoInfo())return  this.route.navigateByUrl("/respInfo")
          else{
            return  this.route.navigateByUrl('/intervenant')
          }



        },
        error => {
          this.mode=1;


        }
      );





  }


}
