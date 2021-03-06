import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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
  public username;
  public isrespo=false;

  private host: string = "http://localhost:8080";
  public myroles: Array<any>;

  constructor(private  http: HttpClient) {
  }

  login(user) {
    return this.http.post(this.host + "/login", user, {observe: 'response'});
  }
  ChercherParentCategorie(){
    return this.http.get(this.host+"/ChercherAllCategorieParent",{headers: new HttpHeaders({'authorization': this.jwtToken})});

  }


ChercherSousCategorieNames(nom:string){

    return this.http.get(this.host+"/ChercherSousCategorieNames"+"/"+nom,{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }




  saveToken(jwt) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    let jwtHelperService=new JwtHelperService();
    let objectHelper=jwtHelperService.decodeToken(this.jwtToken);
    this.username=objectHelper.sub;
    console.log(this.username);
    this.myroles=objectHelper.roles;
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
   return this.http.post(this.host+"/addRole",role,{headers:new HttpHeaders({'authorization':this.jwtToken})})}
   AffecterRole(role){
    /*
      return this.http.post(this.host+"/affecterRole",role,{headers:new HttpHeaders({'authorization':this.jwtToken})})
*/

  }
  affectAgUser(modelAffectAgUser:ModelAffectAgUser){
   return this.http.post(this.host+"/affectAgListUser",modelAffectAgUser,{headers:new HttpHeaders({'authorization':this.jwtToken})})
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
  AffectationListIntervenantService(){
    return this.http.get(this.host+"/AffectationListIntervenantSrv",{headers: new HttpHeaders({'authorization': this.jwtToken})});
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
  findByAllMaterielNames(username:string){
    return this.http.get(this.host+"/ChercherAllMaterielNames"+"/"+username,{headers: new HttpHeaders({'authorization': this.jwtToken})});
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
        if (role.authority == 'RESPONSABLE') {
          this.isrespo=true;

          return true;}

      }
    }
    return  false;

  }
  isDirecteurGeneral() {
    if (this.myroles != undefined) {
      for (let role of this.myroles) {
        if (role.authority == 'DG') return true;
      }
    }
    return false;
  }

  isSimpleUser() {
    if (this.myroles != undefined) {
      for (let role of this.myroles) {
        if (role.authority == 'S-USER') return true;
      }
    }
    return false;
  }
  Notification(){
    return this.http.get(this.host+"/Notification",{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }


  NouveauMessagesDemande(){
    console.log("nouveaux avec service")
    return this.http.get(this.host+"/NouveauxDemandes",{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }

  DemandesEncours(){
    return this.http.get(this.host+"/DemandesEncours",{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }
  EspaceDemande(id){
  return this.http.get(this.host+"/EspaceDemande/"+id,{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }
  DemandeEncousUser(page,username){
    return this.http.get(this.host+"/DemandeEncoursUser/"+page+"/"+username,{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }
  fermersansResolu(id){
  return this.http.get(this.host+"/fermersansResolu/"+id,{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }
  EspaceFermerInterventionResolu(id){
  return this.http.get(this.host+"/EspaceFermerInterventionResolu/"+id,{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }

  ChercherByidDemande(id){
    return this.http.get(this.host+"/ChercherByidDemande/"+id,{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }
  CherCherByIdNouveauxMissionEnCours(id){
    return this.http.get(this.host+"/ChercherByidDemandeInterVensionEncours/"+id,{headers: new HttpHeaders({'authorization': this.jwtToken})});
  


  }
  imagesDemandes(id)
  {
    return this.http.get(this.host+"/imagesDemandes/"+id,{headers: new HttpHeaders({'authorization': this.jwtToken})});


  }
  Tester(file){
    console.log(file)
    return this.http.post(this.host+"/file",file,{headers:new HttpHeaders({'authorization':this.jwtToken})})
  }
  ResetDemande(message){
  console.log(message);

     return this.http.post<any>(this.host+"/app/envoyer",message,{headers:new HttpHeaders({'authorization':this.jwtToken})});
      }
  DemandeRejeter(d){
    return this.http.get(this.host+"/rejeter/"+d,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  DemandeRejeterLue(id){
    return this.http.get(this.host+"/rejeterNotifierModifier/"+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  

  }


  EspcaeIDIntervention(idDemande,username)
  {
    console.log(idDemande);
    console.log(username);
   return this.http.get(this.host+"/espace/"+idDemande+"/"+username,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
   EnvoyerDemandeEspace(message){
   console.log(message);
      return this.http.post<any>(this.host+"/app/interventionsimple",message,{headers:new HttpHeaders({'authorization':this.jwtToken})});}

  DemandeResolus(page){
  let username=this.username;
    return this.http.get(this.host+"/DemandeUserResolus/"+page+"/"+username,{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }
  DemandeUserNonResolus(page){
    let username=this.username;
    return this.http.get(this.host+"/DemandeUserNonResolus/"+page+"/"+username,{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }
  MissionIntervenantResolu(username){
  
    return this.http.get(this.host+"/missionInterventionResolu/"+username,{headers: new HttpHeaders({'authorization': this.jwtToken})});
 
  }
  MissionIntervenantNonResolu(username){
  
    return this.http.get(this.host+"/missionInterventionNonResolu/"+username,{headers: new HttpHeaders({'authorization': this.jwtToken})});
 
  }
  MissionIntervenantHistorique(username){
  
    return this.http.get(this.host+"/missionInterventionHistorique/"+username,{headers: new HttpHeaders({'authorization': this.jwtToken})});
 
  }


  DemandeUserEnAttente(page){
    let username=this.username;
    return this.http.get(this.host+"/DemandeUserEnAttente/"+page+"/"+username,{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }
  DemandeRejeterUser(page){
  let username=this.username;
    return this.http.get(this.host+"/DemandeRejeterUser/"+page+"/"+username,{headers: new HttpHeaders({'authorization': this.jwtToken})});
  }

  ConsulterHistoriqueUser(page){
    let username=this.username;
      return this.http.get(this.host+"/ConsulterHistoriqueUser/"+page+"/"+username,{headers: new HttpHeaders({'authorization': this.jwtToken})});
    }
    ConsulterHistoriquesServicesRespo(page){
      return this.http.get(this.host+"/ConsulterHistoriqueServicesInfo/"+page,{headers: new HttpHeaders({'authorization': this.jwtToken})});
   
    }



  InterventionViaIintervenant(demandeIntervenant){
    console.log(demandeIntervenant);
    return this.http.post<any>(this.host+"/interventionComplex",demandeIntervenant,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  DemandeAsoocierIntervenant(username){
    console.log(username);
    return this.http.get(this.host+"/DemandeAsoocierIntervenant/"+username,{headers:new HttpHeaders({'authorization':this.jwtToken})})
  }
   DemandeAsoocierIntervenantEncours(username){
      return this.http.get(this.host+"/DemandeAsoocierIntervenantEncours/"+username,{headers:new HttpHeaders({'authorization':this.jwtToken})})


    }
    InterventionNonResolu(page){
      return this.http.get(this.host+"/interventionsNonResolus/"+page,{headers:new HttpHeaders({'authorization':this.jwtToken})});
    }



  IntervenantLibreServiceInfo(){
    return this.http.get(this.host+"/intervenantsNamesLibres",{headers:new HttpHeaders({'authorization':this.jwtToken})})
  }
  ChangerEtatIntervenant(username){
    return this.http.get(this.host+"/ChangerEtatIntervenant/"+username,{headers:new HttpHeaders({'authorization':this.jwtToken})})

  }

  NombreInterventionEncours(){
   return this.http.get(this.host+"/NombreInterventionEncours",{headers:new HttpHeaders({'authorization':this.jwtToken})})
  }

  NombreInterventionrResolu(){
   return this.http.get(this.host+"/NombreInterventionResolu",{headers:new HttpHeaders({'authorization':this.jwtToken})})
  }
  NombreInterventionNonResolu(){
    return this.http.get(this.host+"/NombreInterventionNonResolu",{headers:new HttpHeaders({'authorization':this.jwtToken})})

  }

  ServiceResolu(page){
  return this.http.get(this.host+"/ServiceResolu/"+page,{headers:new HttpHeaders({'authorization':this.jwtToken})})
  }
   ChercherComplet(modelRecherche){
      console.log(modelRecherche)
      return this.http.post(this.host+"/chercherDemandeComplet",modelRecherche,{headers:new HttpHeaders({'authorization':this.jwtToken})})
    }
    rejeterNotifier(page,username){
      return this.http.get(this.host+"/rejeterNotifier/"+page+"/"+username,{headers: new HttpHeaders({'authorization': this.jwtToken})});


    }


    DemandeByAgence(url){
     return this.http.get(this.host+url,{headers: new HttpHeaders({'authorization': this.jwtToken})});
     }
     DemandeByMateriel(url){
      return this.http.get(this.host+url,{headers: new HttpHeaders({'authorization': this.jwtToken})});
    
     }
     StatistiquesPanne(nom){
      return this.http.get(this.host+"/"+"demandeInterventions/search/findByPanneCategorieNom?nom="+nom,{headers: new HttpHeaders({'authorization': this.jwtToken})});
    

     }

     ChercherByidDemandePanneMateriel(idPanne){
      return this.http.get(this.host+"/materielService/chercherMaterielpANNE/"+idPanne,{headers: new HttpHeaders({'authorization': this.jwtToken})});
    }

    EiditerDemande(modelEditDemande){
   
    
         return this.http.post<any>(this.host+"/EditerDemandeIntervention",modelEditDemande,{headers:new HttpHeaders({'authorization':this.jwtToken})});
          }



}
