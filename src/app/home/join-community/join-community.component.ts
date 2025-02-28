import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-join-community',
  templateUrl: './join-community.component.html',
  styleUrls: ['./join-community.component.css']
})
export class JoinCommunityComponent implements OnInit {

  constructor(private wowSer:NgwWowService) { }

  ngOnInit(): void {
    this.wowSer.init()
  }

  // adjustElementHeights() {
  //   const floatingImagesWidth = this.floatingImages.nativeElement.offsetWidth;
  //   this.floatingImages.nativeElement.style.height = floatingImagesWidth + 'px';

  //   const joinUsWrapperWidth = this.joinUsWrapper.nativeElement.offsetWidth;
  //   this.joinUsWrapper.nativeElement.style.height = joinUsWrapperWidth + 'px';
  // }


  // @Component({
  //   selector: 'app-my-component',
  //   template: `
  //     <div class="banner-floating-images" #floatingImages></div>
  //     <div class="join-us-wrapper" #joinUsWrapper></div>
  //   `
  // })
  // export class MyComponent implements AfterViewInit {
  //   @ViewChild('floatingImages', { static: false }) floatingImages: ElementRef;
  //   @ViewChild('joinUsWrapper', { static: false }) joinUsWrapper: ElementRef;
  
  //   ngAfterViewInit() {
  //     this.adjustElementHeights();
  //   }
  
  //   adjustElementHeights() {
  //     const floatingImagesWidth = this.floatingImages.nativeElement.offsetWidth;
  //     this.floatingImages.nativeElement.style.height = floatingImagesWidth + 'px';
  
  //     const joinUsWrapperWidth = this.joinUsWrapper.nativeElement.offsetWidth;
  //     this.joinUsWrapper.nativeElement.style.height = joinUsWrapperWidth + 'px';
  //   }
  
  //   onResize(event) {
  //     this.adjustElementHeights();
  //   }
  // }


  count =0;

  adjustElementHeights(){
    console.log(this.count);
  }

}
