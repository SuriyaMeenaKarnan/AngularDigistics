import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-about-index',
  templateUrl: './about-index.component.html',
  styleUrls: ['./about-index.component.css']
})
export class AboutIndexComponent implements OnInit {

  
  constructor(private wowSer:NgwWowService) { }

  ngOnInit(): void {
  this.wowSer.init();
  }
  

}
