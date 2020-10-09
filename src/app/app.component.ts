import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';
import {PageRespoInfoComponent} from './page-respo-info/page-respo-info.component';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  nouveauxDemandes:any;
  consulter=0;
  demande;
  Message;
  photos;
  hello=3;



  date=new Date();
  title = 'Gestion-Interventions-BMCI';
  sanitize:DomSanitizer;
  constructor(public authService:AuthentificationService,private router:Router) {



  }
  ngOnInit() {
    this.NouveauxDemande();

  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }

  NouveauxDemande(){
    if(this.authService.isRespoInfo()) {

      this.authService.NouveauMessagesDemande().subscribe(resp => {
        this.nouveauxDemandes = resp;


      })
    }

  }
  Consulter(id){
    console.log(id);



    this.authService.ChercherByidDemande(id).subscribe(
      resp=>{
        this.demande=resp;

        this.consulter=1;
       this.photos=atob(this.demande.panne.photos);
       console.log(this.demande)
        console.log(this.photos)

        /*
                const preview = document.querySelector('img');
                preview.src = this.photos ;

        */



      //  this.photos=this.demande.panne.photos.replace("data:image/jpeg;base64,"," ");
      //  this.url=btoa(this.url);
        //this.displayImage = this.sanitize.bypassSecurityTrustUrl("data:Image/*;base64,"+this.url);


        //  this.retrievedImage=this.sanitize.bypassSecurityTrustUrl(this.photos);
        //this.url= 'data:image/jpg;base64,' + (this.sanitize.bypassSecurityTrustResourceUrl(this.photos) as any).changingThisBreaksApplicationSecurity;

     // this.url=this.demande.panne.photos.replace("data:image/jpeg;base64,"," ");

      // console.log(this.photos);

       // this.url = this.sanitize.bypassSecurityTrustResourceUrl(this.photos);

      //  console.log(this.url);



      }
      ,error => {
        this.Message=error.Message;
      }

    )





  }
  /*
  transform(){
    return this.sanitize.bypassSecurityTrustResourceUrl(this.photos);
  }*/

  DemandeRejeter(d){
    this.authService.DemandeRejeter(d).subscribe(
      resp=>{


      }
    )

  }



  }
