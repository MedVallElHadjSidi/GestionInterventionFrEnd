export class  Adresse {
  private  codeAdresse:string;
  private  wilaye:string;
  private  commune:string;
  private  ville:string;
  private rue:string;
  getCodeAdresse(){
    return this.codeAdresse
  }
  getWilaye(){
    return this.wilaye
  }
  getCommune(){
    return this.commune
  }
  getVille(){
    return this.ville;
  }
  getRue(){
    return this.rue;
  }
  SetWilaye(wilaye:string){
    this.wilaye=wilaye;
  }
  SetCommune(commune:string){
    this.commune=commune;
  }
  SetVille(ville:string){
    this.ville=ville;
  }
  SetRue(rue:string){
    this.rue=rue;
  }
  SetCodeAdresse(code:string){
    this.codeAdresse=code
  }


}
