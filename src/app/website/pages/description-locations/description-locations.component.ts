import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Result } from 'src/app/models/locations.model';

@Component({
  selector: 'app-description-locations',
  templateUrl: './description-locations.component.html',
  styleUrls: ['./description-locations.component.scss']
})
export class DescriptionLocationsComponent implements OnInit {

  locationId: string | null = null
  location: Result | null = null

  constructor(
    private locationsService: LocationsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.locationId = params.get('id');
        if (this.locationId) {
          return this.locationsService.getOne(this.locationId)
        }
        return [null]
      }) 
    )
    .subscribe(data => {
      this.location = data
    })
  }

}
