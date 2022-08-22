import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';

import { CardsComponent } from './components/cards/cards.component';
// import { DescriptionCharacterComponent } from './pages/description-character/description-character.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { ImgComponent } from './components/img/img.component';
import { HomeComponent } from './pages/home/home.component';
import { DescriptionEpisodesComponent } from './pages/description-episodes/description-episodes.component';
import { DescriptionLocationsComponent } from './pages/description-locations/description-locations.component';


@NgModule({
  declarations: [
    CardsComponent,
    // DescriptionCharacterComponent,
    EpisodesComponent,
    LocationsComponent,
    LayoutComponent,
    HeaderComponent,
    CardComponent,
    ImgComponent,
    HomeComponent,
    DescriptionEpisodesComponent,
    DescriptionLocationsComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
