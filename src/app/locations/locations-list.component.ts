import {Component, OnInit} from '@angular/core'
import {LocationService} from './shared/location.service'
import {ToastrService} from '../common/toastr.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `
    <div>
      <h1>Locations</h1>
      <hr>
      <div class="row">
        <div *ngFor="let location of locations" class="col-md-5">
          <location-thumbnail (click)="handleThumbnailClick(location.name)"
                              [location]="location">
          </location-thumbnail>
        </div>
      </div>
    </div>`
})
export class LocationsListComponent implements OnInit {
  locations: any;

  constructor(private locationService: LocationService, private toastr: ToastrService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.locations = this.route.snapshot.data['locations']
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
