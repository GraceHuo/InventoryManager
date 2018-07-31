import {Component, OnInit} from '@angular/core'
import {LocationService} from '../shared/location.service'
import {ActivatedRoute} from '@angular/router'
import {ILocation} from '../shared/index';


@Component({
  templateUrl: './location-details.component.html',
  styles: [`
    .container {
      padding-left  : 20px;
      padding-right : 20px;
    }

    .event-image {
      height : 100px;
    }
  `]
})
export class LocationDetailsComponent implements OnInit {
  location: ILocation

  constructor(private locationService: LocationService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.location = this.locationService.getLocation(+this.route.snapshot.params['id'])
  }
}
