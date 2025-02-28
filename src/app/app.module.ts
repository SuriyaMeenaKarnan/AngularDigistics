import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { BlogDetModule } from './blog-det/blog-det.module';
import { BlogListingModule } from './blog-listing/blog-listing.module';
import { PrivacyModule } from './privacy/privacy.module';

import { RouterModule, Routes } from '@angular/router';
import { NgwWowModule, NgwWowService } from 'ngx-wow';
// import { TranslateModule } from '@ngx-translate/core';


const appRoutes: Routes = [
  {
    path: 'HomeM',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'AboutM',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'ContactM',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'BlogdetM',
    loadChildren: () => import( './blog-det/blog-det.module').then(m => m.BlogDetModule)
  },
  {
    path: 'BloglistM',
    loadChildren: () => import('./blog-listing/blog-listing.module').then(m => m.BlogListingModule)
  },
  {
    path: 'PrivacyM',
    loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyModule)
  },
  {
    path: '',
    redirectTo: '/HomeM/banner',
    pathMatch: 'full'
  },
 
   
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HomeModule,
    AboutModule,
    ContactModule,
    BlogDetModule,
    BlogListingModule,
    PrivacyModule,
    BrowserAnimationsModule,
    // NgwWowModule,
    RouterModule.forRoot(appRoutes)
    // TranslateModule.forRoot(),
  ],
  providers: [ NgwWowService ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{

  constructor(private wowSer:NgwWowService){
    this.wowSer.init()
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
