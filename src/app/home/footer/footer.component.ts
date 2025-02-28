import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private wowSer:NgwWowService) { }

  ngOnInit(): void {
    this.wowSer.init()
  }

}
