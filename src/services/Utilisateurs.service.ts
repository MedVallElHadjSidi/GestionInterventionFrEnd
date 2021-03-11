import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthentificationService } from "./authentification.service";

@Injectable()
export class UtilisateursService{
    
    private host: string = "http://localhost:8080/Utilisateur";

    constructor(public http:HttpClient,public auth:AuthentificationService){

    }

    ListUsers(page){
        return this.http.get(this.host+"/listeUsers/"+page,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
  
    }
    Chercher(code){
        return this.http.get(this.host+"/chercherUser/"+code,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
    }
    EditerUser(code,utilisateur){
        return this.http.put(this.host+"/EditUser/"+code,utilisateur,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
      
    }
}