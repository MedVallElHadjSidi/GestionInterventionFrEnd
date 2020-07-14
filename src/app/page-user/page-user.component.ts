import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {
  date =new  Date()

  constructor() { }

  ngOnInit(): void {
  }

}
