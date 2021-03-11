import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthentificationService } from "./authentification.service";

@Injectable()
export class RoleService{
    private host: string = "http://localhost:8080/RolesService";
   
    constructor(public auth:AuthentificationService,public http:HttpClient){

    }
    ListRole(page){
        return this.http.get(this.host+"/listRoles/"+page,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
    }
    ChercherRole(id_Role){
        return this.http.get(this.host+"/ChercherRole/"+id_Role,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
    }
    EditRole(id_Role,role){
        return this.http.put(this.host+"/EditRole/"+id_Role,role,{headers: new HttpHeaders({'authorization': this.auth.jwtToken})});
    

    }


}