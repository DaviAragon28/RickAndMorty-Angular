import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Result } from 'src/app/models/character.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() result: Result = {
    created: '',
    episode: [],
    gender: '',
    id: 0,
    image: '',
    location: {
      name: '',
      url:  ''
    },
    name:  '',
    origin: {
      name: '',
      url:  ''
    },
    species:  '',
    status:   '',
    type:     '',
    url:      '',

  }

  // @Output() oneCharacter = new EventEmitter<Result>()
  constructor() { }

  ngOnInit(): void {
  }

  // character(result: Result) {
  //   this.oneCharacter.emit(result)
  // }
}
