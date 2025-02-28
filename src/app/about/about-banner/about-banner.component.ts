import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-about-banner',
  templateUrl: './about-banner.component.html',
  styleUrls: ['./about-banner.component.css']
})
export class AboutBannerComponent implements OnInit {

  constructor(private wowSer:NgwWowService) { }

  ngOnInit(): void {
    this.wowSer.init();
  }

}
