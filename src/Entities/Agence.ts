import {Adresse} from './Adresse';
import {Utilisateur} from './Utilisateur';

export class Agence {
  private idAgence;
  private nomAgence:string;
  public adresse:Adresse;
  private  utilisateurs:Array<Utilisateur>;
  constructor() {
  }
  getNomAgence(){
    return this.nomAgence
  }
  getAdresse(){
    return this.adresse;
  }
  setNomAgence(nomAgence:string){
    this.nomAgence=nomAgence
  }
  setAdresse(adresse:Adresse){
    this.adresse=adresse;
  }

  setUtilisateurs(utilisateurs:Array<Utilisateur>){
    this.utilisateurs=utilisateurs;
  }
  setIdAgence(id){
    this.idAgence=id
  }





}
