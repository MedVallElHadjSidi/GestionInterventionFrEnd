import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from '@auth0/angular-jwt';



@Injectable()
export  class AuthentificationService {
  private jwtToken = null;

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

  loadTokn() {
    this.jwtToken = localStorage.getItem('token');
  }

  logout() {
    this.jwtToken=null;
    localStorage.removeItem('token')
    this.myroles=undefined

  }

  isAdmin(){
    for (let role of this.myroles){
      if (role.authority=='ADMIN') return true;

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
