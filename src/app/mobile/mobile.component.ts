import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  mobile ={
    model : 'Realme 2 pro',
    company : 'Realme',
    price : 12000,

    specification : {
      ram : '4 GB',
      storage : '64 GB'
    }

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
