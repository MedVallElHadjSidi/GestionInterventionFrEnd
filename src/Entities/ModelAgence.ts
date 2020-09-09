export class ModelAgence{
      private nomAgence:string;
      private codeAdresse:string;
      constructor() {
        }
      public getNomAgence(){
      return this.nomAgence;}
      public getCodeAdresse(){
      return this.codeAdresse}
      public setNomAgence(nom){
      this.nomAgence=nom;
      }
      public setCodeAdresse(code){
      this.codeAdresse=code;}


}
