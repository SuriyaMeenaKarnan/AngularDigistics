import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './privacy/privacy.component';
import { PrivacyBannerComponent } from './privacy-banner/privacy-banner.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { NgwWowModule } from "ngx-wow";

const routes: Routes = [

  {
    path: "privacy",
    component: PrivacyComponent
  },
  {
    path: "privacyBanner",
    component: PrivacyBannerComponent
  }
];


@NgModule({
  declarations: [
    PrivacyComponent,
    PrivacyBannerComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), HomeModule, NgwWowModule
  ]
})
export class PrivacyModule { }
