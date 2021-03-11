import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceBMCIService } from 'src/services/ServiceBMCI.service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {
  page:any;
  tableauPages=[];
  listServices=[];

  constructor(public serviceBMCI:ServiceBMCIService,public router:ActivatedRoute,public route:Router) { }

  ngOnInit(): void {
    //console.log("hello")
    
    let p=atob(this.router.snapshot.params.page);
    this.page=p;
    this.ListServices();

  }

  ListServices(){

    this.serviceBMCI.ListServices(this.page).subscribe(resp=>{
      
      this.listServices=resp['content'];
     // console.log(this)
      this.tableauPages=new Array(resp['totalPages']);
    })
  }
  setpageService(i,event:any){
    /* pris en mise ajours */
     event.preventDefault();
     this.page=i;
     this.ListServices();
   }
   modifierService(id){
    console.log(id);
    this.route.navigate(['admin/editService/'+btoa(id)+"/"+btoa(this.page)])


   }

}
