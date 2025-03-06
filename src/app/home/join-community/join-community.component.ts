import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { NgwWowService } from 'ngx-wow';
import { ModalServiceService } from 'src/app/serviceFiles/modal-service.service';

@Component({
  selector: 'app-join-community',
  templateUrl: './join-community.component.html',
  styleUrls: ['./join-community.component.css']
})
export class JoinCommunityComponent implements OnInit {

  constructor(private wowSer:NgwWowService, public modalService:ModalServiceService, private formBuilder: FormBuilder) { }

  profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    userName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]]
  })

  ngOnInit(): void {
    this.wowSer.init()
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
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
