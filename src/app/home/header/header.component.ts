import { Component, HostListener, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
// import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { interval } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerNav: any;
  bar = document.getElementById("progress");
  width = document.querySelector(".width");
        
  count: number = 0;
  barWidth: string = "";
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // Change 50 to any threshold you want
  }

  constructor(private wowSer:NgwWowService) { }

  ngOnInit(): void {
    this.wowSer.init()
    window.onload = () => {
      const container = document.getElementById("main-bar");
      interval(30).subscribe(() => {
        
          // 
        if(this.count <= 100){
          this.barWidth=this.count + "%";
          this.count++;
        if(this.count == 100){
          container?.classList.add("hide");
        }
       }
  });
  }
}
navBtn(){
  const navWrapper = document.getElementById("nav-container");
  console.log(navWrapper);

  navWrapper?.classList.toggle("mobile-menu-open");
}
}
