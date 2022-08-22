import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episodes, Result } from '../models/episodes.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  apiURL = 'https://rickandmortyapi.com/api/episode'

  constructor(
    private http: HttpClient
  ) { }

  episodes() {
    return this.http.get<Episodes>(`${this.apiURL}`)
  }

  getByPage(page: number) {
    return this.http.get<Episodes>(`${this.apiURL}?page=${page}`)
  }

  getOne(id: string) {
    return this.http.get<Result>(`${this.apiURL}/${id}`)
  }
}
