import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutBannerComponent } from './about-banner/about-banner.component';
import { AboutNftComponent } from './about-nft/about-nft.component';
import { AboutMainComponent } from './about-main/about-main.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutFAQComponent } from './about-faq/about-faq.component';
import { HomeModule } from '../home/home.module';
import { Route, RouterModule, Routes } from '@angular/router';
import { NgwWowModule } from "ngx-wow";


const routes: Routes = [
  {
    path: "aboutBan",
    component: AboutBannerComponent
  },
  {
    path: "aboutNft",
    component: AboutNftComponent
  },
  {
    path: "aboutMain",
    component: AboutMainComponent
  },
  {
    path: "aboutTeam",
    component: AboutTeamComponent
  },
  {
    path: "aboutFaq",
    component: AboutFAQComponent
  },
]

@NgModule({
  declarations: [
    AboutBannerComponent,
    AboutNftComponent,
    AboutMainComponent,
    AboutTeamComponent,
    AboutFAQComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HomeModule,
    NgwWowModule
  ],
  exports: [
    AboutBannerComponent,
    AboutNftComponent,
    AboutMainComponent
  ]
})
export class AboutModule { }
