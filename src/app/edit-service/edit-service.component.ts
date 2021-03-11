import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceModel } from 'src/Entities/serviceModel';
import { ServiceBMCIService } from 'src/services/ServiceBMCI.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  service:any;

  codeservice;
  page:any=0;

  constructor(public route:ActivatedRoute,public serviceBMCI:ServiceBMCIService,public router:Router) { }

  ngOnInit(): void {
    this.codeservice=atob(this.route.snapshot.params.idService);
    this.page=atob(this.route.snapshot.params.idpage);

    
    console.log(this.codeservice);
    this.serviceBMCI.ChercherServices(this.codeservice).subscribe(
      resp=>{
        this.service=resp;
      
       
      }
      
    )

  
  }
  EditerService(s){
  
    console.log(s);
    console.log(this.codeservice)
    this.serviceBMCI.EditService(this.codeservice,this.service).subscribe(
      resp=>{
        let rep=resp
        if(rep!=undefined){
          alert("Modification avec success");
          this.router.navigate(["admin/listServices/"+btoa(this.page)]);
        }
     
      }
    )


  }
}
