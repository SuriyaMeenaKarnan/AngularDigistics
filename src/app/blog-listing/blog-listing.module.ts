import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListingBannerComponent } from './blog-listing-banner/blog-listing-banner.component';
import { BlogListContentComponent } from './blog-list-content/blog-list-content.component';
import { HomeModule } from '../home/home.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: "blogListBanner",
  component: BlogListingBannerComponent
},
{
  path: "blogListContent",
  component: BlogListContentComponent
},
];

@NgModule({
  declarations: [
    BlogListingBannerComponent,
    BlogListContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 

    HomeModule
  ]
})
export class BlogListingModule { }
