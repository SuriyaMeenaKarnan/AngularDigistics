import { Component, OnInit } from '@angular/core';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { NgwWowService } from 'ngx-wow';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  // icon = faCoffee;

  constructor(private wowSer:NgwWowService) { }

  ngOnInit(): void {
    this.wowSer.init()
  }

}
