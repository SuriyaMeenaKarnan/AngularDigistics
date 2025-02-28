import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-privacy-banner',
  templateUrl: './privacy-banner.component.html',
  styleUrls: ['./privacy-banner.component.css']
})
export class PrivacyBannerComponent implements OnInit {

  constructor(private wowSer:NgwWowService) { }

  ngOnInit(): void {
    this.wowSer.init();
  }

}
