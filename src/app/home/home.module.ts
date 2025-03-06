import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutIndexComponent } from './about-index/about-index.component';
import { CollectionListComponent } from './collection-list/collection-list.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { TeamComponent } from './team/team.component';
import { JoinCommunityComponent } from './join-community/join-community.component';
import { ArtistComponent } from './artist/artist.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button'; 
import { RouterModule, Routes } from '@angular/router';
import { NgwWowModule } from "ngx-wow";
import { AddFormComponent } from './add-form/add-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: "index",
    component: HeaderComponent
  },
  {
    path: "banner",
    component: BannerComponent
  },
  {
    path:"aboutIndex",
    component: AboutIndexComponent
  },
  {
    path: "collection",
    component: CollectionListComponent
  },
  {
    path:"roadmap",
    component: RoadmapComponent
  },
  {
    path: "team",
    component: TeamComponent
  },
  {
    path: "joinCommunity",
    component: JoinCommunityComponent
  },
  {
    path: "artist",
    component:ArtistComponent
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "media",
    component: FooterComponent
  },

];
@NgModule({
  declarations: [
    HeaderComponent, 
    BannerComponent,
    AboutIndexComponent,
    CollectionListComponent,
    RoadmapComponent,
    TeamComponent,
    JoinCommunityComponent,
    ArtistComponent,
    FaqComponent,
    FooterComponent,
    AddFormComponent
  ],
  imports: [
    CommonModule, 
    MatButtonModule,
    // AboutModule,
    NgwWowModule,
     RouterModule.forChild(routes),
     FormsModule,
     ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
    // BannerComponent,
    // AboutIndexComponent,
    // CollectionListComponent,
    // RoadmapComponent,
    // TeamComponent,
    // JoinCommunityComponent,
    // ArtistComponent,
    // FaqComponent,
    // FooterComponent
  ]
})
export class HomeModule { }
