import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/episodes.model';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes: Result[] = [] 
  page: number = 1

  constructor(
    private episodesService: EpisodesService
  ) { }

  ngOnInit(): void {
    this.getEpisodes()
  }

  getEpisodes() {
    this.episodesService.episodes().subscribe(data => {
      this.episodes = data.results      
    })
  }

  loadMore() {
    this.page++
    this.episodesService.getByPage(this.page).subscribe(data => {
      this.episodes.push(...data.results)
    })
  }
}
