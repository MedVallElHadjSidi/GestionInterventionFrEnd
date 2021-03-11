import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';
import {WebSocketAPI} from '../SocketAngular/WebSocketAPI';
import {PageRespoInfoComponent} from './page-respo-info/page-respo-info.component';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{

  demande;
  rs;
  Message;
  photos;
  ctx;
  nouveauxDemandes:any=undefined;
  date=new Date();
  title = 'Gestion-Interventions-BMCI';
  listAgenceDemande=[];
  rsch;
  i:any;


  constructor(public authService:AuthentificationService,private router:Router) {


  }
  ngOnInit() {
  this.VerificationAuthentifier();
  }
    /*
    if(this.pagerespo!=undefined){
      this.nouveauxDemandes=this.pagerespo.nouveauxDemandes;
    }*/




  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }
   ChercherAgence(agence){

/*
       this.authService.DemandeByAgence("/demandeInterventions/search/findByUtilisateursAgenceNomAgence?nom="+agence).subscribe(resp=>{
       this.rsch=resp;
       this.listAgenceDemande.push(this.rsch._embedded.demandeInterventions.length)

         },error=>{
         console.log(error);
         });
  */
  }
  ModelChart(){


   }



  sansAuthentifier(){

          alert("rahi w 3aye6ilhe");
         this.authService.DemandeByAgence("/agences?projection=NameAgence").subscribe(resp=>{
          this.rs=resp;

             console.log(this.rs._embedded.agences);
/*
             for(tis.i=0;i<this.rs._embedded.agences.length;++i){
              console.log(this.i);
             }
             console.log(this.listAgenceDemande);
*/
           },error=>{
           console.log(error);
           });
           }



 VerificationAuthentifier(){
  if(localStorage.getItem('token')==undefined){
         return  this.router.navigateByUrl('/login')
  }
  else{


   let jwtHelperService=new JwtHelperService();
      this.authService.jwtToken=localStorage.getItem('token');
      let objectHelper=jwtHelperService.decodeToken(this.authService.jwtToken);

      this.authService.username=objectHelper.sub;
      console.log(this.authService.username);
      this.authService.myroles=objectHelper.roles;
    if(this.authService.isAdmin()) this.router.navigateByUrl('/admin/acceuil')
     else if(this.authService.isSimpleUser()){
     return this.router.navigateByUrl('/user')}
     else if(this.authService.isRespoInfo()){
     return  this.router.navigateByUrl("/respInfo")}
     else if (this.authService.isIntervenant())return  this.router.navigateByUrl("/intervenant")
     else if (this.authService.isDirecteurGeneral()) this.router.navigateByUrl("/DG")
     else{
              return  this.router.navigateByUrl('/login')
            }




  }

  }
  listeServices(){
    let p:any=0;
    this.router.navigate(["admin/listServices/"+btoa(p)]);
    
  }
  listeAgence(){
    let p:any=0;
    this.router.navigate(["admin/listAgence/"+btoa(p)]);
    
  }
  ListUsers(){
    let p:any=0;
    this.router.navigate(["admin/listUsers/"+btoa(p)]);
    
  }
  ListRole(){
    let p:any=0;
    this.router.navigate(["admin/listRoles/"+btoa(p)]);
    
  }
  ListMateriel(){
    let p:any=0;
    this.router.navigate(["admin/listMateriel/"+btoa(p)]);
    

  }
  Acceuil(){
    this.router.navigate(['admin/acceuil']);
  }


  }



  /*Consulter(id){
    console.log(id);



    this.authService.ChercherByidDemande(id).subscribe(
      resp=>{
        this.demande=resp;

        this.consulter=1;
       this.photos=atob(this.demande.panne.photos);
       console.log(this.demande)
        console.log(this.photos)


                const preview = document.querySelector('img');
                preview.src = this.photos ;



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
  */
  /*
  transform(){
    return this.sanitize.bypassSecurityTrustResourceUrl(this.photos);
  }*/

/*  DemandeRejeter(d){
    this.authService.DemandeRejeter(d).subscribe(
      resp=>{


      }
    )

  }*/

