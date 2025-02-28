import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.css']
})
export class AboutMainComponent implements OnInit {

  constructor(private wowSer:NgwWowService) { }

  ngOnInit(): void {
    this.wowSer.init();
  }

}
