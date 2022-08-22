import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/character.models';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CharactersService } from 'src/app/services/characters.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-description-character',
  templateUrl: './description-character.component.html',
  styleUrls: ['./description-character.component.scss']
})
export class DescriptionCharacterComponent implements OnInit {

  characterId: string | null = null
  character: Result | null = null

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.characterId = params.get('id');
        if (this.characterId) {
          console.log(this.characterId);
          return this.charactersService.getOne(this.characterId)
        }
        return [null]
      }) 
    )
    .subscribe(data => {
      this.character = data
    })
  }

  goToBack() {
    this.location.back()
  }
  
}
