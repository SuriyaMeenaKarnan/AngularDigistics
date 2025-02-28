import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetBannerComponent } from './blog-det-banner/blog-det-banner.component';
import { BlogDetContentComponent } from './blog-det-content/blog-det-content.component';
import { HomeModule } from '../home/home.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: "blogDetBanner",
  component: BlogDetBannerComponent
},
{
  path: "blogDetContent",
  component: BlogDetContentComponent
},
];

@NgModule({
  declarations: [
    BlogDetBannerComponent,
    BlogDetContentComponent
  ],
  imports: [
    RouterModule.forChild(routes), 
    CommonModule,
    HomeModule
  ]
})
export class BlogDetModule { }
