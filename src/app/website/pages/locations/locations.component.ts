import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
import { Result } from 'src/app/models/locations.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations: Result[] =  []
  page: number = 1
  
  constructor(
    private locationsService: LocationsService
  ) { }

  ngOnInit(): void {
    this.getAllLocations()
  }

  getAllLocations() {
    this.locationsService.get().subscribe(data => {
      this.locations = data.results
    })
  }

  loadMore() {
    this.page++
    this.locationsService.getByPage(this.page).subscribe(data => {
      const more = data.results
      this.locations.push(...more)
    })
  }
}
