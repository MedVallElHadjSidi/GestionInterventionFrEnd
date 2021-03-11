import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthentificationService } from "./authentification.service";

@Injectable()
export class MaterielService{
    private host: string = "http://localhost:8080/materielService";
   
    constructor(public auth:AuthentificationService,public http:HttpClient){

    }
    ListMateriel(page){
        return this.http.get(this.host+"/listMateriels/"+page,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
    }
    ChercherMateriel(idMateriel){
        return this.http.get(this.host+"/chercherMateriel/"+idMateriel,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
    }
    EditMateriel(idMateriel,materiel){
        return this.http.put(this.host+"/EditMateriel/"+idMateriel,materiel,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
    

    }

}