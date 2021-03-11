import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthentificationService } from "./authentification.service";

@Injectable()
export class ServiceBMCIService{
    private host: string = "http://localhost:8080/ServiceBMCI";
   
    constructor(public auth:AuthentificationService,public http:HttpClient){

    }

    ListServices(page){
        return this.http.get(this.host+"/listServixes/"+page,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
    }
    ChercherServices(idService){
        return this.http.get(this.host+"/editService/"+idService,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
    }
    EditService(idService,modelService){
        return this.http.put(this.host+"/EditService/"+idService,modelService,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
    

    }
    

}