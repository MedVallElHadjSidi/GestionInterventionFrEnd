import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  date=new Date();
  title = 'Gestion-Interventions-BMCI';
  constructor(public authService:AuthentificationService,private router:Router) {

  }
  ngOnInit() {

  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }



  }
