import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthentificationService } from "./authentification.service";

@Injectable()
export class AgenceService{
    private host: string = "http://localhost:8080/AgenceBMCI";
   
    constructor(public http:HttpClient,public auth:AuthentificationService){

    }
    ListAgence(page){
        return this.http.get(this.host+"/MesAgences/"+page,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
    }
    ChercherAgence(idAgence){

        return this.http.get(this.host+"/editAgence/"+idAgence,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});

    }
    EditAgence(idAgence,agence){
        return this.http.put(this.host+"/EditAgence/"+idAgence,agence,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
    

    }



}