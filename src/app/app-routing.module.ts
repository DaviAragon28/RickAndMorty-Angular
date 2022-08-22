import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DescriptionCharacterComponent } from './website/pages/description-character/description-character.component';
import { DescriptionEpisodesComponent } from './website/pages/description-episodes/description-episodes.component';
import { DescriptionLocationsComponent } from './website/pages/description-locations/description-locations.component';
import { EpisodesComponent } from './website/pages/episodes/episodes.component';
import { LocationsComponent } from './website/pages/locations/locations.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: 'character/:id',
    component: DescriptionCharacterComponent
  },
  {
    path: 'episode/:id',
    component: DescriptionEpisodesComponent
  },
  {
    path: 'location/:id',
    component: DescriptionLocationsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
