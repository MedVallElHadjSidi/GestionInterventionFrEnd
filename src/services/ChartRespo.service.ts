import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthentificationService } from "./authentification.service";

@Injectable()
export class ChartRespoService{
    private host: string = "http://localhost:8080/tableaudebord";
    constructor(public auth:AuthentificationService,public http:HttpClient){

    }

    TableauBordRespoInfo(){
        return this.http.get(this.host+"/tableauBordInfo",{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});

    }
    StatistiquuesDemande(){
        return this.http.get(this.host+"/tableauBordDG",{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});

    }

}