import {Component} from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode=0;
  date=new Date();





  title = 'Gestion-Interventions-FRT2';
  constructor(public authService:AuthentificationService,private router:Router) {

  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }



  }
