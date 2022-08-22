import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Result, Character } from 'src/app/models/character.models';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  results: Result[] = []
  page: number = 1

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.getAllCharacters()
  }

  getAllCharacters() {
    this.charactersService.get().subscribe(data => {
      this.results = data.results
    })
  }

  loadMore() {
    this.page++
    this.charactersService.getByPage(this.page).subscribe(data => {
      const more = data.results
      this.results.push(...more)
    })
  }

  toTop() {
    window.scrollTo(0, 0)
  }


}
