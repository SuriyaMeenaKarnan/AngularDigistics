import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactBannerComponent } from './contact-banner/contact-banner.component';
import { HomeModule } from '../home/home.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "contactBanner",
    component: ContactBannerComponent
  },
];

@NgModule({
  declarations: [
    ContactComponent,
    ContactBannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HomeModule
  ],
  exports: [
  ]
})
export class ContactModule { }
