import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Locations, Result } from '../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  apiUrl: string = 'https://rickandmortyapi.com/api/location'
  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get<Locations>(`${this.apiUrl}`)
  }

  getByPage(page: number) {
    return this.http.get<Locations>(`${this.apiUrl}?page=${page}`)
  }

  getOne(id: string) {
    return this.http.get<Result>(`${this.apiUrl}/${id}`)
  }

}
