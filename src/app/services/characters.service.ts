import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, Character } from '../models/character.models';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  urlApi: string = 'https://rickandmortyapi.com/api'
  private card = new BehaviorSubject<Character | null>(null)
  card$ = this.card.asObservable()
  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get<Character>(`${this.urlApi}/character`)
  }

  getByPage(page: number) {
    return this.http.get<Character>(`${this.urlApi}/character/?page=${page}`)
    .pipe(
      tap(card => this.card.next(card))
    )
  }

  getOne(id: string) {
    return this.http.get<Result>(`${this.urlApi}/character/${id}`)
  }

  getByEpisode(character: string) {
    return this.http.get(character)
  }

}
