import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['admin/acceuil'])

  }
  logout(){

  }

}
