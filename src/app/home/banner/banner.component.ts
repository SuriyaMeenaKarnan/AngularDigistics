import { Component, OnInit } from '@angular/core';

import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private wowService: NgwWowService) { 
    
  }

  ngOnInit(): void {
    this.wowService.init();
  }
  
  bar = document.getElementById("progress");
  

}
