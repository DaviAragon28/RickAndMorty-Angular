import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { LayoutComponent } from './components/layout/layout.component';
// import { DescriptionCharacterComponent } from './pages/description-character/description-character.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationsComponent } from './pages/locations/locations.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'episodes',
        component: EpisodesComponent
      },
      {
        path: 'locations',
        component: LocationsComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
