import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Adresse} from '../Entities/Adresse';
import {ModelAgence} from '../Entities/ModelAgence';
import {Role} from '../Entities/Role';
import {ModelAffectAgUser} from '../Entities/ModelAffectAgUser';
import {ModelCategorie} from '../Entities/ModelCategorie';
import {Materiel} from '../Entities/Materiel ';




@Injectable()
export  class AuthentificationService {
  public jwtToken = null;

  private host: string = "http://localhost:8080";
  private myroles: Array<any>;

  constructor(private  http: HttpClient) {
  }

  login(user) {
    return this.http.post(this.host + "/login", user, {observe: 'response'});
  }

  saveToken(jwt) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    let jwtHelperService=new JwtHelperService();
    let objectHelper=jwtHelperService.decodeToken(this.jwtToken)
    this.myroles=objectHelper.roles


  }
  SaveAdresse(adresse:Adresse){
    return this.http.post(this.host+"/addAdresse",adresse,{headers:new HttpHeaders({'authorization':this.jwtToken})})
  }
  SaveUser(user){
 return this.http.post(this.host+"/addUser",user,{headers:new HttpHeaders({'authorization':this.jwtToken})})
  }
  addMateriel(materiel:Materiel){

  return this.http.post(this.host+"/addMateriel",materiel,{headers:new HttpHeaders({'authorization':this.jwtToken})})
  }

  SaveRole(role:Role){
   return this.http.post(this.host+"/addRole",role,{headers:new HttpHeaders({'authorization':this.jwtToken})})

   }
   AffecterRole(role){
      return this.http.post(this.host+"/affecterRole",role,{headers:new HttpHeaders({'authorization':this.jwtToken})})

      }
  affectAgUser(modelAffectAgUser:ModelAffectAgUser){
   return this.http.post(this.host+"/affectAgUser",modelAffectAgUser,{headers:new HttpHeaders({'authorization':this.jwtToken})})
  }
  AddCategorie(categorie:ModelCategorie){
  return this.http.post(this.host+"/ajouterCategorie",categorie,{headers:new HttpHeaders({'authorization':this.jwtToken})})
  }


  addService(modelService){
  return this.http.post(this.host+"/addService",modelService,{headers:new HttpHeaders({'authorization':this.jwtToken})})

  }

  AffecterInter(modelIntervenantService){
    return this.http.post(this.host+"/addServiceIntervenant",modelIntervenantService,{headers:new HttpHeaders({'authorization':this.jwtToken})})

    }



  ChercherByCodeAdresseAll(){
  return this.http.get(this.host+"/ChercherByCodeAdresseAll",{headers: new HttpHeaders({'authorization': this.jwtToken})});

  }

  AgencesNames(){
  return this.http.get(this.host+"/AgencesNames",{headers: new HttpHeaders({'authorization': this.jwtToken})});


  }
  UserNames(){
  return this.http.get(this.host+"/UserNames",{headers: new HttpHeaders({'authorization': this.jwtToken})});

  }
  CategoriesNames(){
   return this.http.get(this.host+"/categories?projection=NomCategorie",{headers: new HttpHeaders({'authorization': this.jwtToken})});


  }
   ServicesNames(){
     return this.http.get(this.host+"/ServicesNames",{headers: new HttpHeaders({'authorization': this.jwtToken})});


    }
   servicesNamesSansRespo(){
     return this.http.get(this.host+"/ServicesSansRespo",{headers: new HttpHeaders({'authorization': this.jwtToken})});

    }
    RespoSansService(){
       return this.http.get(this.host+"/RespoSansService",{headers: new HttpHeaders({'authorization': this.jwtToken})});


    }




  ChercherAllRolesNames(){
  return this.http.get(this.host+"/ChercherAllRolesNames",{headers: new HttpHeaders({'authorization': this.jwtToken})});

  }

  ChercherUserSansRole(){
    return this.http.get(this.host+"/ChercherUserSansRole",{headers: new HttpHeaders({'authorization': this.jwtToken})});


  }

  AffectationIntervenant(){
    return this.http.get(this.host+"/AffectationIntervenant",{headers: new HttpHeaders({'authorization': this.jwtToken})});


  }
  AffecterResponsable(service){
    return this.http.post(this.host+"/AffectRespoService",service,{headers: new HttpHeaders({'authorization': this.jwtToken})});

  }

  SaveAgence(modelAgence:ModelAgence) {
    console.log("agence:"+modelAgence);
    return this.http.post(this.host + "/addAgence", modelAgence, {headers: new HttpHeaders({'authorization': this.jwtToken})});
  }
  findByCodeAdresse(code:String){
  console.log(code)
    return this.http.get(this.host+"/chercheByCodeAdresse"+"/"+code,{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }

  loadTokn() {
    this.jwtToken = localStorage.getItem('token');
  }

  logout() {
    this.jwtToken=null;
    localStorage.removeItem('token')
    this.myroles=undefined

  }
  isAuthentifier(){
    if(this.myroles!=undefined)return true;
    return false;


  }
  isIntervenant(){

    if(this.myroles!=undefined){
      for (let  role of this.myroles){
        if (role.authority=='INTERVENANT') return true;
      }
    }
  }

  isAdmin(){
    if(this.myroles!=undefined) {
      for (let role of this.myroles) {
        if (role.authority == 'ADMIN') return true;
      }
    }
  return  false;

  }
  isRespoInfo(){
    if(this.myroles!=undefined) {
      for (let role of this.myroles) {
        if (role.authority == 'RESPONSABLE') return true;

      }
    }
    return  false;

  }
  isSimpleUser() {
    if (this.myroles != undefined) {
      for (let role of this.myroles) {
        if (role.authority == 'S-USER') return true;

      }
    }


    return false;

  }

}
