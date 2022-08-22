import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Result } from 'src/app/models/episodes.model';
import { EpisodesService } from 'src/app/services/episodes.service';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-description-episodes',
  templateUrl: './description-episodes.component.html',
  styleUrls: ['./description-episodes.component.scss']
})
export class DescriptionEpisodesComponent implements OnInit {

  episodeId: string | null = null
  episode: Result | null = null

  constructor(
    private route: ActivatedRoute,
    private episodesService: EpisodesService,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.episodeId = params.get('id');
        if (this.episodeId) {
          return this.episodesService.getOne(this.episodeId)
        }
        return [null]
      }) 
    )
    .subscribe(data => {
      this.episode = data
    })
  }


}


